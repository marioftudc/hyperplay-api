import { Router } from 'express';
import { deleteInscripcion, getInscripcion, getInscripciones, postInscripcion, putInscripcion } from '../controllers/inscripcion';

const router = Router ();


router.get('/',          getInscripciones);
// router.get('/:code_torneo',          getInscripcion);
// router.post('/',          postInscripcion);
// router.put('/:id_inscripcion',          putInscripcion);
// router.delete('/:id_inscripcion',          deleteInscripcion);


export default router;