import { Component, OnInit } from '@angular/core';
import { TaskDataProps } from './common/Task';
import { tasks } from './common/mock-tasks';
// services
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskDataProps[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => (this.tasks = task));
  }

  deleteTask(task: TaskDataProps) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  onSetReminder(task: TaskDataProps) {
    const updatedTask = { ...task, reminder: !task.reminder };
    this.taskService.updateTask(updatedTask).subscribe(() => {
      this.tasks = this.tasks.map((t) =>
        t.id === task.id ? { ...t, reminder: !t.reminder } : t
      );
    });
  }

  onAddTask(task: TaskDataProps) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks = [...this.tasks, task];
    });
  }
}
