import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
        unique:true
    },
    image:{
        type:String,
        default:""
    },
    searchHistory:{
        type:Array,
        default:[]
    }
})
const UserBuild = mongoose.model('BuildInfo',userSchema);

export default UserBuild;