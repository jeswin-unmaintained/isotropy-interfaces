/* @flow */
import type {EventEmitter} from "./events";

export interface IncomingMessage extends EventEmitter {
  headers: Object;
  httpVersion: string;
  method: string;
  pipe: (dest: any) => void;
  trailers: Object;
  setTimeout: (cb: Function, msec: number) => void;
  statusCode: number;
  url: string;
}

export interface EnhancedIncomingMessage extends IncomingMessage {
  body?: Object;
  href?: string;
  pathname?: string;
  query?: Object;
  search?: string;
}

export interface ServerResponse extends EventEmitter {
  pipe: (dest: any) => void;
  getHeader: (name: string) => string;
  setHeader: (name: string, val: string) => void;
  removeHeader: (name: string) => void;
  setTimeout: (cb: Function, msec: number) => void;
  statusCode: number;
  statusMessage: string;
  writeHead: (code: number, headers: Object) => void;
  write: (data: string) => void;
  end(body?: string, encoding?: string, cb?: Function) : void;
}

export interface Server {
  listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
}
