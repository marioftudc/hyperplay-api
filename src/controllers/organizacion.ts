import { Request, Response } from "express";
import Organizaciones from "../models/organizacion";

export const getOrganizaciones = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");

    const organizacion = await Organizaciones.findAll();
    if (organizacion.length === 0) {
        return res.status(404).json({ msg: "Aun no hay Organizaciones creadas" })
    }
    res.json({
        status: 200,
        organizacion
    })
}

export const getOrganizacion = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id_organizacion } = req.params;
    const organizacion = await Organizaciones.findOne({ where: { id_organizacion: id_organizacion } });

    if (organizacion) {
        res.json({
            status: 200,
            organizacion
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ninguna organizacion con el codigo ${id_organizacion}`
        })
    }
}

export const postOrganizacion = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const {
            id_usuario,
            name,
            type,
            email,
            tel,
            redes
        } = req.body;

        const organizacionE: any = await Organizaciones.findOne({ where: { name: name } });
        if (organizacionE) {
            return res.status(400).json({
                status: 400,
                msg: `La organizacion con el nombre ${name} ya existe`
            })
        }
        const organizacion: any = Organizaciones.build({
            id_usuario,
            name,
            type,
            email,
            tel,
            redes
        });
        await organizacion.save();
        res.json({
            msg: "La organizacion ha sido creada con exito",
            body: organizacion
        });

    } catch (error) {
        console.log(error)
    }
}

export const putOrganizacion = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_organizacion } = req.params;
        const { body } = req;

        const organizacion = await Organizaciones.findOne({ where: { id_organizacion: id_organizacion } });
        if (!organizacion) {
            return res.status(404).json({
                status: 404,
                msg: `No existe la organizacion con el codigo ${id_organizacion}`
            })
        }

        await Organizaciones.update(body, { where: { id_organizacion: id_organizacion } });

        await organizacion.save();


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

export const deleteOrganizacion = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_organizacion } = req.params;
        const organizacion = await Organizaciones.findOne({ where: { id_organizacion: id_organizacion } });
        if (!organizacion) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id_organizacion}`
            })
        }

        await Organizaciones.destroy({ where: { id_organizacion: id_organizacion } });

        await organizacion.save();


        res.json({
            msg: "Los datos del encuentro han sido eliminados",
            id_organizacion
        })
    } catch (error) {
        console.log(error)
    }
}