var express = require("express");
var router = express.Router();

var customersModel = require("../models/customers.model");

/* GET users listing. */
router.get("/list", function (req, res, next) {
  let pageNumber = req.query.pageNumber;
  let pageSize = req.query.pageSize;
  customersModel
    .find()
    .then((customerListResponse) => {
      console.log("Response from server" , customerListResponse);
      let to = pageNumber * pageSize;
      let from = to - pageSize;
      let filteredResult = customerListResponse;
      if(from !== 0){
        filteredResult = customerListResponse.slice(
          parseInt(from) + 1,
          to === 1 ? parseInt(to) : parseInt(to) + 1
        );
      }
      console.log(from, to);
      res.send({
        status: 200,
        recordCount: customerListResponse.length,
        results: filteredResult,
      });
    })
    .catch((error) =>
      res.send({
        status: 200,
        message: "Get called failed",
        error: error,
      })
    );
});

/* GET specific user from list */
router.get("/view", function (req, res, next) {
  const userId = req.query.id;
  console.log(userId);
  customersModel
    .findById(userId)
    .then((customer) => {
      res.send({
        status: 200,
        results: customer,
      });
    })
    .catch((error) =>
      res.send({
        status: 200,
        message: "View called failed",
        error: error,
      })
    );
});

/* Create new customer */
router.post("/create", function (req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;
  const customerObj = new customersModel({
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department,
  });

  customerObj
    .save()
    .then((data) => {
      res.send({
        status: 200,
        message: "Recored successfully created",
        addedCustomer: data,
      });
    })
    .catch((error) =>
      res.send({
        status: 500,
        message: "Recored failed to create",
        error: error,
      })
    );
});

/* Update customer */
router.put("/update", function (req, res, next) {
  const userId = req.query.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;

  //remember do not use new cust
  const customerObj = {
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department,
  };
  console.log(userId);
  console.log(customerObj);
  customersModel
    .findByIdAndUpdate(userId, customerObj)
    .then((data) => {
      res.send({
        status: 200,
        message: "Record successfully Updated",
        updatedCustomer: customerObj,
        //DOUBT -> why we are keeping customObj how is it updated
      });
    })
    .catch((error) =>
      res.send({
        status: 500,
        message: "PUT method failed",
        error: error,
      })
    );
});

/* Delete customer */
router.delete("/delete", function (req, res, next) {
  let userId = req.query.id;
  console.log();
  customersModel
    .findByIdAndDelete(userId)
    .then((data) => {
      res.send({
        status: 200,
        message: "Record successfully deleted",
        deletedCustomer: data,
      });
    })
    .catch((error) =>
      res.send({
        status: 500,
        message: "DELETE method failed",
        error: error,
      })
    );
});

/* Search customer */
router.get("/search", function (req, res, next) {
  let reqBody = { department: req.query.searchby };
  console.log(reqBody);
  customersModel
    .find(reqBody)
    .then((customer) => {
      res.send({
        status: 200,
        results: customer,
      });
    })
    .catch((error) =>
      res.send({
        status: 200,
        message: "search failed",
        error: error,
      })
    );
});

module.exports = router;

//Testing object
// {
//   "firstName": "Ganesh",
//   "lastName": "kale",
//   "emailAddress": "abc@test.com",
//   "phoneNumber": "32333483",
//   "dob": "02-08-1995",
//   "department": 'tester'
// }
