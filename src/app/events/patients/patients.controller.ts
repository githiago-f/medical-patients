import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Patient } from 'src/domain/patients/entity/patient';
import { PatientsService } from 'src/domain/patients/service/patients/patients.service';

@Controller()
export class PatientsController {
  private readonly LOG = new Logger(PatientsController.name);

  constructor(
    private readonly service: PatientsService
  ) {}

  @MessagePattern('patients.create')
  public createPatient() {
    this.LOG.debug('patients.create');
    return this.service.createPatient(new Patient());
  }
}
