import { fetchfromTMBD } from "../services/tmbd.service.js";

export async function getTrendingTv(req, res) {
    try {
        const data = await fetchfromTMBD("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1");

       
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

 export async function getTvTrailers(req,res) {
    const {id}=req.params;
    try {
        const data = await fetchfromTMBD(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        if (!data ) {
            return res.status(404).json({ success: false, message: "No movies found" });
        }
        res.json({ success: true, trailers: data.results });
    } catch (error) {
        console.error("Error in gettrailer controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
    
 }
 export async function getTvDetails(req,res) {
    const {id}=req.params;
    try{
    const data=await fetchfromTMBD(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
    res.json({success:true,content: data})
    }catch(error){
        console.error("Error in get detailes controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
 }
 export async function getSimilarTvShows(req,res) {
    const {id}=req.params;
    try{
    const data=await fetchfromTMBD(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
    res.json({success:true,similar: data.results})
    }catch(error){
        console.error("Error in get similar controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
 }
 export async function getTvCategory(req,res){
    const {category}=req.params;
    try {
        const data=await fetchfromTMBD(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.json({success:true,content: data.results})
    } catch (error) {
        console.error("Error in get similar controller:", error.message);
        res.status(500).json({ success: false, message: "Error in server" });
    }
 }








//https://api.themoviedb.org/3/trending/movie/day?language=en-US