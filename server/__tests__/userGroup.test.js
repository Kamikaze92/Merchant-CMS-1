// const fs = require('fs');
// const request = require("supertest");
// const app = require("../app");
// const { User, Privilege, Role, User_Group } = require("../models");
// const { jwtSign } = require("../helpers/jwt");
// const redis = require('../config/redis');
 
//  let validToken1, invalidToken, user_group_id;
//  const validUser1 = {
//   full_name: 'Merchant Tenant', 
//   email: 'merchtn111@mail.com',
//   phone_number: '62899999999',
//   // should chose one category_id or tenant_category_id:
//   category_id: 1,
//   // tenant_category_id: '',
//   // parent_id: '',
//   place_name: 'Merchant NT1',
//   institution: 'MNT',
//   address: 'Bandung',
//   province_id: 1,
//   city_id: 1,
//   postal_code: '12345',
//   user_type: 'Merchant',
//   created_at: new Date(),
//   updated_at: new Date(),
// };
//  const roleTest = JSON.parse(fs.readFileSync('../../dummyData/roles.JSON', 'utf-8'));
//  const privilegeTest = JSON.parse(fs.readFileSync('../../dummyData/privileges.JSON', 'utf-8'));
//  const userGroupTest = JSON.parse(fs.readFileSync('../../dummyData/user-groups.JSON', 'utf-8'));

//  roleTest.forEach(element => {
//     element.createdAt = new Date();
//     element.updatedAt = new Date();
//   });

//   redis.disconnect();
//  beforeAll((done) => {
//    User.create(validUser1)
//      .then((registeredUser1) => {
//        validToken1 = jwtSign({
//          id: registeredUser1.id,
//          email: registeredUser1.email,
//        });
//        invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbGFoQG1haWwuY29tIiwicGFzc3dvcmQiOiJzYWxhaHNla2FsaSIsImlhdCI6MTYzOTA5MTcxMH0.2e6zYFESSmO0iwL4gl-rIxEs4irLktYj4SLjgamw5Ec";
//        return Privilege.bulkCreate(privilegeTest);
//     })
//     .then(() => {
//       return Role.bulkCreate(roleTest);
//     })
//     .then(() => {
//       done();
//     })
//     .catch((err) => {
//       done(err);
//     });
// });
 
// afterAll((done) => {
//     User.destroy({ truncate: true, cascade: true, restartIdentity: true})
//      .then(_ => {
//        return Role.destroy({ truncate: true, cascade: true, restartIdentity: true});
//      })
//      .then(_ => {
//        return Privilege.destroy({ truncate: true, cascade: true, restartIdentity: true});
//      })
//      .then(_ => {
//        done();
//      })
//      .catch(err => {
//        done(err);
//      });
//  });
 
//  describe("GET /user-groups", async () => {
//    await User_Group.bulkCreate(userGroupTest);
//     test("200 success GET user groups with data available", (done) => {
//      request(app)
//        .get('/user-groups')
//        .set("access_token", validToken1)
//        .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(200);
//         expect(Array.isArray(body)).toBeTruthy();
//         expect(body.length).toBeGreaterThan(0);
//         done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//     });
//     await User_Group.destroy({ truncate: true, cascade: true, restartIdentity: true});
//     test("200 success GET user groups with data empty", (done) => {
//      request(app)
//        .get('/user-groups')
//        .set("access_token", validToken1)
//        .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(200);
//         expect(body).toHaveProperty("message", "User group is not found");
//         done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//       });
//       await User_Group.bulkCreate(userGroupTest);
//       test("401 GET user groups with invalid token", (done) => {
//         request(app)
//           .get("/user-groups")
//           .set("access_token", invalidToken)
//           .then((response) => {
//             const { body, status } = response;
//             expect(status).toBe(401);
//             expect(body).toHaveProperty("message", "Invalid token");
//             done();
//           })
//           .catch((err) => {
//             done(err);
//           });
//       });
//       test("401 GET user groups without token", (done) => {
//         request(app)
//           .get("/user-groups")
//           .then((response) => {
//             const { body, status } = response;
//             expect(status).toBe(401);
//             expect(body).toHaveProperty("message", "Invalid token");
//             done();
//           })
//           .catch((err) => {
//             done(err);
//           });
//         });
//         await User_Group.destroy({ truncate: true, cascade: true, restartIdentity: true});
//       });

//   describe("POST /user-groups", async () => {
//     const postUserGroupTest = {
//       role_id: 1,
//       privilege_id: 1
//     };
//       test("201 success POST user group", (done) => {
//       request(app)
//         .post("/user-groups")
//         .set("access_token", validToken1)
//         .send(postUserGroupTest)
//         .then((response) => {
//           const { body, status } = response;
//           expect(status).toBe(201);
//           expect(body).toHaveProperty("id", expect.any(Number));
//           expect(body).toHaveProperty("role_id", expect.any(Number));
//           expect(body).toHaveProperty("privilege_id", expect.any(Number));
//           user_group_id = body.id;
//           done();
//         })
//         .catch((err) => {
//           done(err);
//         });
//       });
//       await User_Group.destroy({ truncate: true, cascade: true, restartIdentity: true});
//       test("401 POST user group with invalid token", (done) => {
//       request(app)
//         .post("/user-groups")
//         .set("access_token", invalidToken)
//         .send(postUserGroupTest)
//         .then((response) => {
//           const { body, status } = response;
//           expect(status).toBe(401);
//           expect(body).toHaveProperty("message", "Invalid token");
//           done();
//         })
//         .catch((err) => {
//           done(err);
//         });
//       });
//       await User_Group.destroy({ truncate: true, cascade: true, restartIdentity: true});
//       test("401 POST user group without token", (done) => {
//       request(app)
//         .post("/user-groups")
//         .send(postUserGroupTest)
//         .then((response) => {
//           const { body, status } = response;
//           expect(status).toBe(401);
//           expect(body).toHaveProperty("message", "Invalid token");
//           done();
//         })
//         .catch((err) => {
//           done(err);
//         });
//         });
//         const userGroupCreated = await Role.create(postUserGroupTest);
//         user_group_id = userGroupCreated.id;
//       });
 
