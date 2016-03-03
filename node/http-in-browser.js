/* @flow */
export interface FormDataEntryType {
  fieldname: string;
  value: string;
  filename?: string;
}

export type FormDataType = Array<FormDataEntryType>;

export type BodyType = string | FormDataType;

export interface IncomingMessage {
  headers: Object;
  httpVersion: string;
  method: string;
  trailers: Object;
  setTimeout: (cb: Function, msec: number) => void;
  statusCode: number;
  url: string;
  query: Object;
  href: string;
  pathname: string;
  search: string;
  body: Object;
  __getBody: () => BodyType;
}

export interface ServerResponse {
  statusCode: number;
  statusMessage: string;
  getHeader: (name: string) => string;
  setHeader: (name: string, val: string) => void;
  on: (eventName: string, cb: Function) => void;
  removeHeader: (name: string) => void;
  setTimeout: (cb: Function, msec: number) => void;
  writeHead: (code: number, headers: Object) => void;
  write: (data: string) => void;
  end(body: string, encoding?: string, cb?: Function) : void;
}

export interface Server {
  listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
}
