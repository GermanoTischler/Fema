import { Router } from "express";
import { userAccRoute } from "./route.userAcc";

const router = Router();

router.use('/userAcc', userAccRoute);

export { router };