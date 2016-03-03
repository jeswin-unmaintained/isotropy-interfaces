/* @flow */
export interface EventEmitter {
  on: (eventName: string, cb: Function) => void;
  removeAllListeners: () => void;
}
