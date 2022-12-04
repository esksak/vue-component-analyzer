import {resolve} from 'path';

export class FileCounter {
  private _count: {[key: string]: number} = {};

  public add(_filename: string): void {
    const filename = resolve(_filename);

    if (Object.prototype.hasOwnProperty.call(this._count, filename)) {
      this._count[filename]++;
    } else {
      this._count[filename] = 1;
    }
  }

  public clear(): void {
    this._count = {};
  }

  public get result(): {[key: string]: number} {
    return this._count;
  }
}

export const fileCounter = new FileCounter();
