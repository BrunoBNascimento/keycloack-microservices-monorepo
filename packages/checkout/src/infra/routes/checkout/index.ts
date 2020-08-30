import { Application } from "express";

const checkoutRoutes = () => {
  return {
    init(app: Application) {
      app.get("/", (req, res) => res.send("it works"));
    },
  };
};

export default checkoutRoutes;
