export default class VerifyDocumentError extends Error {
    readonly code: string

    constructor(code: string, message: string) {
      super(message); // (1)
      this.name = 'VerifyDocumentError'; // (2)
      this.code = code;
    }
}
