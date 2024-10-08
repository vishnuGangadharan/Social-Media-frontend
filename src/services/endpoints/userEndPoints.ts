import { login, postData } from "@/api/user"

const userRoutes = {
    signup: '/user/signup',
    userOtpVerify: '/user/verifyOtp',
    resendOtp:'/user/resendOtp',
    addPost: '/user/addPost',
    login: '/user/login',
    postData: '/user/postData',
    postComment:'/user/postComment',
    userData:'/user/userData',
    follow : '/user/follow',
    AllUsers: '/user/allUsers',
    allVideos: '/user/allVideos'

}

export default userRoutes