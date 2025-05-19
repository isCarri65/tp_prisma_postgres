import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getUsuarioById,
  getUsuarios,
  updateUsuario,
} from "../controllers/usuarioController";

const router = Router();

router.get("/", getUsuarios);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

router.get("/:id", getUsuarioById);

export default router;
