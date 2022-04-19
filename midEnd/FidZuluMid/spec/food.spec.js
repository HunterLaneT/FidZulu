const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';
const post_url = "/food/add";

describe("Food Mid End Tests", () => {
    describe("GET /food/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "/food/invalid";

            nock(base_url).get(location).reply(404);

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "/food/Durham";

            nock(base_url).get(location).reply(200, {
                data: {
                    "name": "The Original Sandwich",
                    "brand": "Oreo",
                    "weight": "303g",
                    "calories": 405,
                    "price": 2.85
                  }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns The original sandwich", (done) => {
            let location = "/food/Durham";
            
            nock(base_url).get(location).reply(200, {
                data: {
                    "name": "The Original Sandwich",
                    "brand": "Oreo",
                    "weight": "303g",
                    "calories": 405,
                    "price": 2.85
                  }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("The Original Sandwich");
                done();
            });
        });
    });

    describe("GET /food/teams", () => {
        it("returns a 200 status code", (done) => {
            let path = "/food/teams";

            nock(base_url).get(path).reply(200, {
                data: {
                    "team" : "Mid-End",
                    "names" : "Simon Hayes"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns Simon Hayes", (done) => {
            let path = "/food/teams";
            
            nock(base_url).get(path).reply(200, {
                data: {
                    "team" : "Mid-End",
                    "names" : "Simon Hayes"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Simon Hayes");
                done();
            });
        });

    });

    describe("POST /food/add", () => {
        it("returns a 404 status code", (done) => {
            nock(base_url).post(post_url).reply(404);

            request.post(base_url + post_url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let food = {
                "name": "The Original Sandwich",
                "brand": "Oreo",
                "weight": "303g",
                "calories": 405,
                "price": 2.85
            };

            let foodJSON = JSON.stringify(food);

            nock(base_url)
                .post(post_url, foodJSON)
                .reply(200, {
                    id: 123456
                });

            request.post({
                url: base_url + post_url,
                body: foodJSON
            }, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns id on successful add", (done) => {
            let food = {
                "name": "The Original Sandwich",
                "brand": "Oreo",
                "weight": "303g",
                "calories": 405,
                "price": 2.85
            };

            let foodJSON = JSON.stringify(food);

            nock(base_url)
                .post(post_url, foodJSON)
                .reply(200, {
                    id: 123456
                });
            
            request.post({
                url: base_url + post_url,
                body: foodJSON
            }, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(123456);
                done();
            });
        });
    });
});