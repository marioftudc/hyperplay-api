import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import bcryptjs from 'bcryptjs';

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json({
        usuarios
    });

}

export const getUsuario = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    const usuario = await Usuario.findOne({ where: { id_usuario: id } });

    if (usuario) {
        res.json({
            status: 200,
            usuario
        });
    } else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario con el id ${id}`
        })
    }
}

export const postUsuario = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const {
            nit, nickname, name, lastname, telephone, country, city, birthdate, email, password, role
        } = req.body;

        const existEmail = await Usuario.findOne({ where: { email: email } });
        if (existEmail) {
            return res.status(400).json({
                status: 400,
                msg: "El email ingresado ya se encuentra registrado"
            })
        }

        let hoy = new Date();
        let fecha =
            hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
        let hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
        let fechaYHora = fecha + " " + hora;

        let code = "";
        const time = new Date();
        code =
            "" +
            (Math.floor(Math.random() * (9999 - 1000)) + 1000) +
            Math.floor(time.getTime() / 1000);

        const usuario = Usuario.build({
            nit,
            nickname,
            name,
            lastname,
            telephone,
            country,
            city,
            birthdate,
            email,
            password,
            role,
            code
        });

        const salt = bcryptjs.genSaltSync();
        usuario.set({
            password: bcryptjs.hashSync(password, salt)
        })
        await usuario.save();
        res.json({
            msg: "El usuario ha sid_usuarioo creado con exito",
            body: usuario
        });

    } catch (error) {
        console.log(error)
    }
}


export const putUsuario = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id } = req.params;
        const { body } = req;

        const usuario = await Usuario.findOne({ where: { id_usuario: id } });
        if (!usuario) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id}`
            })
        }

        await Usuario.update(body, { where: { id_usuario: id } });

        await usuario.save();


        res.json({
            msg: "Los datos del usuario han sido actualizados",
            body,
            id
        })
    } catch (error) {
        res.json({
            status: 400,
            msg: "Hubo un error al actualizar los datos"
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id } = req.params;
        const { body } = req;
        const usuario = await Usuario.findOne({ where: { id_usuario: id } });
        if (!usuario) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id}`
            })
        }

        await Usuario.destroy({ where: { id_usuario: id } });

        await usuario.save();


        res.json({
            msg: "Los datos del Usuario han sido eliminados",
            body,
            id
        })
    } catch (error) {
        console.log(error)
    }
}