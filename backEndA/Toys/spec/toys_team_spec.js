const request = require("request");

const base_url = 'http://localhost:3033/';
const team_url = base_url + 'toys/team';

describe("Toys server team endpoint tests", function () {
    describe("GET /toys/team", () => {
        it("returns status code 200",  (done) => {
            request.get(team_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains Jared", (done) => {
            request.get(team_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Jared");
                done();
            });
        });
    });
});