const request = require("request");

const base_url = 'http://localhost:3021/food/';

describe("Food Mid End Tests", () => {
    describe("GET /food/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "invalid";
            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "Durham";
            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns Peanut Butter", (done) => {
            let location = "Durham";
            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Peanut Butter");
                done();
            });
        });
    });
});