import { Request, Response } from "express";
import Torneo from "../models/torneo";

export const getTorneos = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const torneos = await Torneo.findAll();
    if (torneos.length === 0) {
        return res.status(404).json({ msg: "Aun no hay torneos creados" })
    }
    res.json({
        status: 200,
        torneos
    })
}

export const getTorneo = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { code } = req.params;
    const torneo = await Torneo.findOne({ where: { code: code } });

    if (torneo) {
        res.json({
            status: 200,
            torneo
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario con el tarjeta ${code}`
        })
    }
}

export const postTorneo = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code,
            name,
            game,
            format,
            date,
            n_participants,
            prize,
            rules,
            region,
            fee,
            matches } = req.body;

        const existC = await Torneo.findOne({ where: { code: code } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El torneo ingresado ya se encuentra registrado"
            })
        }

        const torneo = Torneo.build({
            code,
            name,
            game,
            format,
            date,
            n_participants,
            prize,
            rules,
            region,
            fee,
            matches
        });
        await torneo.save();
        res.json({
            msg: "El cliente ha sido creado con exito",
            body: torneo
        });

    } catch (error) {
        console.log(error)
    }
}

export const putTorneo = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code} = req.params;
        const { body } = req;

        const torneo = await Torneo.findOne({ where: { code: code }});
        if (!torneo) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el torneo con el codigo ${code}`
            })
        }

        await Torneo.update(body, { where: { code: code} });

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