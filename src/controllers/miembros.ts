import { Request, Response } from "express";
import Miembro from "../models/miembro";

export const getMiembros = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const equipo = await Miembro.findAll();
    if (equipo.length === 0) {
        return res.status(404).json({ msg: "Aun no hay equipos creados" })
    }
    res.json({
        status: 200,
        equipo
    })
}

export const getMiembro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { equipo } = req.params;
    const miembro = await Miembro.findOne({ where: { id_equipo: equipo } });

    if (miembro) {
        res.json({
            status: 200,
            miembro
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario en el equipo ${equipo}`
        })
    }
}

export const postMiembro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const {
            id_equipo,
            id_usuario
        } = req.body;

        const existC: any = await Miembro.findOne({ where: { id_equipo: id_equipo, id_usuario: id_usuario } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El Miembro ingresado ya se encuentra registrado al equipo"
            })
        }

        const miembro: any = Miembro.build({
            id_equipo,
            id_usuario
        });
        await miembro.save();

        res.json({
            msg: "El miembro ha sido creado con exito",
            body: miembro
        });

    } catch (error) {
        console.log(error)
    }
}

export const deleteMiembro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { equipo, id } = req.params;
        const miembro = await Miembro.findOne({ where: { id_equipo: equipo, id_usuario: id } });
        if (!miembro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id}`
            })
        }

        await Miembro.destroy({ where: { id_equipo: equipo, id_usuario: id } });

        await miembro.save();


        res.json({
            msg: "Los datos del Usuario han sido eliminados",
            id
        })
    } catch (error) {
        console.log(error)
    }
}