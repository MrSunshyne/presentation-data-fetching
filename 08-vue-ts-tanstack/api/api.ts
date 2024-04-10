/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AtomicDouble */
export type AtomicDouble = object;

/** AtomicInteger */
export interface AtomicInteger {
  /** @format int32 */
  and_decrement?: number;
  /** @format int32 */
  and_increment?: number;
}

/** DailyChuck */
export interface DailyChuck {
  /** @format int64 */
  issue_number?: number;
  issues?: DailyChuckIssue[];
}

/** DailyChuckIssue */
export interface DailyChuckIssue {
  /** @format date-time */
  date?: string;
  joke_id?: string;
}

/** Joke */
export interface Joke {
  /** MailingList of categories. */
  categories?: string[];
  /**
   * Timestamp when the joke was created.
   * @example "2019-06-02 08:47:39.408742"
   */
  created_at?: string;
  /**
   * Absolute URL of the Chuck Norris icon.
   * @example "nzf46249t8cf7wgz3rf_rg"
   */
  icon_url?: string;
  /**
   * URL-safe Base64-encoded UUID for a joke.
   * @example "nzf46249t8cf7wgz3rf_rg"
   */
  id?: string;
  /**
   * Timestamp when the joke was updated.
   * @example "2019-06-02 08:47:39.408742"
   */
  updated_at?: string;
  /**
   * Absolute URL of the joke.
   * @example "https://api.chucknorris.io/jokes/nzf46249t8cf7wgz3rf_rg"
   */
  url?: string;
  /**
   * The contents of an incredible funny joke.
   * @example "Chuck Norris doesn't have disk latency because the hard drive knows to hurry the hell up."
   */
  value: string;
}

/** MailingListStatistic */
export interface MailingListStatistic {
  avg_sub_rate?: AtomicInteger;
  avg_unsub_rate?: AtomicInteger;
  campaign_count?: AtomicInteger;
  /** @format date-time */
  campaign_last_sent?: string;
  cleaned_count?: AtomicInteger;
  cleaned_count_since_send?: AtomicInteger;
  click_rate?: AtomicDouble;
  /** @format date-time */
  last_sub_date?: string;
  /** @format date-time */
  last_unsub_date?: string;
  member_count?: AtomicInteger;
  member_count_since_send?: AtomicInteger;
  merge_field_count?: AtomicInteger;
  open_rate?: AtomicDouble;
  target_sub_rate?: AtomicInteger;
  unsubscribe_count?: AtomicInteger;
  unsubscribe_count_since_send?: AtomicInteger;
}

/** SlackCommandResponse */
export interface SlackCommandResponse {
  attachments?: SlackCommandResponseAttachment[];
  icon_url?: string;
  response_type?: string;
  text?: string;
}

/** SlackCommandResponseAttachment */
export interface SlackCommandResponseAttachment {
  fallback?: string;
  mrkdown_in?: string[];
  text?: string;
  title?: string;
  title_link?: string;
}

/** View */
export interface View {
  content_type?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "//api.chucknorris.io";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Chuck Norris IO
 * @version 2.0.0
 * @license GNU General Public License v3.0 (https://github.com/chucknorris-io/chuck-api/blob/master/LICENSE)
 * @termsOfService https://api.chucknorris.io/
 * @baseUrl //api.chucknorris.io
 * @contact Mathias Schilling <m@matchilling.com> (https://www.matchilling.com)
 *
 * chucknorris.io is a free JSON API for hand curated Chuck Norris facts.
 *
 * Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet phenomenon and as a result have become widespread in popular culture. The 'facts' are normally absurd hyperbolic claims about Norris' toughness, attitude, virility, sophistication, and masculinity.
 *
 * Chuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized versions mentioning country-specific advertisements and other Internet phenomena. Allusions are also sometimes made to his use of roundhouse kicks to perform seemingly any task, his large amount of body hair with specific regard to his beard, and his role in the action television series Walker, Texas Ranger.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  feed = {
    /**
     * No description
     *
     * @tags feed-controller
     * @name DailyChuckRssUsingGet
     * @summary dailyChuckRss
     * @request GET:/feed/daily-chuck
     */
    dailyChuckRssUsingGet: (params: RequestParams = {}) =>
      this.request<View, void>({
        path: `/feed/daily-chuck`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed-controller
     * @name DailyChuckJsonUsingGet1
     * @summary dailyChuckJson
     * @request GET:/feed/daily-chuck.json
     */
    dailyChuckJsonUsingGet1: (params: RequestParams = {}) =>
      this.request<DailyChuck, void>({
        path: `/feed/daily-chuck.json`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed-controller
     * @name DailyChuckRssUsingGet1
     * @summary dailyChuckRss
     * @request GET:/feed/daily-chuck.xml
     */
    dailyChuckRssUsingGet1: (params: RequestParams = {}) =>
      this.request<View, void>({
        path: `/feed/daily-chuck.xml`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed-controller
     * @name DailyChuckStatsUsingGet
     * @summary dailyChuckStats
     * @request GET:/feed/daily-chuck/stats
     */
    dailyChuckStatsUsingGet: (params: RequestParams = {}) =>
      this.request<MailingListStatistic, void>({
        path: `/feed/daily-chuck/stats`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  jokes = {
    /**
     * No description
     *
     * @tags joke-controller
     * @name GetCategoriesUsingGet
     * @summary getCategories
     * @request GET:/jokes/categories
     */
    getCategoriesUsingGet: (params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/jokes/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags joke-controller
     * @name GetRandomJokeValueUsingGet
     * @summary getRandomJokeValue
     * @request GET:/jokes/random
     */
    getRandomJokeValueUsingGet: (
      query?: {
        /** category */
        category?: string;
        /** name */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/jokes/random`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags joke-controller
     * @name SearchValuesUsingGet
     * @summary searchValues
     * @request GET:/jokes/search
     */
    searchValuesUsingGet: (
      query: {
        /** query */
        query: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/jokes/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags slack-controller
     * @name CommandUsingPost
     * @summary command
     * @request POST:/jokes/slack
     */
    commandUsingPost: (
      data: {
        channelId?: string;
        channelName?: string;
        command?: string;
        enterpriseId?: string;
        enterpriseName?: string;
        responseUrl?: string;
        teamDomain?: string;
        teamId?: string;
        text?: string;
        token?: string;
        triggerId?: string;
        userId?: string;
        userName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SlackCommandResponse, void>({
        path: `/jokes/slack`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags joke-controller
     * @name GetJokeUsingGet
     * @summary getJoke
     * @request GET:/jokes/{id}
     */
    getJokeUsingGet: (id: string, params: RequestParams = {}) =>
      this.request<Joke, void>({
        path: `/jokes/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
