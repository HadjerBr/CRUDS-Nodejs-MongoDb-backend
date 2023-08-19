// hashing password mongoose hooks => to fire a function after saving for example
// we use pre hook and bcrypt to hash the passwords before saving them the the database
// salt + hashing algorithm
// cookies store data in the browser for an amount of time
// jwt: encoded 3 strings: header, payload, signature
// login => db=> jwt => stored in a cookie in the user's browser


const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail , "Please enter a valid email"]
    },
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be at least 8 characters"]
    },

    

})

schema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

schema.statics.login = async function (username, password) {
    const user = await this.findOne({username});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error("Incorrect username or password");
    }
    throw Error("Incorrect username or password");
}

const User = new mongoose.model("user", schema);

module.exports = User;