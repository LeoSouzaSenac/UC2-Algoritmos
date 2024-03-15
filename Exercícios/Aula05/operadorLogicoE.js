//Operador E (AND)  &&
//retorna true se, e somente se, os todos booleanos envolvidos também forem true

true && true //true
false && true //false
true && false //false
false && false //false

const var1 = 50
const var2 = 50
const var3 = 78

console.log((var1 === var2) && (var1 > var3))
true && false
false





/*
Antes de começar, crie 3 variáveis: a, b e c. 
Atribua os valores true, false e true, respectivamente
a = true      b = false     c = true


Realize a operação: a && b
Realize a operação: b && c
Realize a operação: a && c
Realize a operação: a && b && c
*/

const a = true
const b = false
const c = true
console.log(a && b) //false
console.log(b && c) //false
console.log(a && c) //true
console.log(a && b && c) //false