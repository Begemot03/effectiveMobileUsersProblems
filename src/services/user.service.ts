import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../enities/user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async fixProblems(): Promise<number> {
		const affectedUsersCount = await this.userRepository
			.createQueryBuilder()
			.where("problems = :problems", { problems: true })
			.update(User)
			.set({ problems: false })
			.execute();

		return affectedUsersCount.affected;
	}
}
