import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// UI
import { MantineProvider } from "@mantine/core";
import { Loader } from "@mantine/core";

// Func
import { useEffect } from "react";
import { isLoggedIn } from "./func/user.func";

// Routes
import Auth from "./routes/Auth";
export default function AppRouter() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<AutoRedirect />} />
          {/* Dynamic auth/:authtype */}
          <Route path="/auth/:authtype" element={<Auth />} />
        </Routes>
      </Router>
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
