# Red Badger Mars Rover Tech Test

# Tech Choices

Not being allowed to use AI and keeping it simple, I thought to utilise Node.js as low overhead technology that runs on anything with a single package: Vitest of-which, essentially I can remember how to use. Vitest is selected as opposed to native Node.js test for TypeScript support out of the box. I will also add basic eslint to ensure code quality.

My thinking is that the resulting robot positions can essentially be output as test results on the command line without the need for UI.

I will be using this Vitest reference to assist development:
https://github.com/sapegin/vitest-cheat-sheet#basic-test-structure