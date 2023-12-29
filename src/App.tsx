import React, { ReactElement } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProductDetailCard from "./pages/ProductDetailCard/ProductDetailCard";
import AddProductCard from "./components/ProductCard/AddProductCard";

function App() : ReactElement {
	return (
		<>
			
			<BrowserRouter>
			  <Navbar />
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/product-detail/:id"  element={<ProductDetailCard/>}></Route>
					<Route path="/products/add"  element={<AddProductCard/>}></Route>
					<Route path="*" element={<p>Not Found</p>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