//  describe("GET /user-groups/:id", () => {
//    test("200 success GET user group by id", (done) => {
//      request(app)
//        .get(`/user-groups/${user_group_id}`)
//        .set("access_token", validToken1)
//        .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(200);
//         expect(body).toHaveProperty("id", expect.any(Number));
//         expect(body).toHaveProperty("role_id", expect.any(Number));
//         expect(body).toHaveProperty("privilege_id", expect.any(Number));
//         done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//    });
//    test("401 GET user group by id with invalid token", (done) => {
//      request(app)
//        .get(`/user-groups/${user_group_id}`)
//        .set("access_token", invalidToken)
//        .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(401);
//         expect(body).toHaveProperty("message", "Invalid token");
//         done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//    });
//    test("401 GET user group by id without token", (done) => {
//      request(app)
//        .get(`/user groups/${user_group_id}`)
//        .then((response) => {
//          const { body, status } = response;
//          expect(status).toBe(401);
//          expect(body).toHaveProperty("message", "Invalid token");
//          done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//    });
//    test("404 GET user group by id not found", (done) => {
//      request(app)
//        .get(`/user-groups/1000`)
//        .set("access_token", validToken1)
//        .then((response) => {
//          const { body, status } = response;
//          expect(status).toBe(404);
//          expect(body).toHaveProperty("message", "User group is not found");
//          done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//     });
//  });
 
//  describe("UPDATE /user-groups/:id", () => {
//     const updateUserGroupTest = {
//       "role_id": 2,
//       "privilege_id": 2
//     };
//     test("200 success UPDATE user group by id", (done) => {
//      request(app)
//        .put(`/user-groups/${user_group_id}`)
//        .set("access_token", validToken1)
//        .send(updateUserGroupTest)
//        .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(200);
//         expect(body).toHaveProperty("message", `User group with id ${user_group_id} has been updated`);
//         done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//     });
//    test("401 UPDATE user group by id with invalid token", (done) => {
//       request(app)
//        .put(`/user-groups/${user_group_id}`)
//        .set("access_token", invalidToken)
//        .send(updateUserGroupTest)
//        .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(401);
//         expect(body).toHaveProperty("message", "Invalid token");
//         done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//    });
//    test("401 UPDATE user group by id without token", (done) => {
//     request(app)
//         .put(`/user-groups/${user_group_id}`)
//         .send(updateUserGroupTest)
//         .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(401);
//         expect(body).toHaveProperty("message", "Invalid token");
//         done();
//         })
//         .catch((err) => {
//             done(err);
//         });
//    });
//    test("404 UPDATE user group by id not found", (done) => {
//      request(app)
//        .put(`/user-groups/1000`)
//        .set("access_token", validToken1)
//        .send(updateUserGroupTest)
//        .then((response) => {
//          const { body, status } = response;
//          expect(status).toBe(404);
//          expect(body).toHaveProperty("message", "User group is not found");
//          done();
//        })
//        .catch((err) => {
//          done(err);
//        });
//     });
//  });

//  describe("DELETE /user-groups/:id", async () => {
// 	test("200 success DELETE user group by id", (done) => {
// 	 request(app)
// 		 .delete(`/user-groups/${user_group_id}`)
// 		 .set("access_token", validToken1)
// 		 .then((response) => {
// 			const { body, status } = response;
// 			expect(status).toBe(200);
// 			expect(body).toHaveProperty("message", `User group with id ${user_group_id} has been deleted`);
// 			done();
// 		 })
// 		 .catch((err) => {
// 			 done(err);
// 		 });
// 	});
//   const userGroupCreated = await User_Group.create({
//     role_id: 1,
//     privilege_id: 1
//   });
//   user_group_id = userGroupCreated.id;
//   test("401 DELETE user group by id with invalid token", (done) => {
//     request(app)
//      .delete(`/user-groups/${user_group_id}`)
//      .set("access_token", invalidToken)
//      .then((response) => {
//       const { body, status } = response;
//       expect(status).toBe(401);
//       expect(body).toHaveProperty("message", "Invalid token");
//       done();
//      })
//      .catch((err) => {
//        done(err);
//      });
//   });
//   test("401 DELETE user group by id without token", (done) => {
//     request(app)
//         .delete(`/user-groups/${user_group_id}`)
//         .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(401);
//         expect(body).toHaveProperty("message", "Invalid token");
//         done();
//         })
//         .catch((err) => {
//             done(err);
//         });
//   });
//   test("404 DELETE user group by id not found", (done) => {
//     request(app)
//       .delete(`/user-groups/1000`)
//       .set("access_token", validToken1)
//       .then((response) => {
//         const { body, status } = response;
//         expect(status).toBe(404);
//         expect(body).toHaveProperty("message", "User group is not found");
//         done();
//       })
//       .catch((err) => {
//         done(err);
//       });
//     });
// });