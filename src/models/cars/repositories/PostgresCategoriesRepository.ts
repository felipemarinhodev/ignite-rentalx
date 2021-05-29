import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(`Chamou PostgresCategoriesRepository.findByName: ${name}`);
    return null;
  }
  list(): Category[] {
    console.log(`Chamou PostgresCategoriesRepository.list`);
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(
      `Chamou PostgresCategoriesRepository.create with name: ${name} and description: ${description}`
    );
  }
}

export { PostgresCategoriesRepository };
