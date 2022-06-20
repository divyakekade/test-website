const mongoose = require("mongoose"); 

const questionPaperSchema = new mongoose.Schema({
    subject: {
        type: String,
        required:[true,"Please enter subject"],
    },
    name: {
        type:string
    },
    question: [
        {
            questionTitle: {
              type:string
            },
            option1: {
                type:string
            },
            option2: {
                type: string
            },
            option3: {
                type: string
            },
            option4: {
                type: string
            },
            marks: {
                type: Number,
                required:[,"Ente the marks of student "]
            }

        }

    ]
    ,
    image: [
        {
            public_key: {
                type:String 
            },
            url: {
                type:String
            }
        }
    ],
    marks: {
        type: Number,
      required:[true,"Please add marks "]  
    }
})

module.exports = mongoose.model("ExamPaper", questionPaperSchema);