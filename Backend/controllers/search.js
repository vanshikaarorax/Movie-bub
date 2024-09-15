import UserBuild from "../models/user.js";
import { fetchfromTMBD } from "../services/tmbd.service.js";

export async function searchPerson(req,res){
const {query}=req.params;
try {
    const response=await fetchfromTMBD(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
    if(response.results.length===0){
        return res.status(404).send(null);
    }

    await UserBuild.findByIdAndUpdate(req.user._id,{
        $push:{
           searchHistory:{
            id:response.results[0].id,
            image:response.results[0].profile_path,
            title:response.results[0].name,
            searchType:"person",
            createdAt:new Date(),
           },

        },
    })
    res.status(200).json({success:true,content:response.results});
} catch (error) {
    console.log("there are errors");
    res.status(500).json({success:false,message:"internal server error"})
}
}
export async function searchTv(req,res){
    const {query}=req.params;
try {
    const response=await fetchfromTMBD(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);
    if(response.results.length===0){
        return res.status(404).send(null);
    }

    await UserBuild.findByIdAndUpdate(req.user._id,{
        $push:{
           searchHistory:{
            id:response.results[0].id,
            image:response.results[0].poster_path,
            title:response.results[0].title,
            searchType:"tv",
            createdAt:new Date(),
           },

        },
    })
    res.status(200).json({success:true,content:response.results});
} catch (error) {
    console.log("there are errors");
    res.status(500).json({success:false,message:"internal server error"})
}
}
export async function searchMovie(req,res){
    const {query}=req.params;
try {
    const response=await fetchfromTMBD(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    if(response.results.length===0){
        return res.status(404).send(null);
    }

    await UserBuild.findByIdAndUpdate(req.user._id,{
        $push:{
           searchHistory:{
            id:response.results[0].id,
            image:response.results[0].poster_path,
            title:response.results[0].title,
            searchType:"movie",
            createdAt:new Date(),
           },

        },
    })
    res.status(200).json({success:true,content:response.results});
} catch (error) {
    console.log("there are errors");
    res.status(500).json({success:false,message:"internal server error"})
}
    
}
export async function getSearchHistory(req,res){
try {
    res.status(200).json({success:true,content:req.user.searchHistory});
} catch (error) {
    res.status(500).json({success:false,message:"server error"});
}
}
export async function removeItemFromSearchHistory(req,res){
    let {id}=req.params.id;//as params only gets the id in a string form then we have to parse it
    id=parseInt(id);
    try {
        await UserBuild.findByIdAndUpdate(req.user._id,{
            $pull:{
                searchHistory:{id:id},
            }
        })
        res.status(200).json({success:true,message:"item successfully deleted"})
    } catch (error) {
        res.status(500).json({success:false,message:"error occured"})
    }
}