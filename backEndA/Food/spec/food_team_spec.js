const request = require("request");

const base_url = 'http://localhost:3032/';
const team_url = base_url + 'food/team';

describe("Bikes server team endpoint tests", function () {
    describe("GET /food/team", () => {
        it("returns status code 200",  (done) => {
            request.get(team_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains Brian", (done) => {
            request.get(team_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Brian");
                done();
            });
        });
    });
});