const express = require("express");
const router = new express.Router();
const authController = require("../controllers/authController");
const {requireAuth, checkUser }= require("../middlware/authMiddleWare");
const cookieParser = require("cookie-parser");
const cors = require('cors');


router.use(express.json()); 
router.use(cookieParser());
router.use(cors({
    origin: 'https://reciepts-frontend.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

router.get("*", checkUser);
router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);





module.exports = router;