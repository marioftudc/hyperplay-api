import { Request, Response } from "express";
import Usuario from "../models/usuario";
import bcryptjs from 'bcryptjs';
import { where } from "sequelize";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY || 'tokentest';

export const authUser = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ where: { email: email } });

    if (!usuario) {
        return res.status(400).json({ msg: 'El usuario no existe' });
    }
    const passCorrecto = await bcryptjs.compare(password, usuario.dataValues.password);
    if (!passCorrecto) {
        return res.status(400).json({ msg: 'Password Incorrecto' })
    }

    const payload = {
        usuario: {
            id: usuario.dataValues.id_usuario
        }
    };

    // firmar el JWT
    jwt.sign(payload, secretKey, {
        expiresIn: 3600
    }, (error: any, token: any) => {
        if (error) throw error;

        // Mensaje de confirmación
        res.json({
            status: 200,
            token
        });
    });

}

export const verifyAuth = async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, secretKey, async (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        const {id} = decoded.usuario;
        const userFind = await Usuario.findByPk(id)
        delete userFind?.dataValues.password;
        res.status(200).json({
            message: 'Authenticated Token',
            usuario: userFind,
            Issued_at: new Date(decoded.iat),
            Expires_at: new Date(decoded.exp),
            Issuer: decoded.iss,
        });
    });
}
