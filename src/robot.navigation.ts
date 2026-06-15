import { RobotState, Direction, Instruction, Grid } from "./robot.types";
import { Directions, Instructions, Status } from "./robot.constants";
// @TODO: not yet implemented
// import { offGridPositions } from './robot.state'

export const navigate = (
  currentState: RobotState,
  instructions: Instruction[],
  grid: Grid,
): RobotState => {
  let { x, y, direction } = currentState;
  let status = Status.OK;

  for (const instruction of instructions) {
    if (status === Status.LOST) break;

    switch (instruction) {
      case Instructions.F:
        switch (direction) {
          case Directions.N:
            y += 1;
            break;
          case Directions.E:
            x += 1;
            break;
          case Directions.S:
            y -= 1;
            break;
          case Directions.W:
            x -= 1;
            break;
        }
        if (x < 0 || y < 0 || x > grid.width || y > grid.height) {
          status = Status.LOST;
        }
        break;
      case Instructions.L:
        direction = rotateLeft(direction);
        break;
      case Instructions.R:
        direction = rotateRight(direction);
        break;
    }
  }

  return { x, y, direction, status };
};

const rotateLeft = (direction: Direction): Direction => {
  switch (direction) {
    case Directions.N:
      return Directions.W;
    case Directions.E:
      return Directions.N;
    case Directions.S:
      return Directions.E;
    case Directions.W:
      return Directions.S;
    default:
      return direction;
  }
};

const rotateRight = (direction: Direction): Direction => {
  switch (direction) {
    case Directions.N:
      return Directions.E;
    case Directions.E:
      return Directions.S;
    case Directions.S:
      return Directions.W;
    case Directions.W:
      return Directions.N;
    default:
      return direction;
  }
};

export const navigateStep = (
  currentState: RobotState,
  instruction: Instruction,
  grid: Grid,
): RobotState => navigate(currentState, [instruction], grid);
// @TODO: implement offGridPositions in navigationStep
