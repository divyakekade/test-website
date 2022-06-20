exports.sendtoken = async (res, statuscode, student) => {
    token = student.getJWTToken();
    
    res.status(statuscode).cookie("token", token).json({
        succses: true,
        student,
        token
    })
}
exports.sendtokenfaculty = async (res, statuscode, faculty) => {
    token = faculty.getJWTToken();

    res.status(statuscode).cookie("token", token).json({
        succses: true,
        faculty,
        token
    })
}