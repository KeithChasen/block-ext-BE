import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { UsersService } from './users.service';

@Module({
  imports: [DbModule], // since service uses db module
  providers: [UsersService],
  exports: [UsersService], // so we can use it in other modules
})
export class UsersModule {}
