var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
//To Buy pass CORS
var cors = require("cors");

var app = express();
//-> established connection
mongoose
  .connect("mongodb://127.0.0.1:27017/LoanManager")
  .then((res) => console.log("Connected to mongoDB "))
  .catch((error) => console.log("eroooor",error));

//To get body from request we have to convert into json first
app.use(express.json());

app.use(cors());

var indexRouter = require("./routes/index");
var loginRouter = require("./routes/login");
var usersRouter = require("./routes/users");
var customersRouter = require("./routes/customers");
var auditRouter = require("./routes/audit");
var invoicesRouter = require("./routes/invoices");
var loansRouter = require("./routes/loans");
var paymentsRouter = require("./routes/payments");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//-> Use all routes
app.use("/login", loginRouter);
app.use("/customers", customersRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
