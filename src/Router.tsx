import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function RootLayout() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-4">
        TanStack Form and Router Example
      </h1>

      <hr />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

import { Outlet } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: RootLayout,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/register",
  component: Register,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/login",
  component: Login,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  registerRoute,
  loginRoute,
]);

export const router = createRouter({
  routeTree,
});