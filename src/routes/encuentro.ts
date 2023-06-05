import { Router } from 'express';
import { deleteEncuentro, getEncuentro, getEncuentros, postEncuentro, putEncuentro } from '../controllers/encuentro';

const router = Router ();


router.get('/',          getEncuentros);
router.get('/:code_match',          getEncuentro);
router.post('/',          postEncuentro);
router.put('/:code_match',          putEncuentro);
router.delete('/:code_match',          deleteEncuentro);


export default router;