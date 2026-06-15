import { RouteInput, Direction, Instruction } from "./robot.types";
import { MaxGridValue, MaxInstructionLength } from "./robot.constants";

export const instructionParser = (input: string): RouteInput => {
  const lines = input.split("\n").filter((line) => line.trim() !== "");

  const [width, height] = lines[0].split(" ").map(Number);

  if (width > MaxGridValue || height > MaxGridValue) {
    throw new Error(`Grid size cannot exceed ${MaxGridValue}`);
  }

  const routes = [];
  for (let i = 1; i < lines.length; i += 2) {
    const [x, y, direction] = lines[i].split(" ");
    const instructions = lines[i + 1].split("") as Instruction[];

    if (instructions.length > MaxInstructionLength) {
      throw new Error(
        `Instruction length cannot exceed ${MaxInstructionLength}`,
      );
    }

    routes.push({
      start: { x: Number(x), y: Number(y), direction: direction as Direction },
      instructions,
    });
  }

  return { grid: { width, height }, routes };
};
