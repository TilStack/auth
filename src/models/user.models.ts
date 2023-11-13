import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.model";
import * as bcrypt from 'bcrypt';

@Entity()
export class User{    
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({nullable:false, unique:true})
    email:string

    @Column({nullable:false})
    name:string

    @Column({nullable:false})
    password:string

    @Column({nullable:false,unique:true})
    phoneNumber:string

    @Column({nullable:true})
    imageUrl:string

    @OneToMany(()=>Order,(order)=>order.user)
    orders?:Order[]

    @BeforeInsert()
    async hashPassword(){
        this.password=await bcrypt.hash(this.password, 10)
    }
}