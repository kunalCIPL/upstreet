import { Validator } from 'node-input-validator';
import { KYC } from '../interfaces/kycInterface';

export async function validation(requestBody: KYC): Promise<any> {
  const validate = new Validator(requestBody, {
    birthDate: 'required|dateFormat:YYYY-MM-DD',
    givenName: 'required|maxLength:100',
    middleName: 'maxLength:100',
    familyName: 'required|maxLength:100',
    licenceNumber: 'required',
    stateOfIssue: 'required|in:NSW,QLD,SA,TAS,VIC,WA,ACT,NT',
    expiryDate: 'dateFormat:YYYY-MM-DD',
  });
  const matched = await validate.check();
  if (!matched) {
    const listOfValidation = Object();
    const { errors } = validate;
    Object.keys(errors).map((error) => {
      const val = Object();
      listOfValidation['message'] = errors[error].message;
    });
    return listOfValidation;
  }
}
