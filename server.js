
 const express = require("express");//import
 const db = require("./db")
 const jwt = require("jsonwebtoken")
 const multer = require("multer");
 const bcrypt = require("bcrypt");
const path = require("path");
 const app = express(); // object






 app.get("/api/users/student", (request, response) => {
   db.query("SELECT * FROM student", (error, results) => {
     if (error) {
       console.error("Database error:", error);
      return response.status(500).json({ message: "Server internal error" });
     }
    response.status(200).json(results); // return database
  });
 });








 app.listen(3500, () => {
  console.log("Server is running on 3500");
})
