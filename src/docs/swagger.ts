import swaggerAutogen from "swagger-autogen";


const doc = {
  info: {
    version: "v0.0.1",
    title: "WPUCourse API",
    description: "Documentation for WPUCourse API",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://wpu-course.vercel.app/api",
      description : "Deploy Server"
    },
  ],
  components : {
    securitySchemes: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
        }
    },
    schemas : {
        LoginRequest: {
            identifier : "fahri",
            password : "12341234"
        } 
    }
  }
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"]

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
