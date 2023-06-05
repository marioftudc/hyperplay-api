import { Router } from "express";
import bodyParser from "body-parser";
import { authUser, verifyAuth } from "../controllers/auth";
import cors from 'cors';

const router = Router();

router.use(cors())
router.post('/', [cors(), bodyParser.json()], authUser);
router.get('/', cors(), verifyAuth);

export default router;