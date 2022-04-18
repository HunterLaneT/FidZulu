const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';


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
});