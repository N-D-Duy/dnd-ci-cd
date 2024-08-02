import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly users = [
    'John',
    'Doe',
    'Jane',
  ]

  getUsers(): string[] {
    return this.users;
  }

  
}
