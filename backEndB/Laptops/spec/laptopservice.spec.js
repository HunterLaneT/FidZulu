let request = require("request");

const base_url = "http://localhost:3036/";
const laptop_data = require("../modules/laptops").list();

console.log("Starting test");

describe("Laptop RESTful service", () => {
    describe("GET Laptops/NYC or any /misc", () => {
        const url = base_url + "Laptops/all/NYC";
        it("returns status code 200", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("Any other city should be no tax", done => {
            request.get(url, (err, res, body) => {
                const laptops = JSON.parse(body);
                expect(laptops[0].price).toBe(laptop_data[0].price.toFixed(2));
                done();
        });
    });

        describe("GET Laptops/Durham/", () => {
            const url = base_url + "Laptops/all/Raleigh";
            it("returns status code 200", done => {
                request.get(url, (err, res, body) => {
                    expect(res.statusCode).toBe(200);
                    done();
            });

         
        });
        it("Raleigh should be 7.5% tax", done => {
            request.get(url, (err, res, body) => {
                const laptops = JSON.parse(body);
                expect(laptops[0].price).toBe((laptop_data[0].price * 1.075).toFixed(2));
                done();
        });
    });

        describe("GET Laptops/Durham/", () => {
            const url = base_url + "Laptops/all/Durham";
            it("returns status code 200", done => {
                request.get(url, (err, res, body) => {
                    expect(res.statusCode).toBe(200);
                    done();
            });
        });
        it("Durham should be 8% tax", done => {
            request.get(url, (err, res, body) => {
                const laptops = JSON.parse(body);
                expect(laptops[0].price).toBe((laptop_data[0].price * 1.08).toFixed(2));
                done();
            });
        });
        });

        describe("GET Laptops/team/", () => {
            const url = base_url + "Laptops/team";
            it("returns status code 200", done => {
                request.get(url, (err, res, body) => {
                    expect(res.statusCode).toBe(200);
                    done();
            });
            });
            it("Expect at least one person", done => {
                request.get(url, (err, res, body) => {
                    const team = JSON.parse(body);
                    expect((team.membersNames.length)>=1).toBeTruthy();
                    done();
            });
    });
    });
});
});
})