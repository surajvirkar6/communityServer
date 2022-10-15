const UserCollection = require('../models/User');
// exports.addUser = async (req, res) => {
//     let { email, userName } = req.body;
//     let saveEmail = await UserCollection({ email, userName })
//     saveEmail.save((err, data) => {
//         if (err) {
//             let errorMessage = '';
//             if (err.message.includes('User validation failed')) {
//                 Object.keys(err.errors).forEach(key => {
//                     errorMessage = err.errors[key].message;
//                 })
//             }

//             if (err.code === 11000) {
//                 errorMessage = Object.keys(err.keyValue)[0].toLowerCase() + ' already exists';
//             }
//             res.status(200).json({
//                 success: false,
//                 message: errorMessage
//             });
//         }
//         else {
//             // TODO: use of jwt and send token to client for authentication
//             console.log(data._id);
//             res.status(200).json({
//                 success: true,
//                 message: 'User added successfully',
//             });
//         }
//     });
// }

exports.registerUser = async(req, res) => {
    try{
        res.send('Register user')
    } catch(e) {
        console.log(e)
    }
}

exports.logInUser = async(req, res) => {
    try{
        res.send('Login user')
    } catch(e) {
        console.log(e)
    }
}

exports.logoutUser = async(req, res) => {
    try{
        res.send('Logout user')
    } catch(e) {
        console.log(e)
    }
}

exports.updateUser = async(req, res) => {
    try{
        res.send('Update user')
    } catch(e) {
        console.log(e)
    }
}