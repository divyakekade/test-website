
Faculty = require("../../models/teacherprofile");
ExamPaper= require("../../models/questionPapermodel")
const jwt = require("jsonwebtoken");
exports.sendSubject = async (req, res, next) => {
    const faculty = await Faculty.findById(req.faculty._id);
    // console.log(faculty);
    
    if (!faculty)
    {
        res.status(201).json({
            sucsses: true, 
            message :"Faculty not found"
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
    
}