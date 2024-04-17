import { Entity,Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

// Entities
import { Users } from './user.entity';

@Entity()
export class Tickets {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	description: string;

	@Column({ nullable: false, default: 1 })
	status: number;

	@Column()
	userId: number;

	@ManyToOne(() => Users, user => user.tickets)
	user: Users;
}