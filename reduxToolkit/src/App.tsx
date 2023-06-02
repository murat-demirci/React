import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound.tsx";
import Basket from "./components/Basket.tsx";
import { Home } from "./components/Home.tsx";
import { useAppDispatch } from "./store/store.tsx";
import { setTotal } from "./store/features/cardSlice.tsx";

function App() {
  const dispatch = useAppDispatch();
  const getFirstTotal = ()=>{
    dispatch(setTotal())
  }
  
  getFirstTotal();
  return (
    <>
      <Navbar />
      <Routes>
        {["/", "home"].map((path,index) =>(
          <Route key={index} path={path} element={<Home />} />
        ))}
        <Route path="basket" element={<Basket />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
