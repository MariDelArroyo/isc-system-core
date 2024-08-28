import { Router } from "express";
import { getCertisController, getCertisByIdController,
    createCertiController,
    updateCertiController, deleteCerticontroller} from "../controllers/certiMarianaController";

const router = Router();
router.route('/').get(getCertisController);
router.route('/:id').get(getCertisByIdController);
router.route('/').post(createCertiController);
router.route('/:id').put(updateCertiController);
router. route('/:id').delete(deleteCerticontroller);

export default router;