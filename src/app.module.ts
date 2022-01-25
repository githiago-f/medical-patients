import { Module } from '@nestjs/common';
import { PatientsController } from './app/http/controllers/patients/patients.controller';
import { PatientsService } from './domain/patients/service/patients/patients.service';

@Module({
  imports: [],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class AppModule {}
