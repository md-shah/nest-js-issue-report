import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  findAll() {
    return { endpoint: 'findAll - calling from profile controller' };
  }

  tags() {
    return { endpoint: 'frequent-tags - profile controller' };
  }
}
