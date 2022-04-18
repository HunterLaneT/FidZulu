const request = require("request");

const base_url = 'http://localhost:3021/bikes/';

describe("Bikes Mid End Tests", () => {
    describe("GET /bikes/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "Pizza";
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

        it("returns Mamba Bikes", (done) => {
            let location = "Durham";
            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Mamba Bikes");
                done();
            });
        });
    });
});