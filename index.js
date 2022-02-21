//app de lista de tarefas  TODOS

class Todos {
    constructor() {
        this.todos = []
    }

    list() {
        return [...this.todos]
    }

    add(title) {

        let todos = {
            title: title,
            completed: false
        }
        this.todos.push(todos)
    }

    complete(title) {
        if (this.todos.length == 0) {
            throw new Error("Voce nao tem Tarefas, Vamos adicionar sua primeira Tarefa?")
        }
        let todoFound = false
        this.todos.forEach((todo) => {
            if (todo.title == title) {
                todo.complete = true
                todoFound = true
                return
            }
            if (!todoFound) {
                throw new Error('No TODO was found with title: ' + title)
            }
        })
    }
}

module.exports = Todos
