# Reasoning

### Tech Choices

Not being allowed to use AI and keeping it simple, I thought to utilise Node.js as low overhead technology that runs on anything with a test package: Vitest of-which, essentially I can remember how to use. Vitest is selected as opposed to native Node.js test for TypeScript support out of the box. I will also add basic eslint to ensure code quality.

My thinking is that the resulting robot positions can essentially be output as test results on the command line without the need for UI.

I will be using this Vitest reference to assist development:
https://github.com/sapegin/vitest-cheat-sheet#basic-test-structure

### Key takeaways from challenge document

- Extensibility for additional command types.
- "Scent"/previous robot drop off points must be remembered and ignored in future instructions.

Input data format (instruction blocks)
- Note: line breaks seperate instructions
- Line 1 (single instance): grid 
- Line 2: robot grid ref and direction
- Line 3: robot movement instructions
- Line 4: Whitespace seperator
 
Data validation: 
- Any coordinate max value 50 
- Instruction strings < 100 characters length (max 99)

Outputs:
- Output: for each move display instruction, final position (if off-grid "LOST")

Thoughts:
- Name robots e.g. Robot 1 with clear seperation in log
- Notify and ignore invalid instruction blocks

