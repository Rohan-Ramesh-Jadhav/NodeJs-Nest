import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
