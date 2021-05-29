import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class CreateSpecificationService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): void {
    console.log("Implements CreateSpecificationService");
  }
}

export { CreateSpecificationService };
