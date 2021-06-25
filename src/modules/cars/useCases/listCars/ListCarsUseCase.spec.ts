import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let carRepository: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carRepository = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carRepository);
  });

  test("should be able to list all available cars", async () => {
    const car = await carRepository.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1210",
      fine_amount: 80,
      brand: "Brand car",
      category_id: "2e22307c-de94-4082-a1b2-962c1658dcf6",
    });
    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  test("should be able to list all available cars by name", async () => {
    const car = await carRepository.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1210",
      fine_amount: 80,
      brand: "Brand car",
      category_id: "2e22307c-de94-4082-a1b2-962c1658dcf6",
    });
    const cars = await listCarsUseCase.execute({ name: "Car 1" });
    expect(cars).toEqual([car]);
  });
});
