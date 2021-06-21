import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const newCar = await createCarUseCase.execute({
      name: "Name car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(newCar).toHaveProperty("id");
  });

  it("should throw an AppError when try to create a new car if already exists license plate in base", async () => {
    const car = {
      name: "Name car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    };
    await createCarUseCase.execute(car);

    expect(async () => {
      await createCarUseCase.execute(car);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const newCar = await createCarUseCase.execute({
      name: "Name car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(newCar.available).toBeTruthy();
  });
});
