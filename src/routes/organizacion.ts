import { Router } from 'express';
import { deleteOrganizacion, getOrganizacion, getOrganizaciones, postOrganizacion, putOrganizacion } from '../controllers/organizacion';

const router = Router ();


router.get('/',          getOrganizaciones);
router.get('/:id_organizacion',          getOrganizacion);
router.post('/',          postOrganizacion);
router.put('/:id_organizacion',          putOrganizacion);
router.delete('/:id_organizacion',          deleteOrganizacion);


export default router;