import { Response, Request } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const result = this.listCategoriesUseCase.execute();
    return response.json(result);
  }
}

export { ListCategoriesController };
