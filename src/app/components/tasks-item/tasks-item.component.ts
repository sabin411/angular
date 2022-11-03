import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

// types
import { TaskDataProps } from '../tasks/common/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: TaskDataProps;
  @Output() onDeleteTask: EventEmitter<TaskDataProps> = new EventEmitter();
  @Output() onSetReminder: EventEmitter<TaskDataProps> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
    this.task = {
      id: 0,
      day: '',
      reminder: false,
      text: '',
    };
  }

  ngOnInit(): void {}

  handleDelete(task: TaskDataProps) {
    this.onDeleteTask.emit(task);
  }

  handleReminder(task: TaskDataProps) {
    this.onSetReminder.emit(task);
  }
}
