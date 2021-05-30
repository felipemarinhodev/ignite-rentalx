import { Router } from "express";

import { SpecificationRepository } from "../models/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../models/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );
  const { name, description } = request.body;
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationsRoutes };
