import { Toys } from './toys';

describe('Toys', () => {
  it('should create an instance', () => {
    expect(new Toys("testName", "brand" , "ageGroup", 12.22)).toBeTruthy();
  });
});
