export type Direction = "N" | "E" | "S" | "W";
export type Instruction = "F" | "L" | "R";

export interface Grid {
  width: number;
  height: number;
}

export interface StartPosition {
  x: number;
  y: number;
  direction: Direction;
}

export interface Route {
  start: StartPosition;
  instructions: Instruction[];
}

export interface RouteInput {
  grid: Grid;
  routes: Route[];
}

export type RobotState =
  | {
      x: number;
      y: number;
      direction: Direction;
      offGrid: boolean;
    }
  | undefined;
