import { createRouter } from "../utils/RouterCreator";

const router = createRouter();

router.prefix("/user");

router.get("/hello", async (ctx) => {
  ctx.success("hello anchor", "ok");

  ctx.trace("trace test");
  ctx.debug("debug test");
  ctx.info("info test");
  ctx.warn("warn test");
  ctx.error("error test");
  ctx.fatal("fatal test");
});

export default router;
