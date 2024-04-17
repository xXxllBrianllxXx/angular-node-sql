import {Entity,Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

// Entities
import { Tickets } from './ticket.entity';

@Entity()
export class Users {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	email: string;

	@Column({ nullable: true })
	phone: string;

	@OneToMany(() => Tickets, ticket => ticket.user)
	tickets: Tickets[]
}