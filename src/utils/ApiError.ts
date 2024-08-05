export class ApiError extends Error {
  public errorCode: number;
  public data: any[];

  constructor(errorCode: number, message: string, data?: any[]) {
    super(message);
    this.errorCode = errorCode;
    this.name = "ApiError";
    this.data = data ?? [];
  }
}
