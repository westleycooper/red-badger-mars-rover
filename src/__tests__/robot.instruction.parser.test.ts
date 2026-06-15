// robot.parser.test.ts
import { describe, it, expect } from "vitest";
import {
  Directions,
  Instructions,
  MaxGridValue,
  MaxInstructionLength,
} from "../robot.constants";
import { robotInstructionGoodMockData } from "./mocks/robot.instruction.mock.data";
import { instructionParser } from "../robot.instruction.parser";

describe("Validate Robot Instructions", () => {
  describe("parses valid input", () => {
    it("parses grid size", () => {
      expect(instructionParser(robotInstructionGoodMockData).grid).toEqual({
        width: 5,
        height: 3,
      });
    });

    it("parses first robot start position", () => {
      expect(
        instructionParser(robotInstructionGoodMockData).routes[0].start,
      ).toEqual({
        x: 1,
        y: 1,
        direction: Directions.E,
      });
    });

    it("parses first robot instructions", () => {
      expect(
        instructionParser(robotInstructionGoodMockData).routes[0].instructions,
      ).toEqual([Instructions.F, Instructions.L, Instructions.R]);
    });

    it("parses all three robots", () => {
      expect(
        instructionParser(robotInstructionGoodMockData).routes,
      ).toHaveLength(3);
    });
  });

  describe("validation", () => {
    it("throws if grid width exceeds max", () => {
      expect(() =>
        instructionParser(`${MaxGridValue + 1} 3\n1 1 E\nF`),
      ).toThrow();
    });

    it("throws if grid height exceeds max", () => {
      expect(() =>
        instructionParser(`5 ${MaxGridValue + 1}\n1 1 E\nF`),
      ).toThrow();
    });

    it("throws if instructions exceed max length", () => {
      const instructions = "F".repeat(MaxInstructionLength + 1);
      expect(() => instructionParser(`5 3\n1 1 E\n${instructions}`)).toThrow();
    });

    it("accepts instructions at exactly max length", () => {
      const instructions = "F".repeat(MaxInstructionLength);
      expect(() =>
        instructionParser(`5 3\n1 1 E\n${instructions}`),
      ).not.toThrow();
    });
  });
});
