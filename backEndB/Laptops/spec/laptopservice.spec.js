let request = require("request");

const base_url = "http://localhost:3036/";
const laptop_data = require("../modules/laptops").list();

console.log("Starting test");

describe("Laptop RESTful service", () => {
    describe("GET laptops/NYC or any /misc", () => {
        const url = base_url + "laptops/NYC";
        it("returns status code 404", done => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).toBe(404);
                done();
            });
        });

    //     it("Any other city should be no tax", done => {
    //         request.get(url, (err, res, body) => {
    //             const laptops = JSON.parse(body);
    //             expect(laptops[0].price).toBe(laptop_data[0].price.toFixed(2));
    //             done();
    //     });
    // });

        describe("GET laptops/durham/", () => {
            const url = base_url + "laptops/raleigh";
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

        describe("GET laptops/durham/", () => {
            const url = base_url + "laptops/durham";
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

        describe("GET laptops/team/", () => {
            const url = base_url + "laptops/team";
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
    describe("POST add to  laptops/add", () => {
        const url = base_url + "laptops/add/";
        const tempLaptop = {
            product: "ThinkPad But More",
            brand: "Lenovoooo",
            CPU: "core i15-9990x",
            memory: "128GB",
            price: 373325.09
        };
        it("adds valid laptop", done => {
            request.post(url,{body: tempLaptop, json: true}, (err,res,body) => {
                request.get(base_url+"laptops/raleigh/", (err,res,body) => {
                    const laptops = JSON.parse(body);
                    expect(laptops.length).toBe(5);
                    expect(res.statusCode).toBe(200);
                    done();
                });
            });
        });
    }); 
});
});
})