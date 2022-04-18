import { Dvd } from './dvd.model';

describe('Dvd', () => {
  it('should create an instance', () => {
    expect(new Dvd('name', 'mpaa_rating', 'studio', 99.99, 99.99)).toBeTruthy();
  });
});
