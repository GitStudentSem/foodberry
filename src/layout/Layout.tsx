import {FC} from 'react';
import Header from "./Header/Header";
import {PropsWithChildren} from 'react';
import Footer from "./Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
	return (
		<>
			<Header orders={[]}/>
			{children}
			<Footer/>
		</>
	);
}

export default Layout;