// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../types';
import { compareMap } from '../codec/utils';

/**
 * @name Json
 * @description
 * Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
 * implements a Codec, it is limited in that it can only be used with input objects via RPC,
 * i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys
 * @noInheritDoc
 */
export default class Json extends Map<string, any> implements Codec {
  constructor (value?: { [index: string]: any } | null) {
    super(Json.decodeJson(value));
  }

  private static decodeJson (value?: { [index: string]: any } | null): Array<[string, any]> {
    return Object.entries(value || {});
  }

  /**
   * @description Always 0, never encodes as a Uint8Array
   */
  get encodedLength (): number {
    return 0;
  }

  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty (): boolean {
    return [...this.keys()].length === 0;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Unimplemented, will throw
   */
  toHex (): string {
    throw new Error('Unimplemented');
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = value;

      return json;
    }, {} as any);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return 'Json';
  }

  /**
   * @description Returns the string representation of the value
   */
  toString () {
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Unimplemented, will throw
   */
  toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Unimplemented');
  }
}
