const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3035';
const post_url = "/laptops/add";

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

    describe("POST /laptops/add", () => {
        it("returns a 404 status code", (done) => {
            nock(base_url).post(post_url).reply(404);

            request.post(base_url + post_url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let laptop = {
                "product": "DontThinkPads T430s",
                "brand": "LenoDont",
                "CPU": "core iPotato-3320",
                "memory": "1GB",
                "price": 3125.09
              };

            let laptopJSON = JSON.stringify(laptop);

            nock(base_url)
                .post(post_url, laptop)
                .reply(200, {
                    id: 123456
                });

            request.post({
                url: base_url + post_url,
                body: laptopJSON
            }, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns id on successful add", (done) => {
            let laptop = {
                "product": "DontThinkPads T430s",
                "brand": "LenoDont",
                "CPU": "core iPotato-3320",
                "memory": "1GB",
                "price": 3125.09
              };

            let laptopJSON = JSON.stringify(laptop);

            nock(base_url)
                .post(post_url, laptopJSON)
                .reply(200, {
                    id: 123456
                });
            
            request.post({
                url: base_url + post_url,
                body: laptopJSON
            }, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(123456);
                done();
            });
        });
    });

});