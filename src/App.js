import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'
import Layout from './Layout';
import Home from './routes/Home';
import Todo from './routes/Todo';
import Contact from './routes/Contact';
import Profile from './routes/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
  return (
	<BrowserRouter>
	<Routes>
	  <Route path="/" element={<Layout />}>
		<Route index element={<Home />} />
		<Route path="todo" element={<Todo />} />		
		<Route path="contact" element={<Contact />} />		
		<Route path="profile" element={<Profile />} />		
	  </Route>
	</Routes>
  </BrowserRouter>    
  );
}
