import { data } from './data';
import lzs from 'lz-string';
import { EJSON } from 'bson';
import { stringify } from 'zipson';
import { encode } from '@msgpack/msgpack';

const stringData = JSON.stringify(data);

const lzsS = lzs.compress(stringData);
const ejsons = EJSON.stringify(data);
const zipsons = stringify(data);
const msgs = encode(data);

console.log(stringData);
console.log(lzsS);
console.log(ejsons);
console.log(zipsons);
console.log(new TextDecoder().decode(msgs));
