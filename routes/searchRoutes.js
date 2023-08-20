const {Router} = require("express");
const router = new Router();
const Fis = require("../models/fis");
const {requireAuth, checkUser }= require("../middlware/authMiddleWare");
const cookieParser = require("cookie-parser");



router.use(cookieParser());

// router.post("*", checkUser);

// router.get("/searchBytutar", (req, res) => {
    
//     // const tur = req.params.tur;
//     let title = "Search By Tutar ";
//     // res.render("fisEkle", {title: title, message: message}); 
//     res.json({title});
    
// })
// router.get("/tur/", (req, res) => {
//     Fis.find().then((result) => {
//         res.render("searchByTur", {title: "search by tur", fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
    
// })

// router.get("/tarih/", (req, res) => {
//     Fis.find().then((result) => {
//         res.render("searchByTarih", {title: "search by tarih", fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
    
// })

// router.get("/no/", (req, res) => {
//     Fis.find().then((result) => {
//         res.render("searchByNo", {title: "search by no", fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
    
// })

// router.get("/kimden/", (req, res) => {
//     Fis.find().then((result) => {
//         res.render("searchByKimden", {title: "search by kimden", fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
    
// })

router.post("/search", (req, res) => {
    const { search } = req.body;
    const searchValue = search.toLowerCase();
    let message = "";
  
    const searchConditions = [];
  
    if (searchValue) {
      searchConditions.push(
        { kimden: searchValue },
        { tur: searchValue }
      );
  
      
      const parsedTutar = parseFloat(searchValue);
      if (!isNaN(parsedTutar)) {
        searchConditions.push({ tutar: parsedTutar }, { no: parsedTutar });
      }
  
      
      const parsedDate = new Date(searchValue);
      if (!isNaN(parsedDate)) {
        searchConditions.push({ tarih: parsedDate });
      }
    }
  
    Fis.find({ $or: searchConditions })
      .then((result) => {
          
        res.json({title: searchValue, fisler: result, message: null});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred" });
      });
  });
  

// router.post("/search/Byno", (req, res) => {
//     Fis.find({no: req.body.search}).then((result) => {
//         res.render("searchByNo", {title: req.body.search, fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
// })

// router.post("/search/Bytarih", (req, res) => {
//     Fis.find({tarih: new Date(req.body.search + "GMT")}).then((result) => {
//         res.render("searchByTarih", {title: req.body.search, fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
// })

// router.post("/search/Bytur", (req, res) => {
//     Fis.find({tur: req.body.search.toLowerCase()}).then((result) => {
//         res.render("searchByTur", {title: req.body.search, fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
// })
// router.post("/search/Bytutar", (req, res) => {
//     Fis.find({tutar: req.body.search}).then((result) => {
//         res.render("searchByTutar", {title: req.body.search, fisler: result});
//     }).catch(err => {
//         console.log(err);
//     })
// })








module.exports = router;