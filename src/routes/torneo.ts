import { Router } from 'express';
import { deleteTorneo, getTorneo, getTorneos, postTorneo, putTorneo } from '../controllers/torneo';


const router = Router ();


router.get('/',          getTorneos);
router.get('/:code',          getTorneo);
router.post('/',          postTorneo);
router.put('/:code',          putTorneo);
router.delete('/:code',          deleteTorneo);


export default router;