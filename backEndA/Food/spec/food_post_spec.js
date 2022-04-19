const request = require("request");
const food = require('../modules/food');

const base_url = 'http://localhost:3032/';
const post_url = base_url + 'food/add';

describe("Food server post endpoint tests", function () {
    describe("POST /food/add", () => {
        it("returns status code 200",  (done) => {
            let foodObj = { name: "Pizza", brand: "Papa Shaq", weight: "1kg", calories: 2000, price: 10.99};
            const originalJson = food.list();
            request.post(post_url, {body: foodObj, json: true}, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                food.reset_json(originalJson);
                done();
            });
        });
    });
});