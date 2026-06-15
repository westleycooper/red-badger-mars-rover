import { Directions } from "./robot.constants";
import { RobotState } from "./robot.types";

export const offGridPositions = new Set<string>();
export const currentState: RobotState = {
  x: 0,
  y: 0,
  direction: Directions.N,
  offGrid: false,
};
