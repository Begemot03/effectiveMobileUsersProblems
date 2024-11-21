import { Controller, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post("fix")
	async fixProblems(): Promise<number> {
		const count = await this.userService.fixProblems();
		return count;
	}
}
