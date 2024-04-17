import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tickets } from 'src/entity/ticket.entity';
import { ResponseInterface } from 'src/interfaces/response';

@Injectable()
export class TicketService {

	constructor(
		@InjectRepository(Tickets) private ticketRepository: Repository<Tickets>,
	) {}

	async getTickets(): Promise<Tickets[]> {
		return await this.ticketRepository.find({ select: ['id','description','status'] });
	}

	async getTicket(id: number): Promise<Tickets> {
		return await this.ticketRepository.findOneBy({ id: id });
	}

	async addTicket(ticket: Tickets): Promise<Tickets> {
		return await this.ticketRepository.save(ticket);
	}

	async updateTicket(ticket: Tickets): Promise<Tickets> {
		return await this.ticketRepository.save(ticket);
	}

	async deleteTicket(id: number): Promise<boolean> {
		await this.ticketRepository.delete(id);
		return true;
	}
}
