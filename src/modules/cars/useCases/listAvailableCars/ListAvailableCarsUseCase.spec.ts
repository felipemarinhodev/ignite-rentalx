import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carRepository: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carRepository = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carRepository);
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
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  test("should be able to list all available cars by brand", async () => {
    const car = await carRepository.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1210",
      fine_amount: 80,
      brand: "Brand car",
      category_id: "2e22307c-de94-4082-a1b2-962c1658dcf6",
    });
    const cars = await listAvailableCarsUseCase.execute({ brand: "Brand car" });
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
    const cars = await listAvailableCarsUseCase.execute({ name: "Car 1" });
    expect(cars).toEqual([car]);
  });

  test("should be able to list all available cars by category_id", async () => {
    const car = await carRepository.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 180.0,
      license_plate: "DEF-1210",
      fine_amount: 80,
      brand: "Brand car",
      category_id: "2e22307c-de94-4082-a1b2-962c1658dcf6",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "2e22307c-de94-4082-a1b2-962c1658dcf6",
    });
    expect(cars).toEqual([car]);
  });
});
