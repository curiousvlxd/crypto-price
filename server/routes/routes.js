import cryptoRoutes from "./cryptoRoutes.js";
import { Router } from "express";

const router = Router();
router.use(cryptoRoutes);
export default router;
