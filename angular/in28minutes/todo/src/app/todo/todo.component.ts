import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PASSWORD, USERNAME } from '../constant/constants';
import { Todo } from '../model/Todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(1, '', false, new Date());

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoDataService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoDataService.retrieveTodo(USERNAME, this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoDataService.createTodo(USERNAME, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        });
    } else {
      this.todoDataService.updateTodo(USERNAME, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        });
    }
  }

}
