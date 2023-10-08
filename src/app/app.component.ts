import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'expass6';

    summary: string = '';
    description: string = '';
    
    private url = "http://localhost:8080"

    constructor(private http: HttpClient) { }

    // List over todos
    todos: any[] = [];

    // Load todos using the Todo-API (HTTP GET)
    getTodos() {
        this.http.get(this.url + "/todos").subscribe(data => {
            console.log(data);
            this.todos = data as any[];
    })
    };

    // Display all todos in a table, including a delete button in every row (HTTP DELETE)

    deleteTodo(id: string) {
        this.http.delete(this.url + "/todos/" + id).subscribe(data => {
            console.log(data);
            this.todos = this.todos.filter((item) => item !== data);
        });
    }

    // Refresh displayed todos by clicking a button (HTTP GET)

    // Add a todo by giving its description and summary (HTTP POST)

    addTodo() {
        this.http.post(this.url + "/todos", {"summary": this.summary, "description": this.description}).subscribe(data => {
            console.log(data);
            this.todos.push(data);
        });
    }

}
