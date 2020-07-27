import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './modules/common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { SendGridModule } from '@ntegral/nestjs-sendgrid';


@Module({
  imports: [CommonModule, AuthModule, UsersModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    SendGridModule.forRoot(configService.getSendGridConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

 
}
