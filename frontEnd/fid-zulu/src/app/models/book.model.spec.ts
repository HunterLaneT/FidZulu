import { Book } from './book.model';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book("title", "author", 99.99, "isbn", "publisher")).toBeTruthy();
  });
});
