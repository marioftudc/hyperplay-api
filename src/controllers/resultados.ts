import { Request, Response } from "express";
import Resultados from "../models/resultados";

export const getResultado = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const resultado = await Resultados.findAll();
    if (resultado.length === 0) {
        return res.status(404).json({ msg: "Aun no hay Resultado creados" })
    }
    res.json({
        status: 200,
        resultado
    })
}

export const getResultados = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id_resultado } = req.params;
    const resultado = await Resultados.findOne({ where: { id_resultado: id_resultado } });

    if (resultado) {
        res.json({
            status: 200,
            resultado
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningun resultado con el codigo ${id_resultado}`
        })
    }
}

export const postResultado = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const {
            id_encuentro,
            namegame,
            codematch,
            teams,
            players,
            detestats,
            gameduration,
            stats
        } = req.body;

        const resultadoE: any = await Resultados.findOne({ where: { id_encuentro: id_encuentro } });
        if (resultadoE) {
            return res.status(400).json({
                status: 400,
                msg: `Los resultados del encuentro con el codigo ${codematch} ya existen`
            })
        }
        const resultados: any = Resultados.build({
            id_encuentro,
            namegame,
            codematch,
            teams,
            players,
            detestats,
            gameduration,
            stats
        });
        await resultados.save();
        res.json({
            msg: "Los resultados fueron generados con exito",
            body: resultados
        });

    } catch (error) {
        console.log(error)
    }
}

export const putResultado = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_resultado } = req.params;
        const { body } = req;

        const resultado = await Resultados.findOne({ where: { id_resultado: id_resultado } });
        if (!resultado) {
            return res.status(404).json({
                status: 404,
                msg: `No existen los resultados`
            })
        }

        await Resultados.update(body, { where: { id_resultado: id_resultado } });
        await resultado.save();


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

export const deleteResultado = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_resultado } = req.params;
        const resultados = await Resultados.findOne({ where: { id_resultado: id_resultado } });
        if (!resultados) {
            return res.status(404).json({
                status: 404,
                msg: `No existe esos resultados`
            })
        }

        await Resultados.destroy({ where: { id_resultado: id_resultado } });

        await resultados.save();


        res.json({
            msg: "Los resultados fueron eliminados",
            id_resultado
        })
    } catch (error) {
        console.log(error)
    }
}