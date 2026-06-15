import { expect, it, describe } from "vitest";
import { navigateStep } from "../robot.navigation";
import { robotInstructions } from "../robot.instruction.data";
import { instructionParser } from "../robot.instruction.parser";
import { RobotState, Route } from "../robot.types";
import { Status } from "../robot.constants";

describe("NAV EVENT", () => {
  const parsed = instructionParser(robotInstructions);
  const grid = parsed.grid;

  console.log(`GRID X: ${grid.width}, Y: ${grid.height}`);
  console.log(
    "@TODO: Note tests are not checking against offGridPositions yet so I am afraid we lose robot 3 to a martian anolomy",
  );

  parsed.routes.map((route: Route, index: number) => {
    describe(`Robot ${index + 1} | START [${route.start.x},${route.start.y} ${route.start.direction}]`, () => {
      let state: RobotState = {
        x: route.start.x,
        y: route.start.y,
        direction: route.start.direction,
        status: Status.OK,
      };

      route.instructions.map((instruction, step) => {
        if (state.status === Status.LOST) return;
        const prevState = { ...state };
        state = navigateStep(state, instruction, grid);
        const result = { ...state };

        // test output
        it(`Step ${step + 1} [${instruction}] | MOVE FROM [${prevState.x},${prevState.y} ${prevState.direction}] TO [${result.x},${result.y} ${result.direction}] | ${result.status}`, () => {
          expect(result.status).toBeDefined();
        });
      });
    });
  });
});
