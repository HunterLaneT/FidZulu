
let request = require("request");
const dvd_data = require('../modules/dvds');

const base_url = "http://localhost:3034/dvds/";

console.log("Starting test");

describe("POST add", () => {
    const url = base_url + "add/";
    const testDVD = {
        title: "Cool title",
        mpaa_rating: "Cool guy",
    studio: "Cool studio",
    time: 180,
        price: 99.99,

    };
    it("adds valid dvd", done => {
        const original_dvd = dvd_data.list();
        request.post(url,{body: testDVD, json: true}, (err,res,body) => {
            request.get(base_url+"all/raleigh/", (err,res,body) => {
                const dvds = JSON.parse(body);
                expect(dvds.length).toBe(original_dvd.length + 1);
                dvd_data.reset_json(original_dvd)
                done();
            });
        });
    });
    it("returns 400 on invalid dvd", done => {
        request.post(url, {body: {Title: "asdfasdf"}, json: true}, (err,res,body) => {
            expect(res.statusCode).toBe(400);
            done();
        });
    });  
});