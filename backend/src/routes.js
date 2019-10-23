const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionControlles");
const SpotControllers = require("./controllers/SpotControllers");
const DashboardControllers = require("./controllers/DashboardControllers");
const BookingControllers = require("./controllers/BookingControllers");
const ApprovalControllers = require("./controllers/ApprovalControllers");
const RejectionControllers = require("./controllers/RejectionControllers");

const routes = express.Router();
const upload = multer(uploadConfig);

//req.query = Acessar query params
//req.param = Acessar parametro pela rota (para edição e delete)
//req.body = Acessar corpo da requisição (para criação, edicao)

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotControllers.store);
routes.get("/spots", SpotControllers.index);
routes.get("/dashboard", DashboardControllers.show);

routes.post("/spots/:spot_id/bookings", BookingControllers.store);

routes.post("/bookings/:booking_id/approvals", ApprovalControllers.store);
routes.post("/bookings/:booking_id/rejections", RejectionControllers.store);

// routes.put("/users/:id", (req, res) => {
//   return res.json({ message: req.param.id });
// });

// routes.post("/users", (req, res) => {
//   return res.json({ message: req.body });
// });

module.exports = routes;
