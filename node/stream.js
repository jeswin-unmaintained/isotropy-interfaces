/* @flow */
export interface Stream {
  on: (name: string, fn: Function) => any;
  pipe: (dest: any) => void;
}
