import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.models"

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id:string

    @ManyToOne(()=>User,user=>user.orders)
    user:User

    @Column()
    price:string
}