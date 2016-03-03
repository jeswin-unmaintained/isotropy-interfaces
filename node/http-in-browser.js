/* @flow */
import type { IncomingMessage as IncomingMessageBase, ServerResponse as ServerResponseBase, Server as ServerBase } from "./http";

export interface FormDataEntryType {
  fieldname: string;
  value: string;
  filename?: string;
}

export type FormDataType = Array<FormDataEntryType>;

export type BodyType = string | FormDataType;

import type {EventEmitter} from "./events";

export interface IncomingMessage_Browser extends IncomingMessageBase {
  body: Object;
  __getBody: () => BodyType;
  href: string;
  pathname: string;
  query: Object;
  search: string;
}

export interface ServerResponse_Browser extends ServerResponseBase {
}

export interface Server_Browser extends ServerBase {
}
