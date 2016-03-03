/* @flow */
export interface Stream {
  on: (name: string, fn: Function) => void;
  pipe: (dest: any) => void;
}
