# Exercícios de JavaScript

## Questões de Escolha Múltipla

### Javascript é a mesma coisa que Java?
- a) Verdadeiro  
- **b) Falso**

### Como se declara uma variável em Javascript?
- **a) const carName**  
- b) variable carName  
- c) new carName  

### Que operador é usado para dar valor a uma variável?
- **a) =**  
- b) -  
- c) *  
- d) x  

### Diga o que a seguinte equação retorna: `10 > 9`
- a) false  
- **b) true**  
- c) NaN  

### Javascript é case-sensitive (que diferencia maiúsculas de minúsculas)?
- **a) Sim**  
- b) Não  

### Como se cria uma função em Javascript?
- **a) function myFunction()**  
- b) function:myFunction()  
- c) function = myFunction()  

### Como se invoca uma função chamada "myFunction"?
- a) call myFunction()  
- b) function MyFunction()  
- **c) myFunction()**

### Como se escreve o condicional IF em Javascript?
- **a) if(i === 5)**  
- b) if i = 5 then  
- c) if i = 5  
- d) if i == 5 then  

### Como escrever o condicional IF para executar um código se "i" não for igual a 5?
- a) if(i <> 5)  
- **b) if (i != 5)**  
- c) if i =! 5 then  
- d) if i <> 5  

### Como um WHILE começa?
- a) while i=1 to 10  
- **b) while (i <= 10)**  
- c) while (i <= 10; i++)  

### Como um LOOP FOR começa?
- a) for i=1 to 5  
- b) for (i=0; i<=5)  
- c) for (i<=5; i++)  
- **d) for (i=0; i<=5; i++)**

### Como se adiciona um comentário em Javascript?
- a) <!--Este é um comentário-->  
- **b) //Este é um comentário**  
- c) "Este é um comentário"  

### Como adicionar um comentário com mais de uma linha?
- **a) /*Este comentário tem mais de uma linha*/**  
- b) <!--Este comentário tem mais de uma linha-->  
- c) "Este comentário tem mais de uma linha"  

### Qual é a maneira correta de escrever um array?
- **a) const colors = ['red', 'green', 'blue']**  
- b) const colors = 'red', 'green', 'blue'  
- c) const colors = [1: 'red', 2: 'green', 3: 'blue']  
- d) const colors = ['red'], ['green'], ['blue']  

---

## Exercícios de Programação

### Variáveis

#### Crie uma variável chamada `carName` e atribua o valor `Maverick` a ela:
```javascript
const carName = "Maverick";
```

#### Crie uma variável chamada `x` e atribua o valor `50` a ela:
```javascript
const x = 50;
```

#### Exiba a soma de 5 + 10 usando duas variáveis `x` e `y`:
```javascript
const x = 5;
const y = 10;
console.log(x + y);
```

#### Complete o código criando uma variável `z`, atribuindo `x + y` a ela e exibindo o resultado:
```javascript
let x = 5;
let y = 10;
let z = x + y;
console.log(z);
```

#### Declare estas três variáveis em uma única linha:
```javascript
const firstName = "John", lastName = "Doe", age = 35;
```

---

### Operadores

#### Multiplique 10 por 5 e exiba o resultado:
```javascript
console.log(10 * 5);
```

#### Exiba o resto da divisão de 15 por 9:
```javascript
console.log(15 % 9);
```

#### Use o operador de atribuição correto para fazer `x` ser igual a `x + y`:
```javascript
x += y;
```

#### Use o operador de atribuição correto para fazer `x` ser igual a `x * y`:
```javascript
x *= y;
```

---

### Tipos de Dados

#### Use comentários para descrever o tipo correto de cada variável:
```javascript
let length = 16; // Número
let lastName = "Johnson"; // String
const x = { firstName: "John", lastName: "Doe" }; // Objeto
```

---

### Funções

#### Execute a função chamada `myFunction`:
```javascript
function myFunction() {
  alert("Hello World!");
}
myFunction();
```

#### Complete o código, criando uma função chamada `myFunction`:
```javascript
function myFunction() {
  console.log("Hello World");
}
myFunction();
```

#### Complete o código para retornar "Hello":
```javascript
function myFunction() {
  return "Hello";
}
console.log(myFunction(), "World");
```

---

### Objetos

#### Mostre a informação "John" em um console.log:
```javascript
const person = { firstName: "John", lastName: "Doe" };
console.log(person.firstName);
```

#### Adicione a propriedade `country: Norway` ao objeto `person`:
```javascript
const person = { firstName: "John", lastName: "Doe" };
person.country = "Norway";
```

#### Crie um objeto e exiba uma mensagem:
```javascript
const person = { name: "John", age: 50 };
console.log(`${person.name} tem ${person.age} anos.`);
```

---

### Strings

#### Exiba o comprimento de `txt`:
```javascript
let txt = "Hello World!";
let x = txt.length;
console.log(x);
```

#### Concatene duas strings:
```javascript
let str1 = "Hello ";
let str2 = "World!";
console.log(str1 + str2);
```

#### Converta para maiúsculas:
```javascript
let txt = "Hello World!";
console.log(txt.toUpperCase());
```

#### Substitua "Hello" por "Welcome":
```javascript
let txt = "Hello World";
console.log(txt.replace("Hello", "Welcome"));
```

---

### Arrays

#### Mostre "Volvo":
```javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);
```

#### Mude o primeiro item para "Ford":
```javascript
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Ford";
```

#### Mostre o número de itens:
```javascript
const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);
```

#### Remova o último item:
```javascript
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
```

#### Adicione "Kiwi":
```javascript
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
```

#### Remova "Orange" e "Apple":
```javascript
const fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 2);
```

---

### Condicionais

#### Mostre "Hello World" se `x` for maior que `y`:
```javascript
if (x > y) {
  console.log("Hello World");
}
```

#### Mostre "Hello World" ou "Goodbye":
```javascript
if (x > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}
```

---

### Loops

#### Loop `for` de 0 a 9:
```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

#### Loop `while` com incremento de 2:
```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i += 2;
}
```
