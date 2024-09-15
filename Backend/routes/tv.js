import express from "express"
import { getTrendingTv,getTvTrailers,getTvCategory,getSimilarTvShows,getTvDetails } from "../controllers/tv.controller.js";

const router=express.Router();

router.get('/trending',getTrendingTv);//here we only need 1 movie to show on the home page
router.get('/:id/trailers',getTvTrailers);
router.get('/:id/details',getTvDetails);
router.get('/:id/similar',getSimilarTvShows);
router.get('/:category',getTvCategory);
export default router;