import { Router } from 'express';
import { deleteUusuario, getUusuario, getUusuarios, postUusuario, putUusuario } from '../controllers/usuarios';


const router = Router();


router.get('/',       getUusuarios );
router.get('/:id',    getUusuario );
router.post('/',      postUusuario );
router.put('/:id',    putUusuario );
router.delete('/:id', deleteUusuario );



export default router;