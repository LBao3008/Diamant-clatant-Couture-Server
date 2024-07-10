require("dotenv").config();

const connectDB = require("./config/db");

const Brand = require("./model/Brand");
const brandData = require("./utils/brands");

const Category = require("./model/Category");
const categoryData = require("./utils/categories");

const Products = require("./model/Products");
const productsData = require("./utils/products");

const Material = require("./model/Material");
const materialData = require("./utils/materials");

const Component = require("./model/Component");
const componentData = require("./utils/components");

const DiamondShell = require("./model/DiamondShell");
const diamondShellData = require("./utils/diamond-shells");

const MainDiamond = require("./model/MainDiamond");
const mainDiamondData = require("./utils/main-diamonds");

const SideStone = require("./model/SideStone");
const sideStoneData = require("./utils/side-stones");

const Coupon = require("./model/Coupon");
const couponData = require("./utils/coupons");

const Order = require("./model/Order");
const orderData = require("./utils/orders");

const User = require("./model/User");
const userData = require("./utils/users");

const Reviews = require("./model/Review");
const reviewsData = require("./utils/reviews");

const Admin = require("./model/Admin");
const adminData = require("./utils/admin");

connectDB();
const importData = async () => {
  try {
    await Brand.deleteMany();
    await Brand.insertMany(brandData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    await Material.deleteMany();
    await Material.insertMany(materialData);

    await Component.deleteMany();
    await Component.insertMany(componentData);

    await DiamondShell.deleteMany();
    await DiamondShell.insertMany(diamondShellData);

    await MainDiamond.deleteMany();
    await MainDiamond.insertMany(mainDiamondData);

    await SideStone.deleteMany();
    await SideStone.insertMany(sideStoneData);

    await Products.deleteMany();
    await Products.insertMany(productsData);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);

    await Order.deleteMany();
    await Order.insertMany(orderData);

    await User.deleteMany();
    await User.insertMany(userData);

    await Reviews.deleteMany();
    await Reviews.insertMany(reviewsData);

    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
