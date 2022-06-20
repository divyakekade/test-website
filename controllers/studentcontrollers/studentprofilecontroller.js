
Student = require("../../models/studentprofile");
const jwt = require("jsonwebtoken");
exports.sendProfile = async (req, res, next) => {
    const { token } = req.cookies;
    // console.log(token);
    const decode = jwt.verify(token, process.env.JWT_SECRETE);
    const student = await Student.findById(decode.id);
    if (student) {
        return res.status(201).json({
            sucsse: true,
            student
        })

    }
    // console.log(decode.id);
    res.status(201).json({
        sucsse: false,
        message: "Student not recognize"
    })
}

exports.updatePrfile = async (req,res, next) => {
   
    const student  = await Student.findById(req.student._id)
    
    if (!student) {
        res.status(201).json({
            sucsse: false,
            message: "Student not recognize"
        })
    }

    student.name = req.body.name || student.name ;
    student.email = req.body.email || student.email ;
    student.photo = req.body.photo || student.photo;
    student.signature = req.body.signature || student.signature;
    student.prn = req.body.prn || student.prn;
    student.phonenumber = req.body.phonenumber || student.phonenumber;
    student.branch = req.body.branch || student.branch;
    student.year = req.body.year || student.year ;
    student.dateofbirth = req.body.dateofbirth || student.dateofbirth;
    await student.save();
    res.status(200).json({
        succses: true.valueOf,
        message: "profile updates sussesfully "
    })
}
