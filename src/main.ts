import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.use(compression());
  await app.listen(8080).then(()=>{
    Logger.log('Running on 8080')
  })
}
bootstrap();

