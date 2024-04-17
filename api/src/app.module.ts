import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm';
import { TicketService } from './services/ticket';
import { TicketController } from './controller/ticket';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tickets } from './entity/ticket.entity';
import { Users } from './entity/user.entity';
import { UserController } from './controller/user';
import { UserService } from './services/user';
import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useClass: TypeormService
		}),
		TypeOrmModule.forFeature([
			Users,
			Tickets,
		])
	],
	controllers: [AppController, UserController, TicketController],
	providers: [AppService, TypeormService, TicketService, UserService],
})
export class AppModule {}
