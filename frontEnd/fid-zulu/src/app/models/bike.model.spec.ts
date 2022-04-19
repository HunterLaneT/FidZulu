import { Bike } from './bike.model';

describe('Bike', () => {
  it('should create an instance', () => {
    expect(new Bike("name","brand","color",99.99)).toBeTruthy();
  });
});
