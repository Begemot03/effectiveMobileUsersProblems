import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { User } from "./enities/user.entity";
import { AppDataSource } from "./data-source";

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: async () => {
				if (!AppDataSource.isInitialized) {
					await AppDataSource.initialize();
				}
				return AppDataSource.options;
			},
		}),
		TypeOrmModule.forFeature([User]),
	],
	controllers: [UserController],
	providers: [UserService],
})
export class AppModule {}
