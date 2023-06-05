import { Router } from 'express';
import { deleteResultado, getResultado, getResultados, postResultado, putResultado } from '../controllers/resultados';

const router = Router ();


router.get('/',          getResultado);
router.get('/:id_resultado',          getResultados);
router.post('/',          postResultado);
router.put('/:id_resultado',          putResultado);
router.delete('/:id_resultado',          deleteResultado);

export default router;