/* @flow */
export interface EventEmitter {
  on: (eventName: string, cb: Function) => any;
  removeAllListeners: () => any;
}
