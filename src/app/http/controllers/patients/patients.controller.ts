import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Patient } from 'src/domain/patients/entity/patient';
import { PatientsService } from 'src/domain/patients/service/patients/patients.service';

@Controller()
export class PatientsController {
  constructor(
    private readonly patientsService: PatientsService
  ) {}

  @MessagePattern({ cmd: 'patients.create' })
  public createPatient() {
    return this.patientsService.createPatient(new Patient());
  }
}
