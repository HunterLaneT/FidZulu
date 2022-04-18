const request = require("request");

const base_url = 'http://localhost:3033/';
const toys_url = base_url + 'toys/Raleigh';
const not_found_url = base_url + 'toys/';

describe("Toys server bikes endpoint tests", function () {
    describe("GET /toys/Raleigh", () => {
        it("returns status code 200",  (done) => {
            request.get(toys_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains price", (done) => {
            request.get(toys_url, (error, response, body) => {
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
});