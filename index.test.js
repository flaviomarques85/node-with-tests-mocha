const Todos = require('./index')
const assert = require('assert').strict

//Testes Automatizados
describe('Grupo de testes class TODOS', () => {
    //Teste avalia se ao iniciar a classe Tarefas a lista de tarefas é vazia
    it("Iniciando Classe Tarefas", () => {
        let todos = new Todos()
        assert.strictEqual(todos.list().length, 0)
    })

    it("Adicionando uma Tarefa", () => {
        let todos = new Todos()
        todos.add("Testando uma adicao")
        assert.strictEqual(todos.list().length, 1)
    })
})

describe("Grupo de testes do metodo Complete()", () => {
    //Teste que avalidar se caso chamarmos o complete() em uma lista vazia vai retornar uma exception
    it("Avaliando se complete em tarefas fazia retorna erro", () => {
        let todos = new Todos()
        const expectedError = new Error("Voce nao tem Tarefas, Vamos adicionar sua primeira Tarefa?")

        assert.throws(() => {
            todos.complete("nao existe")
        }, expectedError)
    })
})