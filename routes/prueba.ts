import { Router } from 'express';
import { getPruebas, getPrueba, postPrueba, putPrueba, deletePrueba } from '../controllers/pruebas';



const router = Router();


router.get('/',       getPruebas );
router.get('/:id',    getPrueba );
router.post('/',      postPrueba);
router.put('/:id',    putPrueba );
router.delete('/:id', deletePrueba );



export default router;