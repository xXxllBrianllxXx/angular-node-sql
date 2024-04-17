import { TicketModel } from "./ticket";

export interface UserModel {
	id: number;
	name: string;
	lastname: string;
	email: string;
	phone: number;
	tickets: TicketModel[];
}
