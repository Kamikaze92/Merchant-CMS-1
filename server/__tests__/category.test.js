const request = require("supertest");
const app = require("../app");
const { Category } = require("../models");
const { jwtSign } = require("../helpers/jwt");

// beforeAll((done) => {
//     User.create(userTest)
//       .then((result) => {
//         validToken = jwtSign({
//           id: result.id,
//           email: result.email,
//           role: result.role,
//         });
//       })
//       .then((result) => {
//         done();
//       })
//       .catch((err) => {
//         done(err);
//       });
//   });

// afterAll((done) => {
//     User.destroy({ truncate: true, cascade: true, restartIdentity: true })
//       .then((_) => {
//         done();
//       })
//       .catch((err) => {
//         done(err);
//       });
//   });

describe("Test API for Categories", () => {
  test("200 Success show all Categories non tenant", (done) => {
    request(app)
      .get("/categories")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body.length).toBeGreaterThanOrEqual(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  let createdCategory = {};
  test("201 post category non tenant", (done) => {
    request(app)
      .post("/categories")
      .send({
        name: "Test category non tenant",
        description: "Description category non tenant ",
      })
      .then((response) => {
        const { body, status } = response;
        createdCategory = body;
        expect(status).toBe(201);
        expect(body.name).toBe("Test category non tenant");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 post category non tenant without description", (done) => {
    request(app)
      .post("/categories")
      .send({
        name: "Test category non tenant",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Description is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 post category non tenant without name", (done) => {
    request(app)
      .post("/categories")
      .send({
        description: "Post test description category non tenant ",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Name is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 put category non tenant", (done) => {
    request(app)
      .put(`/categories/${createdCategory.id}`)
      .send({
        name: "Put test category non tenant",
        description: "Put test description category non tenant ",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body.name).toBe("Put test category non tenant");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 put category non tenant without description", (done) => {
    request(app)
      .put(`/categories/${createdCategory.id}`)
      .send({
        name: "Test category non tenant",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Description is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 put category non tenant without name", (done) => {
    request(app)
      .put(`/categories/${createdCategory.id}`)
      .send({
        description: "Test category non tenant",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Name is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 put category non tenant with id not in database", (done) => {
    request(app)
      .put(`/categories/1000`)
      .send({
        name: "Test category non tenant",
        description: "Test category non tenant",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 Success show all Categories tenant", (done) => {
    request(app)
      .get("/categories/tenant")
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body.length).toBeGreaterThanOrEqual(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  let categoryTenant = {};
  test("201 post category tenant", (done) => {
    request(app)
      .post("/categories/tenant")
      .send({
        name: "Test category tenant",
      })
      .then((response) => {
        const { body, status } = response;
        categoryTenant = body;
        expect(status).toBe(201);
        expect(body.name).toBe("Test category tenant");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 post category tenant without name", (done) => {
    request(app)
      .post("/categories/tenant")
      .send({
        description: "Post test description category tenant ",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Name is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 put category tenant success", (done) => {
    request(app)
      .put(`/categories/tenant/${categoryTenant.id}`)
      .send({
        name: "Put test category tenant",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body.name).toBe("Put test category tenant");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 put category tenant without name", (done) => {
    request(app)
      .put(`/categories/tenant/${categoryTenant.id}`)
      .send({})
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Name is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 put category tenant with id not in database", (done) => {
    request(app)
      .put(`/categories/tenant/1000`)
      .send({
        name: "Test category tenant",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  let subCategory = {};
  test("201 post sub category", (done) => {
    request(app)
      .post(`/categories/sub/${createdCategory.id}`)
      .send({
        name: "Test sub category",
      })
      .then((response) => {
        const { body, status } = response;
        subCategory = body;
        expect(status).toBe(201);
        expect(body.name).toBe("Test sub category");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 post sub category without parent id category not found", (done) => {
    request(app)
      .post(`/categories/sub/1000`)
      .send({})
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("400 post sub category", (done) => {
    request(app)
      .post(`/categories/sub/${createdCategory.id}`)
      .send({})
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body.message).toBe("Name is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 post sub category not found", (done) => {
    request(app)
      .post(`/categories/sub/1000`)
      .send({
        name: "Put test sub category",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 put sub category success", (done) => {
    request(app)
      .put(`/categories/sub/${subCategory.id}`)
      .send({
        name: "Put test sub category",
        parent_id: createdCategory.id,
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body.name).toBe("Put test sub category");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 put sub category not found", (done) => {
    request(app)
      .put(`/categories/sub/1000`)
      .send({
        name: "Put test sub category",
        parent_Id: createdCategory.id,
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Sub Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 put sub category, without category as parent id not found", (done) => {
    request(app)
      .put(`/categories/sub/${subCategory.id}`)
      .send({
        name: "Put test sub category",
      })
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 get category detail success", (done) => {
    request(app)
      .get(`/categories/${createdCategory.id}`)
      .then((response) => {
        const { body, status } = response;
        console.log(body, "111");
        expect(status).toBe(200);
        expect(body.sub_category.length).toBeGreaterThanOrEqual(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 get category detail success category not found", (done) => {
    request(app)
      .get(`/categories/1000`)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("200 deleted category success", (done) => {
    request(app)
      // category id hardcord
      .delete(`/categories/82`)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body.message).toBe(`Category with id 82 has been deleted`);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("404 deleted category not found", (done) => {
    request(app)
      .delete(`/categories/1000`)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body.message).toBe("Category is not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
