let server = require("../routes/categoryRoutes");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);





describe('GET APIs', function (){

    // Test the GET routes 
      describe("Test get all category", function() {
          it("return all categories", function(done) {
              chai.request.addPromises(server)
                .get("/category/:id")
                .end((err, response) => {
                    response.should.have.status(200);
                    done();

                })
            })
        })
    })