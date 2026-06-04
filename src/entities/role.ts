import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "../models/role.enum";
import { User } from "./user";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  role!: Roles;

  @ManyToMany(() => User, (user) => user.roles)
  users!: User[];
}
