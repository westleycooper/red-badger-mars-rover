import { expect, it, describe } from "vitest";
import { Directions, Instructions } from "../robot.constants";
import { navigate } from "../robot.navigation";

describe("Robot navigation functions work correctly", () => {
  describe("Robot moves forward", () => {
    it(`If the robot moves ${Directions.N} y increases`, () => {
      expect(
        navigate({ x: 0, y: 0, direction: Directions.N, offGrid: false }, [
          Instructions.F,
        ]),
      ).toEqual({ x: 0, y: 1, direction: Directions.N, offGrid: false });
    });

    it(`If the robot moves ${Directions.E} x increases`, () => {
      expect(
        navigate({ x: 0, y: 0, direction: Directions.E, offGrid: false }, [
          Instructions.F,
        ]),
      ).toEqual({ x: 1, y: 0, direction: Directions.E, offGrid: false });
    });
  });

  describe("Robot rotates right", () => {
    it(`facing ${Directions.N} turns ${Directions.E}`, () => {
      expect(
        navigate({ x: 0, y: 0, direction: Directions.N, offGrid: false }, [
          Instructions.R,
        ]),
      ).toEqual({ x: 0, y: 0, direction: Directions.E, offGrid: false });
    });
  });

  describe("Robot rotates left", () => {
    it(`facing ${Directions.N} turns ${Directions.W}`, () => {
      expect(
        navigate({ x: 0, y: 0, direction: Directions.N, offGrid: false }, [
          Instructions.L,
        ]),
      ).toEqual({ x: 0, y: 0, direction: Directions.W, offGrid: false });
    });
  });
});
