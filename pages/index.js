import Cards from "@/components/Cards";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
	const [nb, setNb] = useState(0);
	return (
		<Layout nb={nb}>
			<Cards nb={nb} setNb={setNb} />
		</Layout>
	);
}
