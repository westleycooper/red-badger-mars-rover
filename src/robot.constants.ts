import { Direction, Instruction, StatusType } from "./robot.types";

export const MaxGridValue = 50;
export const MaxInstructionLength = 99;

export const Directions = {
  N: "N" as Direction,
  E: "E" as Direction,
  S: "S" as Direction,
  W: "W" as Direction,
};

export const Instructions = {
  F: "F" as Instruction,
  L: "L" as Instruction,
  R: "R" as Instruction,
};

export const Status = {
  OK: "OK" as StatusType,
  LOST: "LOST" as StatusType,
};
