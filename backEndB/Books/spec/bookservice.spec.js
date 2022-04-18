let request = require("request");
const book_data = require('../modules/books').list();

const base_url = "http://localhost:3034/Books/";

console.log("Starting test");

describe("Books RESTful service", () => {
    describe("GET all/NowhereLand", () => {
        const url = base_url + "all/NowhereLand";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices unchanged", done => {
            request.get(url, (err, res, body) => {
                const books = JSON.parse(body);
                expect(books[0].price).toBe(book_data[0].price.toFixed(2));
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
    describe("GET all/Raleigh/", () => {
        const url = base_url + "all/Raleigh/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices with added 7.5%", done => {
            request.get(url, (err, res, body) => {
                const books = JSON.parse(body);
                expect(books[0].price).toBe((book_data[0].price * 1.075).toFixed(2));
                done();
            });
        });
    });
    describe("GET all/Durham/", () => {
        const url = base_url + "all/Durham/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices with added 8%", done => {
            request.get(url, (err, res, body) => {
                const books = JSON.parse(body);
                expect(books[0].price).toBe((book_data[0].price * 1.08).toFixed(2));
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
})