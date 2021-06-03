import { Response, Request } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.listCategoriesUseCase.execute();
    return response.json(result);
  }
}

export { ListCategoriesController };
