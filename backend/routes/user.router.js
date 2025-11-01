const userRouter = (router) => {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router.get("/itthikon", (req, res) => {
    res.send("Itthikon!");
  });
};

export default userRouter;