const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';

describe("Books Mid End Tests", () => {
    describe("GET /books/<location>", () => {
        it("returns a 404 status code", (done) => {
            let location = "/books/Pizza";

            nock(base_url).get(location).reply(404);

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let location = "/books/Durham";

            nock(base_url).get(location).reply(200, {
                data: {
                    "Title": "Lord of the Rings",
                    "Author": "J.R.R Tolkien",
                    "price": 25.99,
                    "ISBN": "9780261102385",
                    "publisher": "HarperCollins"
                }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns Mamba Books", (done) => {
            let location = "/books/Durham";
            
            nock(base_url).get(location).reply(200, {
                data: {
                    "Title": "Lord of the Rings",
                    "Author": "J.R.R Tolkien",
                    "price": 25.99,
                    "ISBN": "9780261102385",
                    "publisher": "HarperCollins"
                }
            });

            request.get(base_url + location, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Lord of the Rings");
                done();
            });
        });
    });
});