import { Router } from 'express';
import { deleteMiembro, getMiembro, getMiembros, postMiembro } from '../controllers/miembros';

const router = Router ();


router.get('/',          getMiembros);
router.get('/:id_equipo',          getMiembro);
router.post('/',          postMiembro);
router.delete('/:id_equipo/:id_usuario',          deleteMiembro);


export default router;