import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    const response = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({
        email: "salimjon555@gmail.com",
        password: "Uzbek!st0n",
      });
    token = response.body.token;
    console.log("token", token);
  });
  it("/users/all (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/users/all")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
