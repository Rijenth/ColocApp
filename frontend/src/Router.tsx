import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
// UI
import { MantineProvider } from "@mantine/core";
import { Loader } from "@mantine/core";

// Func
import { useEffect } from "react";
import { isLoggedIn } from "./func/user.func";

// Routes
import NotFound from "./routes/NotFound";
import Auth from "./routes/Auth";
import Account from "./routes/Account";
import Dashboard from "./routes/Dashboard";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function AppRouter() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <ModalsProvider>
          <Provider store={store}>
            <Router>
              <Routes>
                <Route path="/" element={<AutoRedirect />} />
                <Route path="/auth/:authtype" element={<Auth />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account/:action" element={<Account />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </Provider>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

const AutoRedirect = () => {
  useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/auth/login";
    }
  }, []);
  return (
    <div>
      <Loader variant="bars" />
    </div>
  );
};
