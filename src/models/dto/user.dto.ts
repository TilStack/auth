import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";


export class UserDto{
    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsPhoneNumber()
    phoneNumber:string

    @IsEmpty()
    @IsString()
    imageUrl:string

    @IsNotEmpty()
    @IsString()
    password:string
}

export class UpdateUserDto extends PartialType(UserDto){}