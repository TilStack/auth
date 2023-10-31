import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from './models/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  gatUser(data:any){
    return this.appService.getUser(data)
  }
  
  @MessagePattern('get_userInfo')
  getUserInfo(data:any){
    console.log(data.toString())
    return this.appService.getUserInfo(data)
  }

  @MessagePattern('create_user')
  async createUser(data:UserDto){
    console.log('.......................'+data.email+"......................")
    const retour = await this.appService.createUser(data)
    console.log("4....................."+retour.id)
    return retour
  }
}
