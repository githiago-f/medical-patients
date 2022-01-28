import { Module } from '@nestjs/common';
import { PatientsService } from './service/patients/patients.service';

@Module({
  providers: [PatientsService],
  exports: [PatientsService],
})
export class PatientsModule {}
