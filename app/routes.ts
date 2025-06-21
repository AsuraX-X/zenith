import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  layout("./auth/Layout.tsx", [
    index("./auth/Login.tsx"),
    route("login", "./auth/Login.tsx"),
    route("register", "./auth/Register.tsx"),
  ]),
] satisfies RouteConfig;
