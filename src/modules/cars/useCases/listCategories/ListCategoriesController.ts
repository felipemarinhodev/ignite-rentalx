import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const result = await listCategoriesUseCase.execute();
    return response.json(result);
  }
}

export { ListCategoriesController };
