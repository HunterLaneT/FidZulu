const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';
const post_url = "/dvds/add";

describe("DVDs Mid End Tests", () => {
    describe("GET /dvds/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "/dvds/Pizza";

            nock(base_url).get(location).reply(404);

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "/dvds/Durham";

            nock(base_url).get(location).reply(200, {
                data: {
                    "title": "Avengers - Infinity War",
                    "mpaa_rating": "PG-13",
                    "studio": "MARVEL",
                    "time": 149,
                    "price": 18.55
                  }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns Avengers: Infinity Wars", (done) => {
            let location = "/dvds/Durham";
            
            nock(base_url).get(location).reply(200, {
                data: {
                    "title": "Avengers - Infinity War",
                    "mpaa_rating": "PG-13",
                    "studio": "MARVEL",
                    "time": 149,
                    "price": 18.55
                  }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Avengers");
                done();
            });
        });
    });

    describe("GET /dvds/teams", () => {
        it("returns a 200 status code", (done) => {
            let path = "/dvds/teams";

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
            let path = "/dvds/teams";
            
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

    describe("POST /dvds/add", () => {
        it("returns a 404 status code", (done) => {
            nock(base_url).post(post_url).reply(404);

            request.post(base_url + post_url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let dvd = {
                "title": "Spider-Man Homecoming",
                "mpaa_rating": "14 and over",
                "studio": "Sony Pictures Home Entertainment",
                "time": 133,
                "price": 7.23
              };

            let dvdJSON = JSON.stringify(dvd);

            nock(base_url)
                .post(post_url, dvdJSON)
                .reply(200, {
                    id: 123456
                });

            request.post({
                url: base_url + post_url,
                body: dvdJSON
            }, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns id on successful add", (done) => {
            let dvd = {
                "title": "Spider-Man Homecoming",
                "mpaa_rating": "14 and over",
                "studio": "Sony Pictures Home Entertainment",
                "time": 133,
                "price": 7.23
              };

            let dvdJSON = JSON.stringify(dvd);

            nock(base_url)
                .post(post_url, dvdJSON)
                .reply(200, {
                    id: 123456
                });
            
            request.post({
                url: base_url + post_url,
                body: dvdJSON
            }, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(123456);
                done();
            });
        });
    });
});
