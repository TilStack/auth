import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto,UpdateUserDto } from './models/dto/user.dto';
import { User } from './models/user.models';
import { GetUserRequest } from './models/get-user-request.dto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>){}
  private readonly users:any[]=[
    {
      userId:'123',
      stripeUserId:'43234'
    },
    {
      userId:'346',
      stripeUserId:'27279'
    }
  ]
  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest:GetUserRequest){
    return this.users.find((user)=>user.userId===getUserRequest.userId)
  }

  getUserInfo(data:any){
    console.log(data)
    return 'Reponse recu'
  }
  async createUser(userDto:UserDto){    
    //const existingUserWithEmail = await this.userRepo.findOne({ where: { email:userDto.email } })
    // if(existingUserWithEmail){
    //   throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
    // }
    try{
     

      const user = new User()

      user.name = userDto.name
      user.email = userDto.email
      user.phoneNumber = userDto.phoneNumber
      user.password = userDto.password

      await this.userRepo.save(user, {reload: true})

      return {...user}

    } catch (error) {
      console.log(error) 
      throw new HttpException('An error occurred while registering the user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(data:any){
    try {
      const user= await this.userRepo.findOne({where:{email:data.email}})
      console.log(user)
      return {...user}
    } catch (error) {
      console.log(error)
      throw new HttpException('An error occurred while find the user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(id:string,updateUserDto:UpdateUserDto){
    try {
      return await this.userRepo.update(id,updateUserDto)
    } catch (error) {
      console.log(error)
      throw new HttpException('Erreur lors de la modification de l\'utilisateur', HttpStatus.BAD_REQUEST);
    }
  }
}
