import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(data: any) {
    return this.userRepo.save(data);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  update(id: number, data: any) {
    return this.userRepo.update(id, data);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
