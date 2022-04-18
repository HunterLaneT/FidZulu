const request = require("request");

const base_url = 'http://localhost:3032/';
const food_url = base_url + 'food/Raleigh';
const not_found_url = base_url + 'food/China';

describe("Bikes server bikes endpoint tests", function () {
    describe("GET /food/Raleigh", () => {
        it("returns status code 200",  (done) => {
            request.get(food_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains price", (done) => {
            request.get(food_url, (error, response, body) => {
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