const request = require("request");
const nock = require("nock");


const base_url = 'http://localhost:3021';
const post_url = "/toys/add";

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

        it("returns The First Years", (done) => {
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
                expect(body).toBeTruthy();
                expect(body).toContain("Stack Up Cups");
                done();
            });
        });
    });

    describe("GET /toys/teams", () => {
        it("returns a 200 status code", (done) => {
            let path = "/toys/teams";

            nock(base_url).get(path).reply(200, {
                data: {
                    "name" : "Brandon Daggerhart"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns Brandon Daggerhart", (done) => {
            let path = "/toys/teams";
            
            nock(base_url).get(path).reply(200, {
                data: {
                    "name" : "Brandon Daggerhart"
                }
            });

            request.get(base_url + path, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Brandon Daggerhart");
                done();
            });
        });

    });

    describe("POST /toys/add", () => {
        it("returns a 404 status code", (done) => {
            nock(base_url).post(post_url).reply(404);

            request.post(base_url + post_url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let toy = {
                "name": "Kit Meds",
                "brand": "Price-Fish",
                "age-group": "5 to 6",
                "prize": 19.41
              };

            let toyJSON = JSON.stringify(toy);

            nock(base_url)
                .post(post_url, toyJSON)
                .reply(200, {
                    id: 123456
                });

            request.post({
                url: base_url + post_url,
                body: toyJSON
            }, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns id on successful add", (done) => {
            let toy = {
                "name": "Kit Meds",
                "brand": "Price-Fish",
                "age-group": "5 to 6",
                "prize": 19.41
              };

            let toyJSON = JSON.stringify(toy);

            nock(base_url)
                .post(post_url, toyJSON)
                .reply(200, {
                    id: 123456
                });
            
            request.post({
                url: base_url + post_url,
                body: toyJSON
            }, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(123456);
                done();
            });
        });
    });

});