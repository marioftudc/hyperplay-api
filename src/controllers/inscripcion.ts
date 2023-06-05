import { Request, Response } from "express";
import Inscripciones from "../models/inscripcion";
import Torneo from "../models/torneo";
import Equipo from "../models/equipo";
import Usuario from "../models/usuario";

export const getInscripciones = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const inscripcion = await Inscripciones.findAll();
    if (inscripcion.length === 0) {
        return res.status(404).json({ msg: "Aun no hay participantes inscritos" })
    }
    res.json({
        status: 200,
        inscripcion
    })
}

export const getInscripcion = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { code_torneo } = req.params;
    const inscripcion = await Inscripciones.findOne({ where: { code_torneo: code_torneo } });

    if (inscripcion) {
        res.json({
            status: 200,
            inscripcion
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ninguna inscripcion con el codigo ${code_torneo}`
        })
    }
}

export const postInscripcion = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const {
            fee,
            code_torneo,
            code_participant,
            status
        } = req.body;

        const torneo: any = await Torneo.findOne({ where: { code: code_torneo } });
        if (torneo) {
            return res.status(400).json({
                status: 400,
                msg: `El Torneo con el codigo ${code_torneo}`
            })
        }

        const equipo: any = await Equipo.findOne({ where: { code: code_participant } });
        const player: any = await Usuario.findOne({ where: { code: code_participant } });
        if (equipo || player) {
            return res.status(400).json({
                status: 400,
                msg: `El Equipo o jugaodor con el codigo ${code_participant}`
            })
        }
        const inscripcion: any = Inscripciones.build({
            fee,
            code_torneo,
            code_participant,
            status
        });
        await inscripcion.save();
        res.json({
            msg: "El encuentro ha sido creado con exito",
            body: inscripcion
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

// export const deleteEncuentro = async (req: Request, res: Response) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     try {
//         const { code_match } = req.params;
//         const encuentro = await Encuentro.findOne({ where: { code_match: code_match } });
//         if (!encuentro) {
//             return res.status(404).json({
//                 status: 404,
//                 msg: `No existe el usuario con el codigo ${code_match}`
//             })
//         }

//         await Encuentro.destroy({ where: { code_match: code_match } });

//         await encuentro.save();


//         res.json({
//             msg: "Los datos del encuentro han sido eliminados",
//             encuentro
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }