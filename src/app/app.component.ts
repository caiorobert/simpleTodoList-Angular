import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root', //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  public todos: Todo[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    this.load();
  }

  load() {
    this.todos.push({
      title: 'Passear com o cahorro',
      done: false
    });
    this.todos.push({
      title: 'Ir ao supermercado',
      done: false
    });
  }

  addTodo() {
    const title = this.form.controls['title'].value;
    this.todos.push(new Todo(title, false));
    this.form.reset();
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }
}
