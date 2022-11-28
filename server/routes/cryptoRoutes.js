import {Router} from "express"
import {getAll, getById, insertCrypto, deleteCrypto, updateCrypto} from "../controllers/cryptoController.js"
const router = Router();
router
    .route("/crypto")
    .get(getAll, (req, res) => {
        res.json(req.crypto);
    })
    .post(insertCrypto,(req, res) => {
        res.json({message: "POST"});
        console.log(req.body);
    })
router
    .route("/crypto/:id")
    .get(getById, (req, res) => {
        res.json({
            message: "GET",
            news: req.crypto});
        console.log(req.params.id);
    })
    .delete(deleteCrypto, (req, res) => {
        res.json({message: "DELETE", news: req.result.affectedRows});
        console.log(req.params.id);
    })
    .put(updateCrypto, (req, res) => {
        res.json({message: "PUT", news: req.result});
        console.log(req.body);
    })
export default router;