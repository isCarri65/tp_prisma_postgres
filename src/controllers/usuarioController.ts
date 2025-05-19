import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

export const getUsuarioById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
    });
    res.json(usuario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;
  try {
    const nuevo = await prisma.usuario.create({
      data: { nombre, email, password },
    });
    res.status(201).json(nuevo);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;

  try {
    const actualizado = await prisma.usuario.update({
      where: { id },
      data: { nombre, email, password },
    });
    res.json(actualizado);
  } catch (error: any) {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.usuario.delete({ where: { id } });
    res.json({ mensaje: "Usuario eliminado" });
  } catch (error: any) {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
};
