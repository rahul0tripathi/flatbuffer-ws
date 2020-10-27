import * as types from './types';
import { Long as LongClass } from './long';
import { Encoding as EncodingEnum } from './encoding';
import { Builder as BuilderClass } from './builder';
import { ByteBuffer as ByteBufferClass } from './byte-buffer';
export declare namespace flatbuffers {
    type Offset = types.Offset;
    type Table = types.Table;
    const SIZEOF_SHORT = 2;
    const SIZEOF_INT = 4;
    const FILE_IDENTIFIER_LENGTH = 4;
    const SIZE_PREFIX_LENGTH = 4;
    const Encoding: typeof EncodingEnum;
    const int32: Int32Array;
    const float32: Float32Array;
    const float64: Float64Array;
    const isLittleEndian: boolean;
    const Long: typeof LongClass;
    const Builder: typeof BuilderClass;
    const ByteBuffer: typeof ByteBufferClass;
}
export default flatbuffers;
