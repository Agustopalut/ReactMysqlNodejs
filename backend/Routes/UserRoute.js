import express from "express"
import { 
    getUsers, 
    getUsersById,
    postUsers,
    editUsers,
    deleteUsers 
} from "../controllers/UserControler.js";
const router = express.Router();
router.get("/users",getUsers);
router.get("/users/:id",getUsersById);
router.post("/users/",postUsers);
router.put("/users/:id",editUsers);
router.delete("/users/:id",deleteUsers);

export default router;