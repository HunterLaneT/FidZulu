const request = require("request");
const nock = require("nock");

const base_url = 'http://localhost:3021';
const post_url = "/books/add";

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

    describe("POST /books/add", () => {
        it("returns a 404 status code", (done) => {
            nock(base_url).post(post_url).reply(404);

            request.post(base_url + post_url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

        it("returns a 200 status code", (done) => {
            let book = {
                "Title": "Rings of the Lord",
                "Author": "R.J.J Tolkien",
                "price": 52.99,
                "ISBN": "7980261102358",
                "publisher": "CarperHollins"
            };

            let bookJSON = JSON.stringify(book);

            nock(base_url)
                .post(post_url, bookJSON)
                .reply(200, {
                    id: 123456
                });

            request.post({
                url: base_url + post_url,
                body: bookJSON
            }, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("returns id on successful add", (done) => {
            let book = {
                "Title": "Rings of the Lord",
                "Author": "R.J.J Tolkien",
                "price": 52.99,
                "ISBN": "7980261102358",
                "publisher": "CarperHollins"
            };

            let bookJSON = JSON.stringify(book);

            nock(base_url)
                .post(post_url, bookJSON)
                .reply(200, {
                    id: 123456
                });
            
            request.post({
                url: base_url + post_url,
                body: bookJSON
            }, (err, res, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(123456);
                done();
            });
        });
    });
    
});