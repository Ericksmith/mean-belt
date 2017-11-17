var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
    question: {type: String, required: true, minlength: 10},
    discription: {type: String},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    _user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    }, {timestamps: true}
)

var AnswerSchema = new Schema({
    answer: {type: String, required: true, minlength: 5},
    details: {type: String},
    likes: {type: Number, default: 0},
    _user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _question: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    }, {timestamps: true}
)

var UserSchema = new Schema({
    username: {type: String, required: true},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    }, {timestamps: true}
)



var Question = mongoose.model('Question', QuestionSchema)
var User = mongoose.model('User', UserSchema)
var Answer = mongoose.model('Answer', AnswerSchema)