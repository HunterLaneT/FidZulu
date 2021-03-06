let request = require("request");
const dvd_data = require('../modules/dvds').list();
const base_url = "http://localhost:3035/dvds";

console.log("Starting test");

describe("DVDs RESTful service", () => {
    describe("GET DVDs/Superbad/", () => {
        const url = base_url + "/Superbad/";
        it("returns status code 404", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });
        // it("returns prices unchanged", done => {
        //     request.get(url, (err, res, body) => {
        //         const dvds = JSON.parse(body);
        //         expect(dvds[0].price).toBe(dvd_data[0].price.toFixed(2));
        //         done();
        //     });
        // });
        // it("returns all DVDs", done => {
        //     request.get(url, (err, res, body) => {
        //         const dvds = JSON.parse(body);
        //         expect(dvds.length).toBe(dvd_data.length);
        //         done();
        //     })
        // });
    });
    describe("GET DVDs/Raleigh/", () => {
        const url = base_url + "/Raleigh/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices with added 7.5%", done => {
            request.get(url, (err, res, body) => {
                const dvds = JSON.parse(body);
                expect(dvds[0].price).toBe(parseFloat((dvd_data[0].price * 1.075).toFixed(2)));
                done();
            });
        });
    });
    describe("GET DVDs/Durham/", () => {
        const url = base_url + "/Durham/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns prices with added 8%", done => {
            request.get(url, (err, res, body) => {
                const dvds = JSON.parse(body);
                expect(dvds[0].price).toBe(parseFloat((dvd_data[0].price * 1.08).toFixed(2)));
                done();
            });
        });
    });
    //  describe("GET all/Raleigh/", () => {
    //         const url = base_url + "all/Raleigh/";
    //         it("returns status code 200", done => {
    //             request.get(url, (err, res, body) => {
    //                 expect(res.statusCode).toBe(200);
    //                 done();
    //             });
    //         });
          
    //     });
    // describe("GET all/Durham/", () => {
    //     const url = base_url + "all/Durham/";
    //     it("returns status code 200", done => {
    //         request.get(url, (err, res, body) => {
    //             expect(res.statusCode).toBe(200);
    //             done();
    //         });
    //     });
        
    // });
    describe("GET team", () => {
        const url = base_url + "/team/";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it("returns all team member names", done => {
            request.get(url, (err, res, body) => {
                const team = JSON.parse(body);
                expect(team[0].membersNames.length).toBe(5);
                done();
            });
        });
    });
    // describe("POST add", () => {
    //     const url = base_url + "add/";
    //     const testDVD = {
    //         title: "Cool title",
    //         mpaa_rating: "Cool guy",
    //         studio: "Cool studio",
    //         time: 180,
    //         price: 99.99,

    //     };
    //     it("adds valid dvd", done => {
    //         request.post(url, { body: testDVD, json: true }, (err, res, body) => {
    //             request.get(base_url + "raleigh/", (err, res, body) => {
    //                 const dvds = JSON.parse(body);
    //                 expect(dvds.length).toBe(5);
    //                 done();
    //             });
    //         });
    //     });
    // });

})