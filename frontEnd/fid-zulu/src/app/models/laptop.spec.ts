import { Laptop } from './laptop';

describe('Laptop', () => {
  it('should create an instance', () => {
    expect(new Laptop("product","brand","CPU","memory",100.0)).toBeTruthy();
  });
});
