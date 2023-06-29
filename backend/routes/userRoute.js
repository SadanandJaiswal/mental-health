const express = require('express')

const {registerUser,loginUser,logout,getUserDetails,getAllUser,deleteUser,updateProfile,updatePassword} = require('../controller/userController');
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')

const router = express.Router();

router.get('/users',(req,res)=>{
    res.json({
        status:'success',
        route:'user',
    })
});

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/logout',isAuthenticatedUser,logout);

router.route('/me').get(isAuthenticatedUser,getUserDetails);

router.route('/password/update').put(isAuthenticatedUser,updatePassword);


router.route('/me/update').put(isAuthenticatedUser,updateProfile);


router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles(),getAllUser);

router.route('/admin/user/:id').delete(isAuthenticatedUser, authorizeRoles(),deleteUser);



module.exports  = router;