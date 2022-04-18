const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';

describe("Bikes Mid End Tests", () => {
    describe("GET /bikes/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "/bikes/Pizza";

            nock(base_url).get(location).reply(404);

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "/bikes/Durham";

            nock(base_url).get(location).reply(200, {
                data: {
                    "name": "Mamba Sport 12\" Balance Bike",
                    "brand": "Mamba Bikes",
                    "color": "black",
                    "price": 75.88
                }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns Mamba Bikes", (done) => {
            let location = "/bikes/Durham";
            
            nock(base_url).get(location).reply(200, {
                data: {
                    "name": "Mamba Sport 12\" Balance Bike",
                    "brand": "Mamba Bikes",
                    "color": "black",
                    "price": 75.88
                }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Mamba Bikes");
                done();
            });
        });
    });
});