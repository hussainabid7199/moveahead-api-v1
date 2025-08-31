export default interface AppointmentDto {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  locality: string;
  status: string;
  paymentStatus?: string;
  appointmentSlot: Date;
  appointmentFor: string;
}

export interface AppointmentBasicDto extends AppointmentDto {
  treatmentType?: TreatmentTypeDto;
  serviceType?: ServiceTypeDto;
  payment?: PaymentDto;
  currency?: CurrencyDto;
}

export interface TreatmentTypeDto {
  name: string;
  description: string;
}

export interface ServiceTypeDto {
  name: string;
  description: string;
}

export interface PaymentDto {
  amount: number;
  status: string;
  paymentMethod: string;
}

export interface CurrencyDto {
  name: string;
}
