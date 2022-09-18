import { CreateTaskesDto } from './Dto/createTaskeDto.dto';
import { TaskeStatus, Tasks } from './taskes.status.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskesService } from './taskes.service';

@Controller('taskes')
export class TaskesController {
  constructor(private taskesService: TaskesService) {
    // Constructor
  }

  // gets all the taskes list
  @Get()
  getTakesFun(): Tasks[] {
    return this.taskesService.getTaskes();
  }

  //this will get the taskes by id
  @Get('/:id')
  getTaskeById(@Param('id') id: string): Tasks {
    return this.taskesService.getTaskById(id);
  }

  //creates new taskes
  @Post('createTaske')
  createTaske(@Body() createTaskesDto: CreateTaskesDto): Tasks {
    return this.taskesService.createTask(createTaskesDto);
  }

  //delete a task from the list
  @Delete('deleteTask')
  deleteTaske(@Body('id') id: string): string {
    return this.taskesService.deleteTaske(id);
  }

  //to update the task based on the id
  @Patch('/:id')
  updateTaskeById(@Param('id') id: string): Tasks {
    return this.taskesService.updateTaskStatus(id);
  }
}
