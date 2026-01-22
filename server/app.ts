import express from "express";
import cors from "cors";
import { errorHandler } from "../server/src/middlewares/error";

// Routers
import multerRoute from "../server/src/routes/multer.routes";
import auth_routes from "../server/src/routes/auth.routes";
import user_routes from "../server/src/routes/user.routes";
import role_routes from "../server/src/routes/role.routes";
import permission_module_routes from "../server/src/routes/permission-module.routes";
import blog_routes from "../server/src/routes/blog.routes";
import blog_category_routes from "../server/src/routes/blog-category.routes";
import case_study_routes from "../server/src/routes/case-study.routes";
import case_study_category_routes from "../server/src/routes/case-study-category.routes";
// import serviceRoute from "../server/src/routes/service.routes";
// import productRoute from "../server/src/routes/product.routes";
// import productFormRoute from "../server/src/routes/form.routes";
// import productCategoryRoute from "../server/src/routes/product-category.routes";
// import cartRoute from "../server/src/routes/cart.routes";
// import orderRoute from "../server/src/routes/order.routes";
// import ticketRoutes from "../server/src/routes/ticket.routes";
// import invoiceRoutes from "../server/src/routes/invoices.routes";
// import pageSEORoute from "../server/src/routes/static-pages-seo.routes";
import mailRoute from "../server/src/routes/mail.routes";
const app = express();

app.use(cors());
app.use(express.json());
const basePath = "/api/v2";

app.use(`${basePath}/multer`, multerRoute);
app.use(`${basePath}/auth`, auth_routes);
app.use(`${basePath}/user`, user_routes);
app.use(`${basePath}/role`, role_routes);
app.use(`${basePath}/permission-module`, permission_module_routes);
app.use(`${basePath}/blog`, blog_routes);
app.use(`${basePath}/blog-category`, blog_category_routes);
app.use(`${basePath}/case-study`, case_study_routes);
app.use(`${basePath}/case-study/category`, case_study_category_routes);
// app.use(`${basePath}/service`, serviceRoute);
// app.use(`${basePath}/product`, productRoute);
// app.use(`${basePath}/product/form`, productFormRoute);
// app.use(`${basePath}/product/category`, productCategoryRoute);
// app.use(`${basePath}/cart`, cartRoute);
// app.use(`${basePath}/orders`, orderRoute);
// app.use(`${basePath}/coupons`, "couponRoute");
// app.use(`${basePath}/tickets`, ticketRoutes);
// app.use(`${basePath}/invoices`, invoiceRoutes);
// app.use(`${basePath}/page-seo`, pageSEORoute);
app.use(`${basePath}/mailto`, mailRoute);

app.use(errorHandler);

export default app;
