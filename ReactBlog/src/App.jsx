import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const LazyBlog = React.lazy(() => import("./components/Blog"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {["/", "home"].map((path) => (
          <Route path={path} exact element={<Home />} key={path} />
        ))}

        <Route
          path="/blog"
          exact
          element={
            <React.Suspense>
              <LazyBlog />
            </React.Suspense>
          }
        />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
