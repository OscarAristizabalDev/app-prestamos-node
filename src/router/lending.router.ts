import { Router } from 'express';
import { createLending } from '../controller/lending.controller';

const router = Router();

router.post('/lending', createLending);

export default router;