let request = require("request");
const book_data = require('../modules/books');

const base_url = "http://localhost:3034/books/";

console.log("Starting test");

describe("POST add", () => {
    const url = base_url + "add/";
    const testBook = {
        Title: "Cool title",
        Author: "Cool guy",
        price: 99.99,
        ISBN: "1234567890",
        publisher: "Cool publisher"
    };
    
    it("adds valid book", done => {
        const original_books = book_data.list();
        request.post(url,{body: testBook, json: true}, (err,res,body) => {
            request.get(base_url+"raleigh/", (err,res,body) => {
                const books = JSON.parse(body);
                expect(books.length).toBe(original_books.length + 1);
                book_data.reset_json(original_books);
                done();
            });
        });
    });
    it("returns 400 on invalid book", done => {
        request.post(url, {body: {Title: "asdfasdf"}, json: true}, (err,res,body) => {
            expect(res.statusCode).toBe(400);
            done();
        });
    });
});