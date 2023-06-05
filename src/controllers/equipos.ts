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

export const postEquipo = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { 
            code,
            name,
            id_director
         } = req.body;

        const existC: any = await Equipo.findOne({ where: { code: code } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El equipo ingresado ya se encuentra registrado"
            })
        }

        const equipo: any = Equipo.build({
            code,
            name,
            id_director
        });
        await equipo.save();
        res.json({
            msg: "El equipo ha sido creado con exito",
            body: equipo
        });

    } catch (error) {
        console.log(error)
    }
}

export const putEquipo = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code} = req.params;
        const { body } = req;

        const torneo = await Equipo.findOne({ where: { code: code }});
        if (!torneo) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el torneo con el codigo ${code}`
            })
        }

        await Equipo.update(body, { where: { code: code} });

        await torneo.save();


        res.json({
            msg: "Los datos del torneo han sido actualizados",
            body
        })
    } catch (error) {
        res.json({
            status: 400,
            msg: "Hubo un error al actualizar los datos"
        })
    }
}