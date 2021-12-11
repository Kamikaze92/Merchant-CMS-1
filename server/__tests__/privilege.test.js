const fs = require('fs');
const request = require("supertest");
const app = require("../app");
const { User, Privilege } = require("../models");
const { jwtSign } = require("../helpers/jwt");
 
 let validToken1, invalidToken, privilege_id;
 const validUser1 = {
   email: "h8.pedulilindungi.merchant@gmail.com",
   password: "finalproject1",
 };
 const privilegeTest = JSON.parse(fs.readFileSync('../../dummyData/privileges.JSON', 'utf-8'));

 privilegeTest.forEach(element => {
    element.createdAt = new Date();
    element.updatedAt = new Date();
  });

 beforeAll((done) => {
   User.create(validUser1)
     .then((registeredUser1) => {
       validToken1 = jwtSign({
         id: registeredUser1.id,
         email: registeredUser1.email,
       });
       invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbGFoQG1haWwuY29tIiwicGFzc3dvcmQiOiJzYWxhaHNla2FsaSIsImlhdCI6MTYzOTA5MTcxMH0.2e6zYFESSmO0iwL4gl-rIxEs4irLktYj4SLjgamw5Ec";
       done();
    })
    .catch((err) => {
      done(err);
    });
});
 
afterAll((done) => {
    User.destroy({ truncate: true, cascade: true, restartIdentity: true})
     .then(_ => {
       return Privilege.destroy({ truncate: true, cascade: true, restartIdentity: true})
     })
     .then(_ => {
       done();
     })
     .catch(err => {
       done(err);
     });
 });
 
 describe("GET /privileges", async () => {
   await Privilege.bulkCreate(privilegeTest);
    test("200 success GET privileges with data available", (done) => {
     request(app)
       .get('/privileges')
       .set("access_token", validToken1)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);
        done();
       })
       .catch((err) => {
         done(err);
       });
    });
    await Privilege.destroy({ truncate: true, cascade: true, restartIdentity: true});
    test("200 success GET privileges with data empty", (done) => {
     request(app)
       .get('/privileges')
       .set("access_token", validToken1)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("message", "Privilege is not found");
        done();
       })
       .catch((err) => {
         done(err);
       });
      });
      await Privilege.bulkCreate(privilegeTest);
      test("401 GET privileges with invalid token", (done) => {
        request(app)
          .get("/privileges")
          .set("access_token", invalidToken)
          .then((response) => {
            const { body, status } = response;
            expect(status).toBe(401);
            expect(body).toHaveProperty("message", "Invalid token");
            done();
          })
          .catch((err) => {
            done(err);
          });
      });
      test("401 GET privileges without token", (done) => {
        request(app)
          .get("/privileges")
          .then((response) => {
            const { body, status } = response;
            expect(status).toBe(401);
            expect(body).toHaveProperty("message", "Invalid token");
            done();
          })
          .catch((err) => {
            done(err);
          });
        });
        await Privilege.destroy({ truncate: true, cascade: true, restartIdentity: true});
      });

  describe("POST /privileges", async () => {
    const postPrivilegeTest = {
      name: 'Super Admin'
    };
      test("201 success POST privilege", (done) => {
      request(app)
        .post("/privileges")
        .set("access_token", validToken1)
        .send(postPrivilegeTest)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("id", expect.any(Number));
          expect(body).toHaveProperty("name", expect.any(String));
          role_id = body.id;
          done();
        })
        .catch((err) => {
          done(err);
        });
      });
      await Privilege.destroy({ truncate: true, cascade: true, restartIdentity: true});
      test("401 POST privilege with invalid token", (done) => {
      request(app)
        .post("/privileges")
        .set("access_token", invalidToken)
        .send(postPrivilegeTest)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toHaveProperty("message", "Invalid token");
          done();
        })
        .catch((err) => {
          done(err);
        });
      });
      await Privilege.destroy({ truncate: true, cascade: true, restartIdentity: true});
      test("401 POST privilege without token", (done) => {
      request(app)
        .post("/privileges")
        .send(postPrivilegeTest)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toHaveProperty("message", "Invalid token");
          done();
        })
        .catch((err) => {
          done(err);
        });
        });
        const privilegeCreated = await Privilege.create(postPrivilegeTest);
        privilege_id = privilegeCreated.id;
      });
 
 describe("GET /privileges/:id", () => {
   test("200 success GET privilege by id", (done) => {
     request(app)
       .get(`/privileges/${privilege_id}`)
       .set("access_token", validToken1)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("id", expect.any(Number));
        expect(body).toHaveProperty("name", expect.any(String));
        done();
       })
       .catch((err) => {
         done(err);
       });
   });
   test("401 GET privilege by id with invalid token", (done) => {
     request(app)
       .get(`/privileges/${privilege_id}`)
       .set("access_token", invalidToken)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid token");
        done();
       })
       .catch((err) => {
         done(err);
       });
   });
   test("401 GET privilege by id without token", (done) => {
     request(app)
       .get(`/privileges/${privilege_id}`)
       .then((response) => {
         const { body, status } = response;
         expect(status).toBe(401);
         expect(body).toHaveProperty("message", "Invalid token");
         done();
       })
       .catch((err) => {
         done(err);
       });
   });
   test("404 GET privilege by id not found", (done) => {
     request(app)
       .get(`/privileges/1000`)
       .set("access_token", validToken1)
       .then((response) => {
         const { body, status } = response;
         expect(status).toBe(404);
         expect(body).toHaveProperty("message", "Privilege is not found");
         done();
       })
       .catch((err) => {
         done(err);
       });
    });
 });

 describe("DELETE /privileges/:id", async () => {
	test("200 success DELETE privilege by id", (done) => {
	 request(app)
		 .delete(`/privileges/${privilege_id}`)
		 .set("access_token", validToken1)
		 .then((response) => {
			const { body, status } = response;
			expect(status).toBe(200);
			expect(body).toHaveProperty("message", `Privilege with id ${privilege_id} has been deleted`);
			done();
		 })
		 .catch((err) => {
			 done(err);
		 });
	});
  const privileCreated = await Privilege.create({
    name: 'Super Admin'
  });
  privilege_id = privileCreated.id;
  test("401 DELETE privilege by id with invalid token", (done) => {
    request(app)
     .delete(`/privileges/${privilege_id}`)
     .set("access_token", invalidToken)
     .then((response) => {
      const { body, status } = response;
      expect(status).toBe(401);
      expect(body).toHaveProperty("message", "Invalid token");
      done();
     })
     .catch((err) => {
       done(err);
     });
  });
  test("401 DELETE privilege by id without token", (done) => {
    request(app)
        .delete(`/privileges/${privilege_id}`)
        .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid token");
        done();
        })
        .catch((err) => {
            done(err);
        });
  });
  test("404 DELETE privilege by id not found", (done) => {
    request(app)
      .delete(`/privileges/1000`)
      .set("access_token", validToken1)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Privilege is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
});