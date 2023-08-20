// JWT: for authentication


const express = require("express");
const mongoose = require("mongoose");
const Fis = require("./models/fis");
const Adet = require("./models/adet");
const Tutar = require("./models/tutar");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
const searchRouter = require("./routes/searchRoutes");
const {requireAuth, checkUser }= require("./middlware/authMiddleWare");
const cors = require('cors');

dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 8080;

const app = express();



app.set('view engine', 'ejs');

app.use(cors({
    origin: 'https://reciepts-frontend.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true})); // to attach to req.body
app.use(authRouter);
app.use(searchRouter);
app.use(express.json()); // attach the json response as a js OBJECT to req.body
app.use(cookieParser());
app.get("*", checkUser);


app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
  }));

const dbUri = process.env.dbUri;
mongoose.connect(dbUri).then( (result) => {
    app.listen(PORT, () => {

        console.log("listening to port " + PORT);
       
    })
}).catch((err) =>{
    console.log(err);
})



app.get("/add", (req, res) => {
    const message = req.session.message || '';
    delete req.session.message;
    const title = "Adding New Reciepts Page";
    // res.render("fisEkle", {title: title, message: message}); 
    res.json({title, message});// for new records
})

app.post("/",  (req, res) => {
    const fisler = [];
    console.log(req.body);

    for (let i = 0; i<20; i++) {
        if (req.body.table1[i].tarih.length > 0 ) {
            
            const fisObject = {
                tarih: req.body.table1[i].tarih,
                no: req.body.table1[i].no,
                kimden: req.body.table1[i].kimden.toLowerCase(),
                tur: req.body.table1[i].tur.toLowerCase(),
                tutar: req.body.table1[i].tutar,
            }
            const fis = new Fis(fisObject);
            fisler.push(fis);
            
        
            
            
        }
        if (req.body.table2[i].tarih.length > 0 ) {
            
            const fisObject = {
                tarih: req.body.table2[i].tarih,
                no: req.body.table2[i].no,
                kimden: req.body.table2[i].kimden.toLowerCase(),
                tur: req.body.table2[i].tur.toLowerCase(),
                tutar: req.body.table2[i].tutar,
            }
            const fis = new Fis(fisObject);
            fisler.push(fis);
            
        
            
            
        }

        
    }

    if (fisler.length >0) {
        Fis.insertMany(fisler).then((result) => {
            req.session.message = 'Reciept Created successfully';
            res.json({message: req.session.message});
            
    
        }).catch((err) =>{
            req.session.message = 'Reciept could not be created. Please fill at least one row.';
            res.json({message: req.session.message});
            
        });
    }

    else {
        req.session.message = 'Reciept could not be created. Please fill at least one row.';
        res.json({message: req.session.message});
    }
    
     

    

    
   
    
    
    
})

app.get("/" , (req, res) => {
    const message = req.session.message || "";
    delete req.session.message;
    const title = "Old Reciepts";
    Fis.find().then((result) => {
        res.json({title: title, fisler: result, message: message});
    }).catch(err => {
        console.log(err);
    })
})







app.delete("/:id", (req, res) => {
    req.session.message = 'Reciept Deleted successfully';
    const id = req.params.id;
    Fis.findByIdAndDelete(id).then((result) => {
        res.json({message:'Reciept Deleted successfully'});
    }).catch((err) => {
        console.log(err);
    })
})


app.get("/update/:id", (req, res) => {
    const id = req.params.id;
    Fis.findById(id).then((result) => {
        res.json({fis: result, title: "Update Reciept no: " + result.no});
    }).catch((err) => {
        console.log(err);
    })
})

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    Fis.findByIdAndUpdate(id, {
        tarih: req.body.tarih,
        no: req.body.no,
        kimden: req.body.kimden,
        tur: req.body.tur,
        tutar: req.body.tutar
    }, { new: true }) 
    .then((updatedFis) => {
        
        req.session.message = 'Receipt Updated successfully';
        
        
        res.json({message:req.session.message});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({message: "Error updating receipt, try again"});
    });
});



app.use((req, res) => {
    const title = "Oops-404";
    res.render("404", {title: title});
})


