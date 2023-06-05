import { Request, Response } from "express";
import Miembro from "../models/miembro";

export const getMiembros = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const miembros = await Miembro.findAll();
    if (miembros.length === 0) {
        return res.status(404).json({ msg: "Aun no hay miembros creados" })
    }
    res.json({
        status: 200,
        miembros
    })
}

export const getMiembro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id_equipo } = req.params;
    const miembro = await Miembro.findOne({ where: { id_equipo: id_equipo } });

    if (miembro) {
        res.json({
            status: 200,
            miembro
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario en el equipo ${id_equipo}`
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
        const { id_equipo, id_usuario } = req.params;
        const miembro = await Miembro.findOne({ where: { id_equipo: id_equipo, id_usuario: id_usuario } });
        if (!miembro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el miembro con el id de usuario: ${id_usuario} y el id de equipo: ${id_equipo}`
            })
        }

        await Miembro.destroy({ where: { id_equipo: id_equipo, id_usuario: id_usuario } });

        await miembro.save();


        res.json({
            msg: "Los datos del miembro han sido eliminados",
            data: {
                id_equipo,
                id_usuario
            }
        })
    } catch (error) {
        console.log(error)
    }
}