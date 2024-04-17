import { UserService } from 'src/services/user';
import { ResponseInterface } from 'src/interfaces/response';
import { Body, Controller, Get, Post, Put, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';

@Controller('user')
export class UserController {

	constructor(private userService: UserService) {}

	@Get('get')
	async getUsers(): Promise<ResponseInterface> {
		return this.userService.getUsers().then(res => {
			return <ResponseInterface>{
				success: true,
				msg: 'Success...',
				data: res
			}
		}).catch(e => {
			throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
		});
	}

	@Post('add')
	async addUser(@Body() user): Promise<ResponseInterface> {
		return this.userService.addUser(user).then(res => {
			return <ResponseInterface>{
				success: true,
				msg: 'Success...',
				data: res
			}
		}).catch(e => {
			throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
		});
	}

	@Put('update')
	async updateUser(@Body() user): Promise<ResponseInterface> {
		return this.userService.updateUser(user).then(res => {
			return <ResponseInterface>{
				success: true,
				msg: 'Success...',
				data: res
			}
		}).catch(e => {
			throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
		});
	}

	@Delete('delete/:id')
	async deleteUser(@Param('id') id: number): Promise<ResponseInterface> {
		return this.userService.deleteUser(id).then(res => {
			return <ResponseInterface>{
				success: true,
				msg: 'Success...',
				data: res
			}
		}).catch(e => {
			throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
		});
	}
}
