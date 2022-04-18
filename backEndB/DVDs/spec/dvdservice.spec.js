let request = require("request");

const base_url = "http://localhost:3034/";

console.log("Starting test");

describe("DVDs RESTful service", () => {
    describe("GET DVDs/Superbad/", () => {
        const url = base_url + "DVDs/Superbad/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
    describe("GET DVDs/Raleigh/", () => {
        const url = base_url + "DVDs/Raleigh/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
    describe("GET DVDs/Durham/", () => {
        const url = base_url + "DVDs/Durham/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
})