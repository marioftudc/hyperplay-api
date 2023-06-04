import { Request, Response } from "express";
import Equipo from "../models/equipo";

export const getEquipos = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const equipo = await Equipo.findAll();
    if (equipo.length === 0) {
        return res.status(404).json({ msg: "Aun no hay equipos creados" })
    }
    res.json({
        status: 200,
        equipo
    })
}

export const getEquipo = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { code } = req.params;
    const equipo = await Equipo.findOne({ where: { code: code } });

    if (equipo) {
        res.json({
            status: 200,
            equipo
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario con el tarjeta ${code}`
        })
    }
}