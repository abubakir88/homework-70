import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import { Suspense } from "react";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
