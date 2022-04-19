let request = require("request");
const book_data = require('../modules/books').list();

const base_url = "http://localhost:3034/books/";

console.log("Starting test");

describe("Books RESTful service", () => {
    describe("GET :location", () => {
        const url = base_url + "all/nowhereland";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices unchanged", done => {
            request.get(url, (err, res, body) => {
                const books = JSON.parse(body);
                expect(books[0].price).toBe(parseFloat(book_data[0].price.toFixed(2)));
                done();
            });
        });
        it("returns all books", done => {
           request.get(url, (err, res, body) => {
               const books = JSON.parse(body);
               expect(books.length).toBe(book_data.length);
               done();
           }) 
        });
    });
    describe("GET all/raleigh/", () => {
        const url = base_url + "all/raleigh/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices with added 7.5%", done => {
            request.get(url, (err, res, body) => {
                const books = JSON.parse(body);
                expect(books[0].price).toBe(parseFloat((book_data[0].price * 1.075).toFixed(2)));
                done();
            });
        });
    });
    describe("GET all/durham/", () => {
        const url = base_url + "all/durham/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices with added 8%", done => {
            request.get(url, (err, res, body) => {
                const books = JSON.parse(body);
                expect(books[0].price).toBe(parseFloat((book_data[0].price * 1.08).toFixed(2)));
                done();
            });
        });
    });
    describe("GET team", () => {
        const url = base_url + "team/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns all team member names", done => {
            request.get(url, (err, res, body) => {
                const team = JSON.parse(body);
                expect(team.membersNames.length).toBe(5);
                done();
            });
        });
    });
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
            request.post(url,{body: testBook, json: true}, (err,res,body) => {
                request.get(base_url+"all/raleigh/", (err,res,body) => {
                    const books = JSON.parse(body);
                    expect(books.length).toBe(5);
                    done();
                });
            });
        });
    });
})