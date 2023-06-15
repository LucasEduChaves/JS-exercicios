/*
💡 O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? 💜
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
*/

let primaryValue = prompt(`Insira o primeiro valor: `)
let secondValue = prompt(`Insira o segundo valor: `)

primaryValue = Number(primaryValue)
secondValue = Number(secondValue)

const sum = primaryValue + secondValue
const sub = primaryValue - secondValue
const multi = primaryValue * secondValue
const div = primaryValue / secondValue
const restDiv = primaryValue % secondValue


alert(`A soma é: ${sum}`)
alert(`A subtração é: ${sub}`)
alert(`A multiplição é: ${multi}`)
alert(`A divisão é: ${div}`)
alert(`O resto da divcidão é: ${restDiv}`)

let same = primaryValue + secondValue;

if (same % 2 === 0) {
  alert(`A soma dos dois números é par.`);
} else {
  alert(`A soma dos dois números é ímpar.`);
}

if (primaryValue === secondValue) {
  alert(`Os números são iguais`)
} else {
  alert(`Os números são diferentes`)
}