let request = require("request");

const base_url = "http://localhost:3034/";

console.log("Starting test");

describe("Books RESTful service", () => {
    describe("GET Books/Nowhereland/", () => {
        const url = base_url + "Books/Nowhereland/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
    describe("GET Books/Raleigh/", () => {
        const url = base_url + "Books/Raleigh/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
    describe("GET Books/Durham/", () => {
        const url = base_url + "Books/Durham/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
})