import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let carRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
      specificationRepositoryInMemory
    );
  });
  test("should throw an AppError when try add a new specification to a nonexistent car", async () => {
    expect(async () => {
      const specification = {
        car_id: "1234",
        specifications_id: ["54321"],
      };
      await createCarSpecificationUseCase.execute(specification);
    }).rejects.toBeInstanceOf(AppError);
  });

  test("should be able to add a new specification to the car", async () => {
    const newCar = await carRepositoryInMemory.create({
      name: "Name car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    const specification = await specificationRepositoryInMemory.create({
      description: "test",
      name: "test",
    });

    const specifications_id = [specification.id];
    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: newCar.id,
      specifications_id,
    });
    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
