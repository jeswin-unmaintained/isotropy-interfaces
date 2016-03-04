/* @flow */
import type { ProcessedIncomingMessage, ServerResponse as ServerResponseBase, Server as ServerBase } from "./http";

export interface FormDataEntryType {
  fieldname: string;
  value: string;
  filename?: ?string;
}

export type FormDataType = Array<FormDataEntryType>;

export type BodyType = string | FormDataType;

import type {EventEmitter} from "./events";

export interface IncomingMessage extends ProcessedIncomingMessage {
  __getBody: () => BodyType;
}

export interface ServerResponse extends ServerResponseBase {
}

export interface Server extends ServerBase {
}
