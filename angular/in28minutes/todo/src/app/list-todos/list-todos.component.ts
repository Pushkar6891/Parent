import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/Todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message: string = '';

  constructor(
    private router: Router,
    private todoDataService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('pushkar').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id: number) {
    this.todoDataService.deleteTodo('pushkar', id).subscribe(
      response => {
        this.message = `Deleted Todo with id : ${id} Successful`
        this.refreshTodos();
      }
    );
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
