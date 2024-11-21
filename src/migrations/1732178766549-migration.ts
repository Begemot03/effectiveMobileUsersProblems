import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { faker } from "@faker-js/faker/locale/ru";

export class Migration1732178766549 implements MigrationInterface {
	name = "Migration1732178766549";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "users",
				columns: [
					{
						name: "user_id",
						type: "bigint",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{ name: "first_name", type: "varchar", length: "255" },
					{ name: "last_name", type: "varchar", length: "255" },
					{ name: "age", type: "int" },
					{ name: "sex", type: "enum", enum: ["male", "female"] },
					{ name: "problems", type: "boolean", default: false },
				],
			}),
		);

		const batchSize = 10000;
		const totalUsers = 1000000;

		for (let i = 0; i < totalUsers; i += batchSize) {
			const users = Array(batchSize)
				.fill(0)
				.map(() => ({
					first_name: faker.person.firstName(),
					last_name: faker.person.lastName(),
					age: Math.ceil(Math.random() * 50 + 5),
					sex: faker.helpers.arrayElement(["male", "female"]),
					problems: Math.random() > 0.7,
				}));

			await queryRunner.manager
				.createQueryBuilder()
				.insert()
				.into("users")
				.values(users)
				.execute();
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("users");
	}
}
