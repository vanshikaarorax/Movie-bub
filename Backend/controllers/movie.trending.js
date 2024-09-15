 import { fetchfromTMBD } from "../services/tmbd.service.js";

export async function getTrendingMovie(req, res) {
    try {
        const data = await fetchfromTMBD("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");

       
        if (!data ) {
            return res.status(404).json({ success: false, message: "No movies found" });
        }

        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

        res.json({ success: true, content: randomMovie });
    } catch (error) {
        console.error("Error in getTrendingMovie controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
}

 export async function getTrailers(req,res) {
    const {id}=req.params;
    try {
        const data = await fetchfromTMBD(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
        if (!data ) {
            return res.status(404).json({ success: false, message: "No movies found" });
        }
        res.json({ success: true, trailers: data.results });
    } catch (error) {
        console.error("Error in gettrailer controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
    
 }
 export async function getDetails(req,res) {
    const {id}=req.params;
    try{
    const data=await fetchfromTMBD(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
    res.json({success:true,content: data})
    }catch(error){
        console.error("Error in get detailes controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
 }
 export async function getSimilarMovies(req,res) {
    const {id}=req.params;
    try{
    const data=await fetchfromTMBD(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`)
    res.json({success:true,similar: data.results})
    }catch(error){
        console.error("Error in get similar controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
 }
 export async function getCategory(req,res){
    const {category}=req.params;
    try {
        const data=await fetchfromTMBD(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
        res.json({success:true,content: data.results})
    } catch (error) {
        console.error("Error in get similar controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
 }








//https://api.themoviedb.org/3/trending/movie/day?language=en-US