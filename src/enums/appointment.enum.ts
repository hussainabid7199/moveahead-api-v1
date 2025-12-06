export enum AppointmentStatus {
  PENDING = 'PENDING', // Appointment requested, awaiting confirmation
  SCHEDULED = 'SCHEDULED', // Doctor assigned, time confirmed
  AWAITING_PAYMENT = 'AWAITING_PAYMENT', // Waiting for user to complete payment
  IN_PROGRESS = 'IN_PROGRESS', // Appointment currently happening
  COMPLETED = 'COMPLETED', // Successfully finished
  RESCHEDULED = 'RESCHEDULED', // User/doctor changed the time
  NO_SHOW = 'NO_SHOW', // Patient did not show up
  CANCELLED = 'CANCELLED', // Cancelled by user or system
}

export enum AppointmentFor {
  SELF = 'SELF', // Appointment for the user
  CHILD = 'CHILD', // Appointment for user's child
  SPOUSE = 'SPOUSE', // Appointment for husband/wife
  PARENT = 'PARENT', // Appointment for father/mother
  SIBLING = 'SIBLING', // Appointment for brother/sister
  OTHER_DEPENDENT = 'OTHER_DEPENDENT', // Any other dependent person
}
