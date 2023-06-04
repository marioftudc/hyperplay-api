import { Router } from 'express';
import { getEquipo, getEquipos } from '../controllers/equipos';

const router = Router ();


router.get('/',          getEquipos);
router.get('/:code',          getEquipo);
// router.post('/',          postTorneo);
// router.put('/:code',          putTorneo);


export default router;