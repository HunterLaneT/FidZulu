const request = require("request");

const base_url = 'http://localhost:3031/';
const bikes_url = base_url + 'bikes/Raleigh';
const not_found_url = base_url + 'bikes/';

describe("Bikes server bikes endpoint tests", function () {
    describe("GET /bikes/Raleigh", () => {
        it("returns status code 200",  (done) => {
            request.get(bikes_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains price", (done) => {
            request.get(bikes_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("price");
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("GET /bikes/", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
    describe("GET /bikes/China", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url + "China", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});