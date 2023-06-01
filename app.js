const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");

const app = express();

// ... Define your routes and middleware here ...

mongoose.connect("mongodb://localhost/fruitsDB", { useNewUrlParser: true });


run();
async function run(){
    const user = new User(
        {name: "Saraf",
        age: 21,
        hobbies: ["Weightlifting", "Programming"],
        address:{
            street: "Main St",
            city: "New York"
        }
    }
    
    )
    user.name = "Taz"
    await user.save()
    console.log(user)
}


