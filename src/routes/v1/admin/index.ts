import express from 'express';
const router = express.Router();
import contractRoute from './contract.route'
import isAdmin from '../../../middleware/is_admin.middleware';

router.use(isAdmin);
router.use('/contract', contractRoute)

export default router;
