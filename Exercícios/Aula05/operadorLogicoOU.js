//Operador OU (OR)  ||
//retorna false se, e somente se, todos booleanos envolvidos também forem false

true || true //true
false || true //true
true || false //true
false || false //false



const a = true
const b = false
const c = false
console.log(a || b) //true
console.log(b || c) //false
console.log(a || c) //true
console.log(a || b || c) //true
