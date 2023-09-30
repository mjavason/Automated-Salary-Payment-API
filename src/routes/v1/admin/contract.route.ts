import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { contractController } from '../../../controllers';
import { contractValidation } from '../../../validation';

router.post('/', processRequestBody(contractValidation.create.body), contractController.create);
router.get('/search', processRequestQuery(contractValidation.find.query), contractController.find);
router.get('/:pagination', contractController.getAll);
router.patch(
  '/:id',
  [
    processRequestBody(contractValidation.update.body),
    processRequestParams(contractValidation.update.params),
  ],
  contractController.update,
);
router.delete(
  '/:id',
  [processRequestParams(contractValidation.getById.params)],
  contractController.delete,
);

export default router;
