import express from "express"
import { getTrendingMovie ,getTrailers,getDetails,getSimilarMovies,getCategory} from "../controllers/movie.trending.js";

const router=express.Router();

router.get('/trending',getTrendingMovie);//here we only need 1 movie to show on the home page
router.get('/:id/trailers',getTrailers);
router.get('/:id/details',getDetails);
router.get('/:id/similar',getSimilarMovies);
router.get('/:category',getCategory);
export default router;