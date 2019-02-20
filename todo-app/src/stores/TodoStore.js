import { observable, action } from 'mobx';

export default class TodoStore {
    @observable todoItems = [];

    constructor(initialItems = []) {
        this.todoItems = initialItems;
    }

    @action('Add Todo Item')
    addTodo = (payload) => {
        this.todoItems.push(payload);
    };
}