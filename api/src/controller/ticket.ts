import { TicketService } from 'src/services/ticket';
import { ResponseInterface } from 'src/interfaces/response';
import { Tickets } from 'src/entity/ticket.entity';
import { Body, Controller, Get, Post, Put, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';

@Controller('ticket')
export class TicketController {

	constructor(private ticketService: TicketService) {}

	@Get('get')
	async getTickets(): Promise<ResponseInterface> {
		return this.ticketService.getTickets().then(res => {
			return <ResponseInterface>{
				success: true,
				msg: 'Success...',
				data: res
			}
		}).catch(e => {
			throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
		});
	}

	@Get(':id')
	async getTicket(@Param('id') id: number): Promise<ResponseInterface> {
		return this.ticketService.getTicket(id).then(res => {
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
	async addTicket(@Body() ticket): Promise<ResponseInterface> {
		return this.ticketService.addTicket(ticket).then(res => {
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
	async updateTicket(@Body() ticket): Promise<ResponseInterface> {
		return this.ticketService.updateTicket(ticket).then(res => {
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
	async deleteTicket(@Param('id') id: number): Promise<ResponseInterface> {
		return this.ticketService.deleteTicket(id).then(res => {
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
