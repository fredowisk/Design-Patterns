import PriceCalculator from "./PriceCalculator";

class ParkingLot {
  parkedCars: { plate: string; checkinDate: Date }[];
  constructor(
    readonly location: string,
    readonly capacity: number,
    readonly priceCalculator: PriceCalculator
  ) {
    this.parkedCars = [];
  }

  getEmptySpaces() {
    return this.capacity - this.parkedCars.length;
  }

  checkin(plate: string, checkinDate: Date = new Date()) {
    this.parkedCars.push({ plate, checkinDate });
  }

  checkout(plate: string, checkoutDate: Date = new Date()) {
    const parkedCarIndex = this.parkedCars.findIndex(
      (car) => car.plate === plate
    );
    if (parkedCarIndex < 0) throw new Error("Car not found!");

    const parkedCar = this.parkedCars[parkedCarIndex];
    const parkedHours =
      (checkoutDate.getTime() - parkedCar.checkinDate.getTime()) /
      (1000 * 60 * 60);

    this.parkedCars.splice(parkedCarIndex, 1);
    return this.priceCalculator.calculate(parkedHours);
  }
}

export default ParkingLot;
