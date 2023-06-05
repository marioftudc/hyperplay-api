import { Router } from 'express';
import { getInscripcion, getInscripciones, postInscripcion } from '../controllers/inscripcion';

const router = Router ();


router.get('/',          getInscripciones);
router.get('/:code',          getInscripcion);
router.post('/',          postInscripcion);
// router.put('/:code',          putEquipo);
// router.delete('/:code',          deleteEquipo);


export default router;