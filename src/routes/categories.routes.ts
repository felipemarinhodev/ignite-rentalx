import { Router } from "express";

import {
  createCategoryController,
  categoriesRepository,
} from "../models/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const result = categoriesRepository.list();
  return response.json(result);
});

export { categoriesRoutes };
