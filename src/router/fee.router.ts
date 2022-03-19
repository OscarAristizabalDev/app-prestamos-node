import { Router } from 'express';
import { createFee } from '../controller/fee.controller';

const router = Router();

router.post('/fee', createFee);

export default router;