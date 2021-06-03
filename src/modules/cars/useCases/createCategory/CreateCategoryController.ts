import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUse: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.createCategoryUse.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
