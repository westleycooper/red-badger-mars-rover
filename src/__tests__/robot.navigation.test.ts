import { expect, it, describe } from "vitest";
import { Directions, Instructions, Status } from "../robot.constants";
import { navigate } from "../robot.navigation";

const mockGrid = { width: 5, height: 5 };

describe("Robot navigation functions work correctly", () => {
  describe("Robot moves forward", () => {
    it(`If the robot moves ${Directions.N} y increases`, () => {
      expect(
        navigate(
          { x: 0, y: 0, direction: Directions.N, status: Status.OK },
          [Instructions.F],
          mockGrid,
        ),
      ).toEqual({ x: 0, y: 1, direction: Directions.N, status: Status.OK });
    });

    it(`If the robot moves ${Directions.E} x increases`, () => {
      expect(
        navigate(
          { x: 0, y: 0, direction: Directions.E, status: Status.OK },
          [Instructions.F],
          mockGrid,
        ),
      ).toEqual({ x: 1, y: 0, direction: Directions.E, status: Status.OK });
    });
  });

  describe("Robot rotates right", () => {
    it(`facing ${Directions.N} turns ${Directions.E}`, () => {
      expect(
        navigate(
          { x: 0, y: 0, direction: Directions.N, status: Status.OK },
          [Instructions.R],
          mockGrid,
        ),
      ).toEqual({ x: 0, y: 0, direction: Directions.E, status: Status.OK });
    });
  });

  describe("Robot rotates left", () => {
    it(`facing ${Directions.N} turns ${Directions.W}`, () => {
      expect(
        navigate(
          { x: 0, y: 0, direction: Directions.N, status: Status.OK },
          [Instructions.L],
          mockGrid,
        ),
      ).toEqual({ x: 0, y: 0, direction: Directions.W, status: Status.OK });
    });
  });
});
