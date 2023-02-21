import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/tugas-routing/Home';
import About from './components/tugas-routing/About';
import Contact from './components/tugas-routing/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="Home" element={<Home />} />
					<Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
