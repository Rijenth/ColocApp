import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// UI
import { MantineProvider } from "@mantine/core";
import { Loader } from "@mantine/core";

// Func
import { useEffect } from "react";
import { isLoggedIn } from "./func/user.func";

// Routes
import Auth from "./routes/Auth";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function AppRouter() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<AutoRedirect />} />
            {/* Dynamic auth/:authtype */}
            <Route path="/auth/:authtype" element={<Auth />} />
          </Routes>
        </Router>
      </Provider>
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
