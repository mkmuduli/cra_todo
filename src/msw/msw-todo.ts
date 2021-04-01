import { rest } from "msw";
export default [
  rest.get('http://localhost:3001/task', (req, res, ctx) => {
    console.log("mswjs /task");
    return res(
      ctx.json([{ name: "hhh", isCompleted: true }])
    )
  }),
]