import { Router } from 'express';
import { getEquipo, getEquipos, postEquipo, putEquipo } from '../controllers/equipos';

const router = Router ();


router.get('/',          getEquipos);
router.get('/:code',          getEquipo);
router.post('/',          postEquipo);
router.put('/:code',          putEquipo);


export default router;