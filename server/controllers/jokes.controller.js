const Jokes = require("../models/jokes.model")

module.exports.index = (req, res) =>{
    res.json("Hello")
}

module.exports.allJokes = (req, res) =>{
    Jokes.find()
        .then(allJokes=>{
            res.json({Jokes: allJokes})
            })
        .catch(err=>res.json({message: "Something went wrong", error: err}))
}

module.exports.oneJoke = (req, res) =>{
    Jokes.findOne({_id:req.params.id })
        .then(joke => res.json({Joke: joke}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))   
}

module.exports.createJoke = (req, res) =>{
    Jokes.create(req.body)
        .then(newJoke => res.json({result: newJoke}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))
}

module.exports.updateJoke = (req, res) =>{
    Jokes.findOneAndUpdate({_id: req.params.id}, 
        req.body, 
        { new: true, runValidators: true })
        .then(joke => res.json({Joke: joke}))
        .catch(err=>res.json({message: "Something went wrong", error: err})) 
}

module.exports.deleteJoke = (req, res) =>{
    Jokes.deleteOne({_id:req.params.id })
        .then(joke => res.json({result: joke}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))   
}