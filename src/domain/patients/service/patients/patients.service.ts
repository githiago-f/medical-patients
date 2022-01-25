import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Patient } from '../../entity/patient';

@Injectable()
export class PatientsService {
  private readonly patientsRepository: Map<string, Patient> = new Map();

  createPatient(patient: Patient) {
    patient.id = randomUUID();
    this.patientsRepository.set(patient.id, patient);
    return this.patientsRepository.get(patient.id);
  }
}
