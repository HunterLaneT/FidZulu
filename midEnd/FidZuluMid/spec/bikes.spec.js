const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';
const post_url = '/bikes/add';

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

    describe("POST /bikes/add", () => {
        it("returns a 404 status code", (done) => {
            nock(base_url).post(post_url).reply(404);

            request.post(base_url + post_url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let bike = {
                "name": "Mamba Sport 12\" Balance Bike",
                "brand": "Mamba Bikes",
                "color": "black",
                "price": 75.88
            };

            let bikeJSON = JSON.stringify(bike);

            nock(base_url)
                .post(post_url, bikeJSON)
                .reply(200, {
                    id: 123456
                });

            request.post({
                url: base_url + post_url,
                body: bikeJSON
            }, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns id on successful add", (done) => {
            let bike = {
                "name": "Mamba Sport 12\" Balance Bike",
                "brand": "Mamba Bikes",
                "color": "black",
                "price": 75.88
            };

            let bikeJSON = JSON.stringify(bike);

            nock(base_url)
                .post(post_url, bikeJSON)
                .reply(200, {
                    id: 123456
                });
            
            request.post({
                url: base_url + post_url,
                body: bikeJSON
            }, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(123456);
                done();
            });
        });
    });

    describe("GET /bikes/teams", () => {
        it("returns a 200 status code", (done) => {
            let path = "/bikes/teams";

            nock(base_url).get(path).reply(200, {
                data: {
                    "name" : "Thomas Poole"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns Thomas Poole", (done) => {
            let path = "/bikes/teams";
            
            nock(base_url).get(path).reply(200, {
                data: {
                    "name" : "Thomas Poole"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Thomas Poole");
                done();
            });
        });

    });
});