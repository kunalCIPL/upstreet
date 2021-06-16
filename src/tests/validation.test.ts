import { validation } from '../validation/validation';
import {
  mockBody, invalidDateFormat, longerName, invalidState,
} from './files/mockData';

jest.mock('../validation/validation');

it('should return undefined', async () => {
  expect(await validation(mockBody)).toBeUndefined();
});

it('should return date of birth correct format', async () => {
  expect(await validation(invalidDateFormat)).toStrictEqual({
    message: "The birth date does not match the date format YYYY-MM-DD.",
  });
});

it('should return first name less than 100 Characters', async () => {
  expect(await validation(longerName)).toStrictEqual({
    message: "The given name can not be greater than 100.",
  });
});

it('should return state is invalid', async () => {
  expect(await validation(invalidState)).toStrictEqual({
    message: "The selected state of issue is invalid.",
  });
});
