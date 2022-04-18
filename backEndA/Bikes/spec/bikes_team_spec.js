const request = require("request");

const base_url = 'http://localhost:3031/';
const team_url = base_url + 'bikes/team';

describe("Bikes server team endpoint tests", function () {
    describe("GET /bikes/team", () => {
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