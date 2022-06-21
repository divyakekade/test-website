
Faculty = require("../../models/teacherprofile");
ExamPaper = require("../../models/questionPapermodel")
const jwt = require("jsonwebtoken");
exports.sendSubject = async (req, res, next) => {
    const faculty = await Faculty.findById(req.faculty._id);
    // console.log(faculty);

    if (!faculty) {
        res.status(201).json({
            sucsses: true,
            message: "Faculty not found"
        })
    }

    ({ coursestought } = faculty);
    res.status(201).json({
        succses: true,
        message: "subjects",
        coursestought
    })
}

exports.sendPaper = async (req, res, next) => {
    const questionPapers = await ExamPaper.find({ teacher: req.faculty._id, _id: req.params.id });


    if (!questionPapers) {
        res.status(401).json({
            succses: false,
            message: "You have not paper for this perticular subject"
        })
    }
    res.status(201).json({
        succses: true,
        questionPapers
    })
}

exports.savePaper = async (req, res, next) => {

    const { name, marks, subject } = req.body;
    if (!name || !marks) {
        res.status(401).json({
            succses: false,
            message: "question paper name or marks cannot be empty"
        })

    }
    const paperAdded = await ExamPaper.create({
        name, marks, subject,
        teacher: req.faculty._id
    })
    res.status(200).json({
        succses: true,
        message: "question paper added ",
        paperAdded
    })
}
exports.addQuestion = async (req, res, next) => {
    const { questionTitle, typeOfQuestion, marks, option1, option2, option3, option4 } = req.body;
    const subject = req.params.subject;
    const paperid = req.params.id;
    const questionPaper = await ExamPaper.findOne({ _id: paperid, teacher: req.faculty._id })
    if (typeOfQuestion == "MCQ" && (option1 == undefined || option2 == undefined || option3 == undefined || option4 == option1 == undefined)) {
        res.status(401).json({
            succses: false,
            message: "Option field Cannot be empty"
        })
    }
    if (typeOfQuestion == "Theory") {
        const questionsended = {
            questionTitle, typeOfQuestion, marks
        }
        questionPaper.question.push(questionsended);
        questionPaper.save();
    }
    if (typeOfQuestion == "MCQ") {
        const questionsended = {
            questionTitle, typeOfQuestion, marks, option1, option2, option3, option4
        }
        questionPaper.question.push(questionsended);
        questionPaper.save();
    }
    res.status(201).json({
        sucsses: true,
        questionPaper
    })
}
exports.deleteQuestion = async (req, res, next) => {
    const questionPaper = await ExamPaper.findOne({ teacher: req.faculty._id, _id: req.params.paperid });
    if (!questionPaper) {
        res.status(401).json({
            succses: false,
            message: "question paper not found"
        })
    }
    question = questionPaper.question.filter(
        que => que._id != req.params.questionid
    )
    await ExamPaper.updateOne({ teacher: req.faculty._id, _id: req.params.paperid }, { question }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(201).json({
        succses: true,
        question
    })
}

exports.updateQuestion = async (req, res, next) => {

    const { questionTitle, marks, typeOfQuestion, option1, option2, option3, option4 } = req.body
    const questionPaper = await ExamPaper.findOne({ teacher: req.faculty._id, _id: req.params.paperid });
    if (!questionPaper) {
        res.status(401).json({
            succses: false,
            message: "question paper not found"
        })
    }
    // questionPaper.question.forEach(que => {
        // if (que._id == req.params.questionid)
        //     (questionTitle, marks, typeOfQuestion, option1, option2, option3, option4)
           
    
    //  })
     let questionnotfound = true
    questionPaper.question.forEach(que => {
        if (que._id == req.params.questionid) (que.question = questionTitle, que.marks = marks, que.option1 = option1, que.option2 = option2, que.option3 = option3, que.option4 = option4, que.typeOfQuestion = typeOfQuestion,questionnotfound= false)
    });
    if(questionnotfound)
    {
        return res.status(401).json({
            succses: false,
            message: "question not found"
        })
    }
    await questionPaper.save();
    res.status(201).json({
        succses: true,
        questionPaper
    })
}
exports.sendAllQuestionPapers = async (req,res ,next) => {
    const questionPapers = await ExamPaper.find({ subject: req.params.subject, teacher: req.faculty._id }) 
    if (questionPapers.length == 0) {
        return res.status(201).json({
            succses: false,
            message:"faculty don't have question paper "
        })
    }
    
    res.status(201).json({
        succses: true,
        questionPapers
    })
}
exports.deleteEntireQuestionpaper = async (req, res, next) => {
    ExamPaper.remove({ _id: req.params.paperid, teacher: req.faculty._id })
    const questionPapers = await ExamPaper.find({ subject: req.params.subject, teacher: req.faculty._id }) 
    res.status(201).json({
        succses:true,
        questionPapers
    })
}