import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';

@Component({
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
  todos: Todo[] = [];

  todo = new Todo();

  text: string = 'prova';
  constructor() {}

  ngOnInit(): void {}

  removeTodo(i: number) {
    this.todos.splice(i, 1);
  }

  checkTodo(i: number) {
    this.todos[i].check = this.todos[i].check === 'check' ? '' : 'check';
  }

  addTodo() {
    this.todos.push(this.todo);
    this.todo = new Todo();
  }
}
