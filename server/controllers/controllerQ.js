var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');


module.exports = {
    login: (req, res)=>{
        let newUser = new User(req.body)
        newUser.save((err)=>{
            if(err){
                res.json(err)
            } else {
                req.session.userId = newUser._id
                res.json({message: 'success'})
            }
        })
    },

    getUser: (req, res)=>{
        if(req.session.userId == undefined){
            res.json({message: "login"})
        } else {
            User.findOne({_id: req.session.userId }, (err, user)=>{
                if(err){
                    res.json(err)
                } else {
                    res.json(user)
                }
            })
        }
    },

    logout: (req, res)=> {
        req.session.destroy((err)=>{
            if(err){
            console.log('something went wrong');
            res.json(err)
            } else {
                res.redirect('/login')
            }
        })
    },

    addQuestion: (req, res)=>{
        User.findOne({_id: req.session.userId}, (err, current_user)=>{
            if(err){
                res.redirect('/login')
            } else {
                var asker = current_user;
                let newQuestion = new Question(req.body)
                newQuestion._user = req.session.userId
                newQuestion.save((err)=>{
                    if(err){
                        res.json(err)
                    } else {
                        asker.questions.push(newQuestion._id);
                        asker.save((err)=>{
                            if(err){
                                res.json(err)
                            } else {
                                res.json({message: 'added'})
                            }
                        })
                    }
                })
            }
        }) 
    },

    getQuestions: (req, res)=>{
        Question.find({}, (err, all_questions)=>{
            if(err){
                res.json(err);
            } else {
                res.json(all_questions)
            }
        })
    },

    oneQuestion: (req, res)=> {
        Question.findOne({_id: req.body.id}).populate('answers').exec((err, question)=>{
            if(err){
                res.json(err)
            } else {
                res.json(question)
            }
        })
    },

    newAnswer: (req, res)=> {
        Question.findOne({_id: req.body.question}, (err, question)=>{
            if(err){
                res.json(err);
            } else{
                var current_question = question;
                let newAnswer = new Answer(req.body)
                newAnswer._user = req.session.userId
                newAnswer._question = current_question._id;
                newAnswer.save((err)=>{
                    if(err){
                        res.json(err);
                    } else {
                        current_question.answers.push(newAnswer._id);
                        current_question.save((err)=>{
                            if(err){
                                res.json(err)
                            } else {
                                res.json({message: "success"})
                            }
                        })
                       
                    }
                })
        }
        })
    },

    addLike: (req, res)=>{
        Answer.findOne({_id: req.body.id}, (err, answer)=>{
            if(err){
                res.json(err)
            } else {
                answer.likes += 1;
                answer.save((err)=>{
                    if(err){
                        res.json(err)
                    } else {
                        res.json({message: 'sucess'})
                    }
                })
            }
        })
    }

}