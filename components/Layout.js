import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children, nb }) => {
	return (
		<>
			<Head>
				<title>Restaurant</title>
				<meta name="description" content="Restaurant Paris" />
			</Head>
			<div className="min-h-screen flex flex-col">
				<Header nb={nb} />
				<main className="flex justify-center flex-grow">
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
