const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3035';

describe("Laptops Mid End Tests", () => {
    describe("GET /laptops/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "/laptops/Pizza";

            nock(base_url).get(location).reply(404);

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "/laptops/Durham";

            nock(base_url).get(location).reply(200, {
                data: {
                    "product": "ThinkPad T430s",
                    "brand": "Lenovo",
                    "CPU": "core i5-3320",
                    "memory": "8GB",
                    "price": 325.09
                  }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns Lenovo Laptops", (done) => {
            let location = "/laptops/Durham";
            
            nock(base_url).get(location).reply(200, {
                data: {
                    "product": "ThinkPad T430s",
                    "brand": "Lenovo",
                    "CPU": "core i5-3320",
                    "memory": "8GB",
                    "price": 325.09
                  }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Lenovo");
                done();
            });
        });
    });

    describe("GET /laptops/teams", () => {
        it("returns a 200 status code", (done) => {
            let path = "/laptops/teams";

            nock(base_url).get(path).reply(200, {
                data: {
                    "name" : "Allen Wong"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns Allen Wong", (done) => {
            let path = "/laptops/teams";
            
            nock(base_url).get(path).reply(200, {
                data: {
                    "name" : "Allen Wong"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Allen Wong");
                done();
            });
        });

    });
});