import AirportPriceCalculator from "../../../src/behavioral/strategy/AirportPriceCalculator";
import BeachPriceCalculator from "../../../src/behavioral/strategy/BeachPriceCalculator";
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import ShoppingPriceCalculator from "../../../src/behavioral/strategy/ShoppingPriceCalculator";

test("should create an empty parking lot", () => {
  const parkingLot = new ParkingLot(
    "shopping",
    500,
    new ShoppingPriceCalculator()
  );
  expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("should park a car", () => {
  const parkingLot = new ParkingLot(
    "shopping",
    500,
    new ShoppingPriceCalculator()
  );
  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
  expect(parkingLot.getEmptySpaces()).toBe(499);
});

test("a car should leave the parking lot", () => {
  const parkingLot = new ParkingLot(
    "shopping",
    500,
    new ShoppingPriceCalculator()
  );
  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
  const price = parkingLot.checkout(
    "AAA-9999",
    new Date("2022-01-01T15:00:00")
  );
  expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("should pay R$20 for ilimited hours in the beach parking lot", () => {
  const parkingLot = new ParkingLot("beach", 500, new BeachPriceCalculator());
  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
  const price = parkingLot.checkout(
    "AAA-9999",
    new Date("2022-01-01T20:00:00")
  );
  expect(price).toBe(20);
});

test("should pay R$ 10 for each hour in the shopping parking lot", () => {
  const parkingLot = new ParkingLot(
    "shopping",
    500,
    new ShoppingPriceCalculator()
  );
  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
  const price = parkingLot.checkout(
    "AAA-9999",
    new Date("2022-01-01T15:00:00")
  );
  expect(price).toBe(50);
});

test("should pay R$ 20 for 3 hours, and after that R$10 for each hour in the airport parking lot", () => {
  const parkingLot = new ParkingLot(
    "airport",
    500,
    new AirportPriceCalculator()
  );
  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
  const price = parkingLot.checkout(
    "AAA-9999",
    new Date("2022-01-01T15:00:00")
  );
  expect(price).toBe(40);
});
