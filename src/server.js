require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";
import mongoose from "mongoose";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middleware";

const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("몽고DB 연결 성공");
  })
  .catch((e) => {
    console.log(e);
  });

const PORT = process.env.PORT;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
