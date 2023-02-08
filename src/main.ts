import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ bodyLimit: 10485760 }),
  );

  app
    .getHttpAdapter()
    .getInstance()
    .addHook('onRoute', (opts) => {
      console.log(opts.routePath);
    });
  await app.listen(3000, () => console.log('Listening on port 3000'));
}
bootstrap();
