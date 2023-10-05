import fleur1 from "@/public/fleur1.jpg";
import fleur2 from "@/public/fleur2.jpg";
import fleur3 from "@/public/fleur3.jpg";
import Image from "next/image";

function Cards({ nb, setNb }) {
	return (
		<div className="flex self-center justify-evenly w-full">
			<div className="flex flex-col">
				<Image src={fleur1} width={250} height={250} alt="Fleur" />
				<div className="flex justify-between items-center">
					<div className="text-2xl ">35$</div>
					<button
						className=" self-end px-3 bg-sky-300"
						onClick={() => setNb(nb + 1)}
					>
						ADD
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
