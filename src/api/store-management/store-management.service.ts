import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreManagementService {
  findAll() {
    return { endpoint: 'findAll - store management controller' };
  }
}
