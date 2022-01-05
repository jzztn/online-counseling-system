import Card from "../components/Card"

const Facilitators = () => {
	return (
		<div className="grid justify-center gap-20 my-32 px-10">
			<h1 className="text-xl lg:text-2xl tracking-wide">Guidance Facilitators</h1>

			<div className="grid justify-center items-center gap-20 lg:grid-cols-2 xl:grid-cols-3">
				<Card
					profile={"/camalig.png"}
					name="Sir. Jonel Camalig"
					degree="Bachelor of Science in Psychology"
					degree2="Bachelor of Science in Information Technology"
					email="jonel.camalig@cvsu.pcu.edu.ph"
				/>

				<Card
					profile={"/bay.png"}
					name="Ms. Keithlyn Bay"
					degree="Bachelor of Science in Psychology"
					email="keithlynbay@cvsu.pcu.edu.ph"
				/>

				<Card
					profile={"/labiang.png"}
					name="Sir. John Reil Labiang"
					degree="Bachelor of Science in Psychology"
					email="john.labiang@cvsu.pcu.edu.ph"
				/>

				<Card
					profile={"/masana.png"}
					name="Dr. Louziela P. Masana"
					degree="Bachelor of Science in Psychology"
					degree2="Bachelor of Science in Information Technology"
					email="louzielamasana@cvsu.pcu.edu.ph"
				/>

				<Card
					profile={"/hayag.png"}
					name="Ms. Shain Custodio Hayag"
					degree="Bachelor of Science in hospitality Management"
					degree2="Diploma in Hotel and Restaurant Management"
					email="shainechayag@cvsu.pcu.edu.ph"
				/>

				<Card
					profile={"/siarez.png"}
					name="Ms. Efrelhet Siarez"
					degree="Bachelor of Science in Psychology"
					email="elfrelhetsiarez@cvsu.pcu.edu.ph"
				/>
			</div>
		</div>
	)
}

export default Facilitators
