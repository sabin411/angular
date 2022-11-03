import { Injectable } from '@angular/core';

// packages
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// common
import { TaskDataProps } from '../components/tasks/common/Task';
import { tasks } from '../components/tasks/common/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskDataProps[]> {
    return this.http.get<TaskDataProps[]>(this.apiUrl);
  }

  deleteTask(task: TaskDataProps): Observable<TaskDataProps> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskDataProps>(url);
  }

  updateTask(task: TaskDataProps): Observable<TaskDataProps> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskDataProps>(url, task);
  }

  addTask(task: TaskDataProps): Observable<TaskDataProps> {
    return this.http.post<TaskDataProps>(this.apiUrl, task);
  }
}
