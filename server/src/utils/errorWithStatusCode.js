export class ErrorWithStatusCode extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
