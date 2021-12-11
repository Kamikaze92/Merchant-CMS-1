const fs = require('fs');
const request = require("supertest");
const app = require("../app");
const { User, Role } = require("../models");
const { jwtSign } = require("../helpers/jwt");
 
 let validToken1, invalidToken, role_id;
 const validUser1 = {
   email: "h8.pedulilindungi.merchant@gmail.com",
   password: "finalproject1",
 };
 const roleTest = JSON.parse(fs.readFileSync('../../dummyData/role.JSON', 'utf-8'));
 roleTest.forEach(element => {
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
 
afterAll(done => {
    User.destroy({ truncate: true, cascade: true, restartIdentity: true})
     .then(_ => {
       return Role.destroy({ truncate: true, cascade: true, restartIdentity: true})
     })
     .catch(err => {
       done(err);
     });
 });
 
 describe("GET /roles", async () => {
   await Role.bulkCreate(roleTest);
    test("200 success GET roles with data available", (done) => {
     request(app)
       .get('/roles')
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
    await Role.destroy({ truncate: true, cascade: true, restartIdentity: true});
    test("200 success GET roles with data empty", (done) => {
     request(app)
       .get('/roles')
       .set("access_token", validToken1)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("message", "Role is not found");
        done();
       })
       .catch((err) => {
         done(err);
       });
      });
      await Role.bulkCreate(roleTest);
      test("401 GET roles with invalid token", (done) => {
        request(app)
          .get("/roles")
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
      test("401 GET roles without token", (done) => {
        request(app)
          .get("/roles")
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
      });

  describe("POST /roles", async () => {
    const postRoleTest = {
      name: 'Admin',
      description: 'Untuk admin'
    }
      test("201 success POST roles", (done) => {
      request(app)
        .post("/roles")
        .set("access_token", validToken1)
        .send(postRoleTest)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("id", expect.any(Number));
          expect(body).toHaveProperty("name", expect.any(String));
          expect(body).toHaveProperty("description", expect.any(String));
          role_id = body.id;
          done();
        })
        .catch((err) => {
          done(err);
        });
      });
      await Role.destroy({ truncate: true, cascade: true, restartIdentity: true});
      test("401 POST roles with invalid token", (done) => {
      request(app)
        .post("/roles")
        .set("access_token", invalidToken)
        .send(postRoleTest)
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
      await Role.destroy({ truncate: true, cascade: true, restartIdentity: true});
      test("401 POST roles without token", (done) => {
      request(app)
        .post("/roles")
        .send(postRoleTest)
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
        const roleCreated = await Role.create(postRoleTest);
        role_id = roleCreated.id;
      });
 
 describe("GET /roles/:id", () => {
   test("200 success GET role by id", (done) => {
     request(app)
       .get(`/roles/${role_id}`)
       .set("access_token", validToken1)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("id", expect.any(Number));
        expect(body).toHaveProperty("name", expect.any(String));
        expect(body).toHaveProperty("description", expect.any(String));
        done();
       })
       .catch((err) => {
         done(err);
       });
   });
   test("401 GET role by id with invalid token", (done) => {
     request(app)
       .get(`/roles/${role_id}`)
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
   test("401 GET role by id without token", (done) => {
     request(app)
       .get(`/roles/${role_id}`)
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
   test("404 GET role by id not found", (done) => {
     request(app)
       .get(`/roles/1000`)
       .set("access_token", validToken1)
       .send(input)
       .then((response) => {
         const { body, status } = response;
         expect(status).toBe(404);
         expect(body).toHaveProperty("message", "Role is not found");
         done();
       })
       .catch((err) => {
         done(err);
       });
    });
 });
 
 describe("UPDATE /roles/:id", () => {
    const updateRoleTest = {
        name: 'Admins',
        description: 'Super Dupper Admin'
    }
    test("200 success UPDATE role by id", (done) => {
     request(app)
       .put(`/roles/${role_id}`)
       .set("access_token", validToken1)
       .send(updateRoleTest)
       .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("message", `Role with id ${role_id} has been updated`);
        done();
       })
       .catch((err) => {
         done(err);
       });
    });
    test("200 success UPDATE role by id with empty input", (done) => {
        request(app)
          .put(`/roles/${role_id}`)
          .set("access_token", validToken1)
          .then((response) => {
           const { body, status } = response;
           expect(status).toBe(200);
           expect(body).toHaveProperty("message", "Everything is already uptodated");
           done();
          })
          .catch((err) => {
            done(err);
        });
    });
   test("401 UPDATE role by id with invalid token", (done) => {
      request(app)
       .put(`/roles/${role_id}`)
       .set("access_token", invalidToken)
       .send(updateRoleTest)
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
   test("401 UPDATE role by id without token", (done) => {
    request(app)
        .put(`/roles/${role_id}`)
        .set("access_token", validToken1)
        .send(input)
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
   test("404 UPDATE role by id not found", (done) => {
     request(app)
       .put(`/roles/1000`)
       .set("access_token", validToken1)
       .send(input)
       .then((response) => {
         const { body, status } = response;
         expect(status).toBe(404);
         expect(body).toHaveProperty("message", "Role is not found");
         done();
       })
       .catch((err) => {
         done(err);
       });
    });
 });

 describe("DELETE /roles/:id", async () => {
	test("200 success DELETE role by id", (done) => {
	 request(app)
		 .delete(`/roles/${role_id}`)
		 .set("access_token", validToken1)
		 .send(input)
		 .then((response) => {
			const { body, status } = response;
			expect(status).toBe(200);
			expect(body).toHaveProperty("message", `Role with id ${role_id} has been updated`);
			done();
		 })
		 .catch((err) => {
			 done(err);
		 });
	});
  const roleCreated = await Role.create(postRoleTest);
  role_id = roleCreated.id;
  test("401 DELETE role by id with invalid token", (done) => {
    request(app)
     .delete(`/roles/${role_id}`)
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
  test("401 DELETE role by id without token", (done) => {
    request(app)
        .delete(`/roles/${role_id}`)
        .set("access_token", validToken1)
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
  test("404 DELETE role by id not found", (done) => {
    request(app)
      .put(`/roles/1000`)
      .set("access_token", validToken1)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Role is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
});