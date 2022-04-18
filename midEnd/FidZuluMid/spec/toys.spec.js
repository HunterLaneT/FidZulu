const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';

describe("Toys Mid End Tests", () => {
    describe("GET /toys/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "/toys/Pizza";

            nock(base_url).get(location).reply(404);

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "/toys/Durham";

            nock(base_url).get(location).reply(200, {
                data: {
                    "name": "Stack Up Cups",
                    "brand": "The First Years",
                    "age-group": "0 to 3",
                    "prize": 3.99
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
                    "name": "Stack Up Cups",
                    "brand": "The First Years",
                    "age-group": "0 to 3",
                    "prize": 3.99
                }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Stack Up Cups");
                done();
            });
        });
    });
});