const request = require("request");
const toys = require('../modules/toys');

const base_url = 'http://localhost:3033/';
const post_url = base_url + 'toys/add';

describe("Toys server post endpoint tests", function () {
    describe("POST /toys/add", () => {
        it("returns status code 200",  (done) => {
            let toyObj = { name: "Medical Kit", brand: "Fisher-Price", age_group: "3 to 9" , price: 20.41};
            const originalJson = toys.list();
            request.post(post_url, {body: toyObj, json: true}, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                toys.reset_json(originalJson);
                done();
            });
        });
    });
});