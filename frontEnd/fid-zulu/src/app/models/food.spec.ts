import { Food } from './food';

describe('Food', () => {
  it('should create an instance', () => {
    expect(new Food("name","brand","weight",120.0,99.99)).toBeTruthy();
  });
});
