import React, { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import { 
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Outlet,
	Route,
	Link
} from 'react-router-dom';
import Home from './Home';
import Grinpal from './Grinpal';
// import Dashboard from './Dashboard';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}/>
				{/* <Route element={<Dashboard />}/> */}
				<Route path="/grinpal" element={<Grinpal />}/>
			
			</Route>
		)
	);
	
	return (
		<div>
			<RouterProvider router={router}/>
		</div>
	)
}

const Root = () => {
	return (
		<>
			<div>
				<Link to="/">Home</Link>
				{/* <Link to="/dashboard">Dashboard</Link> */}
				<Link to="/grinpal">grinpal</Link>
			</div>
			<div>
				<Outlet />
			</div>
		</>
	)
}


export default App