const { sendtoken, sendtokenfaculty } = require("../../utility/cockietoken");
const { sendEmail } = require("../../utility/passwordResetEmail")
Faculty = require("../../models/teacherprofile");
exports.facultysignup = async (req, res) => {
    const { name, email, password, phoneNumber, coursestought } = req.body;
    const faculty = await Faculty.create({
        name, email, password,
        photo: {
            public_id: "123",
            url: "321"
        },

        phoneNumber,
        coursestought
    })
    sendtokenfaculty(res, 201, faculty)

}

exports.facultyLogin = async (req, res, next) => {
    // getting  details from request
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            succses: false,
            msg: "not faculty"
        })
    }
    // find user with email
    const faculty = await Faculty.findOne({ email }).select("+password");
    if (!faculty) {
        return res.status(400).json({
            succses: false,
            msg: "not faculty"
        })
    }
    //check password is matchend or not 
    const isPasswordMatched = await faculty.comparePassword(password);
    // console.log(password, student.password);
    if (!isPasswordMatched) {
        return res.status(400).json({
            succses: false,
            msg: "not faculty"
        })
    }
    sendtokenfaculty(res, 201, faculty)

}
exports.logout = async (req, res, next) => {
    res.cookie("token", null, new Date(Date.now));
    res.clearCookie("token")
    await req.faculty.save();

    res.status(200).json({
        succses: true,
        message: "Logout succsesfully"
    })
}

// exports.forgotPassword = async (req, res, next) => {
//     // console.log(req);
//     const student = await Student.findOne({ email: req.body.email });
//     if (!student) {
//         return res.status(401).json({
//             succses: false,
//             message: "Student not found"
//         })
//     }

//     const resetToken = student.getResetpasswordToken();
//     await student.save();
//     const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
//     const message = `Your reset Password Link  is:- \n${resetPasswordUrl}\n\n.If you not send the please ignore`;
//     try {
//         console.log(req.body.email);
//         await sendEmail({
//             email: student.email,
//             subject: "WCOE online service password reset link",
//             message
//         })
//         res.status(200).json({
//             succses: true,
//             message
//         })
//     }
//     catch (error) {
//         student.resetPasswordToken = undefined;
//         student.resetPasswordExpire = undefined;
//         student.save();
//         return res.status(401).json({
//             succses: false,
//             message: error
//         })
//     }

// }