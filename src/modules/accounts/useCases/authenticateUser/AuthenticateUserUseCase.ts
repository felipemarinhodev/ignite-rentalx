import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: { name: string; email: string };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuario existe
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    // senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }
    // Gerar JWT
    const token = sign({}, "68ed38dc744a3eaa8efd5dfb2848b6e0", {
      subject: user.id,
      expiresIn: "1d",
    });

    const result: IResponse = {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };

    return result;
  }
}

export { AuthenticateUserUseCase };
