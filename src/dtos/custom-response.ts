export default class CustomResponse<T> {
  success: boolean;
  errors?: string[];
  message?: string;
  errorCode?: string;
  data?: T;
  status?: number;

  constructor(message?: string, status: number = 200, data?: T, errorCode?: string, errors?: string[]) {
    this.success = status < 400;
    this.message = message;
    this.data = data;
    this.status = status;
    this.errorCode = errorCode;
    this.errors = errors;
  }
}