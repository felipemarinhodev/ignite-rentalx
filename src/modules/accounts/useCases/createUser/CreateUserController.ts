import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;
    const createCategoryUseCase = container.resolve(CreateUserUseCase);
    await createCategoryUseCase.execute({
      name,
      username,
      email,
      password,
      driver_license,
    });
    return response.status(201).send();
  }
}

export { CreateUserController };
