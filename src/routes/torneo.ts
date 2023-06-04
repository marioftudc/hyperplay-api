import { Router } from 'express';
import { getTorneo, getTorneos, postTorneo, putTorneo } from '../controllers/torneo';

const router = Router ();


router.get('/',          getTorneos);
router.get('/:code',          getTorneo);
router.post('/',          postTorneo);
router.put('/:code',          putTorneo);


export default router;