import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_GET_TODOS } from 'src/app/constant/constants';
import { Todo } from 'src/app/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(URL_GET_TODOS + `${username}` + "/todos");
  }

  retrieveTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(URL_GET_TODOS + `${username}` + "/todos" + "/" + `${id}`);
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post<Todo>(URL_GET_TODOS + `${username}` + "/todos", todo);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put<Todo>(URL_GET_TODOS + `${username}` + "/todos" + "/" + `${id}`, todo);
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete<Todo[]>(URL_GET_TODOS + `${username}` + "/todos" + "/" + `${id}`);
  }
}
