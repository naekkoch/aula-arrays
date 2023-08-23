/*
exercicio 1:

a) undefined
b) null
c) 11
d) 3
e) 19
f) 9

exercicio 2

"SUBI NUM ÔNIBUS EM MIRROCOS" 27

exercicio 1



const nome = prompt ("Qual o seu nome?")
const email = prompt ("Qual seu email?")

console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vinda(o),", nome)



exercicio 2

let comidas = ["sushi", "lasanha", "pizza", "marmita", "hamburguer"]
console.log(comidas)
const comidaFav = prompt ("Qual sua comida favorita?")
comidas[1] = comidaFav




exercicio 3
*/
let listaDeTarefas = []
const pergunta1 = prompt ("Me diga 1 tarefa do seu dia a dia")
listaDeTarefas.push(pergunta1)
const pergunta2 = prompt ("Me diga mais uma tarefa")
listaDeTarefas.push(pergunta2)
const pergunta3 = prompt ("Só mais um, eu juro")
listaDeTarefas.push(pergunta3)
console.log(listaDeTarefas)
const a = prompt("Agora me fale um numero de 0 a 2")
listaDeTarefas.splice(a, 1)
console.log(listaDeTarefas)

 
