import { Router } from 'express';
import { deleteMiembro, getMiembro, getMiembros, postMiembro } from '../controllers/miembros';

const router = Router ();


router.get('/',          getMiembros);
router.get('/:equipo',          getMiembro);
router.post('/',          postMiembro);
router.delete('/:equipo/:id',          deleteMiembro);


export default router;