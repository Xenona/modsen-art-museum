export class ApiError extends Error {
  public errorCode: number;

  constructor(errorCode: number, message: string) {
    super(message);
    this.errorCode = errorCode;
    this.name = "ApiError";
  }
}
