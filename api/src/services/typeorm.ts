import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {

	createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {

		return {
			type: 'mssql',
			port: 1433,
			host: 'localhost',
			username: 'root',
			password: 'toor',
			database: 'test',
			synchronize: true,
			autoLoadEntities: true,
			// logging: true,
			options: {
				encrypt: true,
				trustServerCertificate: true
			},
			entities: [
				'dist/**/*.entity.{ts.js}'
			]
		}
	}
}
