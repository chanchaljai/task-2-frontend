import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Verifyotp from "./pages/Verifyotp";
import Users from "./pages/Users"; // aapka user page
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

// Root layout - sirf Outlet, koi UI nahi
function RootLayout() {
  return <Outlet />;
}

// Header wala layout (auth pages ke liye)
function MainLayout() {
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

// User layout - bina h1 ke
function UserLayout() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

// Main layout route (virtual parent)
const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main",
  component: MainLayout,
});

// User layout route (virtual parent)
const userLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "user",
  component: UserLayout,
});

// Main layout ke andar ke routes
const homeRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: Home,
});

const registerRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/auth/register",
  component: Register,
});

const loginRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/auth/login",
  component: Login,
});

const verifyotpRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/verify-otp",
  component: Verifyotp,
});

// User layout ke andar ke routes (bina h1 ke)
const userRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: "/users",
  component: Users
});
const addRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: "/users/add",
  component: AddUser
})
const editRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: "/users/edit/$id",
  component: EditUser
})


const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([
    homeRoute,
    registerRoute,
    loginRoute,
    verifyotpRoute,
  ]),
  userLayoutRoute.addChildren([
    userRoute,
    addRoute,
    editRoute,
    // aur bhi user routes yahan add karo
  ]),
]);

export const router = createRouter({ routeTree });