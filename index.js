require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const { secret } = require("./config/secret");
const PORT = secret.port || 7000;
const morgan = require("morgan");
// error handler
const globalErrorHandler = require("./middleware/global-error-handler");
// routes
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const brandRoutes = require("./routes/brand.routes");
const userOrderRoutes = require("./routes/user.order.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const couponRoutes = require("./routes/coupon.routes");
const reviewRoutes = require("./routes/review.routes");
const adminRoutes = require("./routes/admin.routes");
const cloudinaryRoutes = require("./routes/cloudinary.routes");
const componentRoutes = require("./routes/component.routes");
const materialRoutes = require("./routes/material.routes");
const diamondShellRoutes = require("./routes/diamondShell.routes");
const mainDiamondRoutes = require("./routes/mainDiamond.routes");
const sideStoneRoutes = require("./routes/sideStone.routes");

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

// connect database
connectDB();

app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/user-order", userOrderRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/cloudinary", cloudinaryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/component", componentRoutes);
app.use("/api/material", materialRoutes);
app.use("/api/diamond-shell", diamondShellRoutes);
app.use("/api/main-diamond", mainDiamondRoutes);
app.use("/api/side-stone", sideStoneRoutes);

// root route
app.get("/", (req, res) => res.send("Apps worked successfully"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// global error handler
app.use(globalErrorHandler);
//* handle not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

module.exports = app;
