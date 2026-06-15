import { Directions, Status } from "./robot.constants";
import { RobotState } from "./robot.types";

export const offGridPositions = new Set<string>();
export const initialState: RobotState = {
  x: 0,
  y: 0,
  direction: Directions.N,
  status: Status.OK,
};
