export const mockBody = {
  birthDate: '1985-02-08',
  givenName: 'James',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'QLD',
  expiryDate: '2020-01-01',
};

export const missingDOB = {
  givenName: 'James',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'QLD',
  expiryDate: '2020-01-01',
};

export const invalidDateFormat = {
  birthDate: '08-10-1999',
  givenName: 'James',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'QLD',
  expiryDate: '2020-01-01',
};

export const longerName = {
  birthDate: '1985-02-08',
  givenName: 'jjasdasdajlkjsakdljskaljdksajdklsjakljdalkjdkaljdklajdklsajkdlsajkldsjlkajdlksajdklsjakldjakldjkalsjkaldjskljdakljdklsjdkajdklajdlksajdlkjsalkdjlakjdskaljdklajdlksajdlkajtryrytryryryttryryrytyrdfgdgdgdkjhkjhkjhjkhjkhjhhkhkjhkjhkjhkj',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'QLD',
  expiryDate: '2020-01-01',
};

export const invalidState = {
  birthDate: '1985-02-08',
  givenName: 'James',
  middleName: 'Robert',
  familyName: 'Smith',
  licenceNumber: '94977000',
  stateOfIssue: 'TTY',
  expiryDate: '2020-01-01',
};
