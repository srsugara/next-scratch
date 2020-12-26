import { Home } from '../container/Home'

export default Home


// Optional chaning (?.) => mencegah type error ketika mengakses nested object atau array
// const obj = {}
// obj.a?.b(); // undefined
// obj.a?.b.c().d?.[e].f; // undefined

// Nullish Coalescing Operator (??) => jika operand kiri bernilai null maka nilai pada operand kanan yg akan diambil
// const obj = {}
// obj.a?.street_name ?? "nested object tidak ditemukan"; // nested object tidak ditemukan
