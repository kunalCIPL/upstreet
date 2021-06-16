import VerifyDocumentError from './exception/VerifyDocumentError';
import { validation } from './validation/validation';
import { KYC } from './interfaces/kycInterface';
import { fetchDataFromAPI } from './services/fetchDataFromApi';
import { mockBody } from './tests/files/mockData';

export async function performKYC(body: KYC): Promise<Object> {
  const check = await validation(body);
  if (check !== undefined) {
    return check;
  }
  const respone = await fetchDataFromAPI(body);
  const { verificationResultCode } = respone;
  switch (verificationResultCode) {
    case 'Y':
      return {
        kycResult: true,
      };
    case 'N':
      return {
        kycResult: false,
      };
    case 'D':
      const documentError = new VerifyDocumentError('D', 'Document Error');
      return {
        code: documentError.code,
        message: documentError.message,
      };
    case 'S':
      const serverError = new VerifyDocumentError('S', 'Server Error');
      return {
        code: serverError.code,
        message: serverError.message,
      };
  }
  return {};
}

performKYC(mockBody).then((result) => {
  console.log('result -->', result);
}).catch((error) => {
  console.log('error --->', error);
});
