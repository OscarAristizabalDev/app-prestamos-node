import { Router } from 'express';
import { createCustomer } from '../controller/customer.controller';


const router = Router();

router.post('/customer', createCustomer);

export default router;