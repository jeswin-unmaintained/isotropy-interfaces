/* @flow */
import type { ProcessedIncomingMessage, ServerResponse as ServerResponseBase, Server as ServerBase } from "./http";

export type FormDataEntryType = {
  fieldname: string;
  value?: string;
  filename?: string;
  file?: Object;
  transferEncoding?: string;
  mimeType?: string;
}

export type FormDataType = Array<FormDataEntryType>;

export type BodyType = string | FormDataType;

import type {EventEmitter} from "./events";

export interface IncomingMessage extends ProcessedIncomingMessage {
  __getBody: () => BodyType;
  __setBody(val: BodyType) => void;
}

export interface ServerResponse extends ServerResponseBase {
}

export interface Server extends ServerBase {
  requestListener: (req: IncomingMessage, res: ServerResponse) => any
}
