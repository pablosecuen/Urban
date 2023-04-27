import { Router } from "express";
import { loginUser } from "../../controllers/inputs/login/loginUser";
import { loginChauffeur } from "../../controllers/inputs/login/loginChauffeur";
import { loginDistributor } from "../../controllers/inputs/login/loginDistributor";
import { loginLocal } from "../../controllers/inputs/login/loginLocal";

const router = Router();

router.post("/user", loginUser);

router.post("/chauffeur", loginChauffeur);

router.post("/distributor", loginDistributor);

router.post("/local", loginLocal);

export default router;
