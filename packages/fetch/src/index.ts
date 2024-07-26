import type { AuthenticatedOptions, EndpointType, KnownEndpoint, LocalizedOptions, OptionsByEndpoint } from '@gw2api/types/endpoints';
import { SchemaVersion } from '@gw2api/types/schema';

type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T];

// if OptionsByEndpoint<Url> has no required keys, make the options parameter optional
type Args<Url extends string, Schema extends SchemaVersion> = RequiredKeys<OptionsByEndpoint<Url>> extends never
  ? [endpoint: Url, options?: FetchGw2ApiOptions<Schema> & OptionsByEndpoint<Url> & FetchOptions]
  : [endpoint: Url, options: FetchGw2ApiOptions<Schema> & OptionsByEndpoint<Url> & FetchOptions]

export async function fetchGw2Api<
  Url extends KnownEndpoint | (string & {}),
  Schema extends SchemaVersion = undefined
>(
  ...[endpoint, options]: Args<Url, Schema>
): Promise<EndpointType<Url, Schema>> {
  const url = new URL(endpoint, 'https://api.guildwars2.com/');

  if(options.schema) {
    url.searchParams.set('v', options.schema);
  }
  if(hasLanguage(options)) {
    url.searchParams.set('lang', options.language);
  }
  if(hasAccessToken(options)) {
    url.searchParams.set('access_token', options.accessToken);
  }

  // call the API
  const response = await fetch(url, { redirect: 'manual', signal: options.signal, cache: options.cache });

  // call onResponse handler
  await options.onResponse?.(response);

  // check if the response is json (`application/json; charset=utf-8`)
  const isJson = response.headers.get('content-type').startsWith('application/json');

  // check if the response is an error
  if(!response.ok) {
    // if the response is JSON, it might have more details in the `text` prop
    if(isJson) {
      const error: unknown = await response.json();

      if(typeof error === 'object' && 'text' in error && typeof error.text === 'string') {
        throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' returned ${response.status} ${response.statusText}: ${error.text}.`, response);
      }
    }

    // otherwise just throw error with the status code
    throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' returned ${response.status} ${response.statusText}.`, response);
  }

  // if the response is not JSON, throw an error
  if(!isJson) {
    throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' did not respond with a JSON response`, response);
  }

  // parse json
  const json = await response.json();

  // check that json is not `["v1", "v2"]` which sometimes happens for authenticated endpoints
  if(url.toString() !== 'https://api.guildwars2.com/' && Array.isArray(json) && json.length === 2 && json[0] === 'v1' && json[1] === 'v2') {
    throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' did returned an invalid response (["v1", "v2"])`, response);
  }

  // TODO: catch more errors

  return json;
}

export type FetchGw2ApiOptions<Schema extends SchemaVersion> = {
  /** The schema to use when making the API request */
  schema?: Schema;

  /**
   * onResponse handler. Called for all responses, successful or not.
   * Make sure to clone the response in case of consuming the body.
   */
  onResponse?: (response: Response) => void | Promise<void>;
}

export type FetchOptions = {
  /** @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal */
  signal?: AbortSignal,

  /** @see https://developer.mozilla.org/en-US/docs/Web/API/Request/cache */
  cache?: RequestCache,
}

export class Gw2ApiError extends Error {
  constructor(message: string, public response: Response) {
    super(message);
    this.name = 'Gw2ApiError';
  }
}

function hasLanguage(options: OptionsByEndpoint<any>): options is LocalizedOptions {
  return 'language' in options;
}

function hasAccessToken(options: OptionsByEndpoint<any>): options is AuthenticatedOptions {
  return 'accessToken' in options;
}
