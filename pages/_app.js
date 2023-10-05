import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import "@/styles/globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${montserrat.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
