const request = require("request");
const bikes = require('../modules/bikes');

const base_url = 'http://localhost:3031/';
const post_url = base_url + 'bikes/add';

describe("Bikes server post endpoint tests", function () {
    describe("POST /bikes/add", () => {
        it("returns status code 200",  (done) => {
            let bikeObj = { name: "Pizza", brand: "Papa Shaq", color: "purple", price: 123.45};
            const originalJson = bikes.list();
            request.post(post_url, {body: bikeObj, json: true}, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                bikes.reset_json(originalJson);
                done();
            });
        });
    });
});