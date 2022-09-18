// import { Task } from './tasks.entity';
import { CreateTaskesDto } from './Dto/createTaskeDto.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskeStatus, Tasks } from './taskes.status.enum';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskesService {
  private tasks: Tasks[] = [];
  //service function to return all taskes
  getTaskes(): Tasks[] {
    return this.tasks;
  }

  //service function to create the taske and return the current added take
  createTask(createTaskesDto: CreateTaskesDto): Tasks {
    const { title, description } = createTaskesDto;
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskeStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  //service function to return the task based on id
  getTaskById(id: string): any {
    //check for the id existence error handling
    const found = this.tasks.find((task) => task.id == id);
    if (!found) {
      throw new NotFoundException(`There is no task with id ${id}`);
    } else {
      return found;
    }
  }

  //function to delete the taske form the list
  deleteTaske(id: string): string {
    //validate the existence of the task by getTaskById function
    const forund = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id != id);
    return 'done';
  }

  //update status of the taske based on id and status
  updateTaskStatus(id: string): Tasks {
    const task = this.getTaskById(id);
    if (task.status == TaskeStatus.OPEN) {
      task.status = TaskeStatus.IN_PROGRESS;
      return task;
    } else if (task.status == TaskeStatus.IN_PROGRESS) {
      task.status = TaskeStatus.DONE;
      return task;
    } else {
      task.status = TaskeStatus.OPEN;
    }
    return this.tasks.find((task) => task.id == id);
  }
}
