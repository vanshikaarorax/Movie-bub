import express from "express"
import { authCheck, login } from "../controllers/auth.js";
import { signup } from "../controllers/auth.js";
import { logout } from "../controllers/auth.js";
import { protectedRoute } from "../Middlewares/protectedRoute.js";
const router=express.Router();

router.post('/login',login);

router.post('/signup',signup);

router.post('/logout',logout);
router.get('/authCheck',protectedRoute,authCheck)
export default router;