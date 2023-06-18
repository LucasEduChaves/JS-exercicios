/*
let student = prompt(`Qual é o nome do aluno? `)

let grade1 = prompt(`Qual é a primeira nota? `)
let grade2 = prompt(`Qual é a segunda nota? `)

let average = (Number(grade1) + Number(grade2)) / 2

let result = average > 7

average = average.toFixed(1)

if (result) {
  alert(`A média do(a) aluno(a) ${student} é: ${average} 
 Parabéns você passou no concurso!!!`) 
} else {
  alert(` ${student} sua média foi ${average}.
 Não foi dessa vez! Você foi reprovado no concurso!!!`)
}
*/

let option
let students = [];


while(option !== 3) {
  
  option = Number(prompt(
  ` Selecione uma das opções para continuar:

  1. Cadastrar novo estudante: 
  2. Alunos cadastrados e suas médias: 
  3. Sair do progama.
 
 `));


switch(option) {

  case 1:
    let student = prompt(`Qual o nome do aluno? `);
    let grade1 = prompt(`Qual a primeira nota do aluno? `);
    let grade2 = prompt(`Qual a segunda nota do aluno? `);

    let average = (Number(grade1) + Number(grade2)) / 2;
    if(average >= 7) {
      alert(`Meus parabéns ${student}, sua media foi ${average} voce passou!!!`)
    } else {alert(`Que pena ${student}, sua media foi ${average} voce reprovou`)
  }

    students.push({student, average});
    break;

  case 2:
    if(students.length === 0) {
      alert(`Ainda não existe alunos cadastrados!`);
    } else {
      let result = '';
      students.forEach((item) => {
        let status = item.average > 7 ? 'Aprovado' : 'Reprovado';
      result += `Aluno: ${item.student}, Média: ${item.average}, Status: ${status}\n`;
    });
      alert(result);
    }
    break;

  case 3:
    alert(`Muito obrigado, tchau`)
    break;

  default:
    alert(`Opção invalída. Tente novamente`)
}
}