import * as React from 'react';
import { Outlet } from "react-router-dom";
import AccountMenu from './AccountMenu';
import { useNavigate } from "react-router-dom";
const Layout = () => {
    const [openForm, setOpenForm] = React.useState(false);
    let navigate = useNavigate(); 
	const handleOnClick = (page) => {
		console.log('open2');
        let path = `todo`; 
        navigate(path);
		// if(!openForm) { 
		// 	setOpenForm(true)
		// } else {
		// 	setOpenForm(false)
		// }
	};
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>          
        </ul>
      </nav> */}
      <AccountMenu  onClick={handleOnClick} />
      <Outlet />
    </>
  )
};

export default Layout;