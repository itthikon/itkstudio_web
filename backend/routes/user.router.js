import userController from '../controllers/user.controller.js'

const userRouter = (router) => {
  router.get("/", userController.helloWorld)
  router.get("/itthikon", userController.itthikon)

};

export default userRouter;