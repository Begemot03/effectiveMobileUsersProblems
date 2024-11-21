import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn()
	user_id: number;

	@Column({ type: "varchar", length: 255 })
	first_name: string;

	@Column({ type: "varchar", length: 255 })
	last_name: string;

	@Column({ type: "int" })
	age: number;

	@Column({ type: "enum", enum: ["male", "female"] })
	sex: string;

	@Column({ type: "boolean", default: false })
	problems: boolean;
}
