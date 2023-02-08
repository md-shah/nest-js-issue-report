import { Controller, Get, Param, Patch } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller({
  path: ':accountType/profile',
})
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('')
  findAll() {
    return this.profileService.findAll();
  }

  @Get('tags')
  tags() {
    return this.profileService.tags();
  }
}
