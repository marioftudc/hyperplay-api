import { Router } from 'express';
import { deleteEquipo, getEquipo, getEquipos, postEquipo, putEquipo } from '../controllers/equipos';

const router = Router ();


router.get('/',          getEquipos);
router.get('/:code',          getEquipo);
router.post('/',          postEquipo);
router.put('/:code',          putEquipo);
router.delete('/:code',          deleteEquipo);


export default router;