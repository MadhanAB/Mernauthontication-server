

const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")

const morgan = require("morgan");
const routers = require("./routes/admin");
const {notFound,errorHandler} = require("./middleware/errorhandler");
const db = require("./database/database");



app.use(cors({
  origin: ["http://localhost:3000","http://localhost:3001"],
  credentials:true,
}));
app.use(cookieParser());

app.use(express.json());
app.use( express.urlencoded({ extended: false }));




app.use(morgan("dev"));

app.use("/api/v1", routers);
app.use(notFound);
app.use(errorHandler);

const port = 1008 ; //line by line execution

app.listen(port, () => {
  db();
  console.log(`Server running on port ${port}`);
});