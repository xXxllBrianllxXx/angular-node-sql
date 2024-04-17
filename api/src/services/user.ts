import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Users } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(Users) private userRepository: Repository<Users>,
	) {}

	async getUsers(): Promise<Users[]> {
		return await this.userRepository.find({ select: ['id','name','lastname','phone','email'], relations: ['tickets'] });
	}

	async addUser(user: Users): Promise<Users> {
		return await this.userRepository.save(user);
	}

	async updateUser(user: Users): Promise<Users> {
		return await this.userRepository.save(user);
	}

	async deleteUser(id: number): Promise<boolean> {
		await this.userRepository.delete(id);
		return true;
	}
}
