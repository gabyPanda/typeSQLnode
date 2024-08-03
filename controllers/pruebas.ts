import { Request, Response } from 'express';
import Prueba from '../models/prueba';


export const getPruebas = async (req: Request, res: Response) => {
    const pruebas = await Prueba.findAll();//regresa una promesa entonces se necesita await
    res.json({
        pruebas
    });

}

export const getPrueba = async (req: Request, res: Response) => {
    const { id } = req.params;

    const prueba = await Prueba.findByPk(id);//buscar por primary key
    if (prueba) {
        res.status(200).json({
            prueba
        })
    } else {
        res.status(404).json({
            msg: `No existe una prueba con el id ${id}`
        });
    }

}


export const postPrueba = async (req: Request, res: Response) => {

    const { body } = req;

    try {


        //busca a un usuario que tenga ese email que recibo como argumento
        const existeEmail = await Prueba.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            //return para que no continue ejecutando el programa
            return res.status(400).json({
                msg: 'Ya existe un prueba con el email ' + body.email
            });
        }

        // Crea y guarda el usuario en la base de datos

        // const usuario = await Usuario.create({
        //     nombre: body.nombre,
        //     email: body.email,
        //     estado: body.estado
        // });
        const usuario = await Prueba.create(body);

        res.status(201).json({
            usuario
        });


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

export const putPrueba = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;


    try {

        const usuario = await Prueba.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }

        await usuario.update(body);
        res.status(200).json({
            msg: 'se actualizo el usuario correctamente',
            usuario
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

export const deletePrueba = async(req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Prueba.findByPk( id );
    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await usuario.update({ estado: false });

    // await usuario.destroy(); //para destruirlo del todo


    res.json({
        msg:'Usuario borrado'
    });

}
