import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreProfileService {
  findAll() {
    return { endpoint: 'findAll - store profile controller' };
  }
}
