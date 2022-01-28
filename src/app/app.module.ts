import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from 'src/domain/patients/patients.module';
import { PatientsController } from './events/patients/patients.controller';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    PatientsModule,
  ],
  controllers: [PatientsController],
})
export class AppModule {}
