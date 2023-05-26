import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private repositroy: Repository<UserEntity>  
  ){}

  async findByEmail(email: string) {
    return this.repositroy.findOneBy({
      email
    })
  }

  async findById(id: number) {
    return this.repositroy.findOneBy({
      id,
    })
  }

  async create(dto: CreateUserDto) {
    return this.repositroy.save(dto)
  }
}
