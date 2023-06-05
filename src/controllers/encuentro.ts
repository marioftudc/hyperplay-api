import { Request, Response } from "express";
import Encuentro from "../models/encuentro";

export const getEncuentros = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const encuentro = await Encuentro.findAll();
    if (encuentro.length === 0) {
        return res.status(404).json({ msg: "Aun no hay equipos creados" })
    }
    res.json({
        status: 200,
        encuentro
    })
}

export const getEncuentro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { code_match } = req.params;
    const encuentro = await Encuentro.findOne({ where: { code_match: code_match } });

    if (encuentro) {
        res.json({
            status: 200,
            encuentro
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún encuentro con el codigo ${code_match}`
        })
    }
}

export const postEncuentro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const {
            code_tournament,
            code_match,
            code_team,
            code_player
        } = req.body;

        const existC: any = await Encuentro.findOne({ where: { code_match: code_match } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El encuentro generado ya se encuentra creado"
            })
        }

        const encuentro: any = Encuentro.build({
            code_tournament,
            code_match,
            code_team,
            code_player
        });
        await encuentro.save();
        res.json({
            msg: "El encuentro ha sido creado con exito",
            body: encuentro
        });

    } catch (error) {
        console.log(error)
    }
}

export const putEncuentro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code_match } = req.params;
        const { body } = req;

        const encuentro = await Encuentro.findOne({ where: { code_match: code_match } });
        if (!encuentro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el encuentro con el codigo ${code_match}`
            })
        }

        await Encuentro.update(body, { where: { code_match: code_match } });

        await encuentro.save();


        res.json({
            msg: "Los datos del encuentro han sido actualizados",
            body
        })
    } catch (error) {
        res.json({
            status: 400,
            msg: "Hubo un error al actualizar los datos"
        })
    }
}

export const deleteEncuentro = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code_match } = req.params;
        const encuentro = await Encuentro.findOne({ where: { code_match: code_match } });
        if (!encuentro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${code_match}`
            })
        }

        await Encuentro.destroy({ where: { code_match: code_match } });

        await encuentro.save();


        res.json({
            msg: "Los datos del encuentro han sido eliminados",
            encuentro
        })
    } catch (error) {
        console.log(error)
    }
}