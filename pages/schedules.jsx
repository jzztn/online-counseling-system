import Sched from "../components/Sched"

const Schedule = () => {
	return (
		<div className="grid justify-center gap-20 my-32 px-10">
			<h1 className="text-xl lg:text-2xl tracking-wider">Consultation Schedules</h1>

			<div className="grid gap-10">
				<Sched
					profile={"/bay.png"}
					name="Ms. Keithlyn Bay"
					day="Monday"
					time="5:00-7:00 PM"
				/>
				<Sched
					profile={"/labiang.png"}
					name="Sir. John Reil Labiang"
					day="Monday"
					time="6:00-10:00 PM"
				/>
				<Sched
					profile={"/siarez.png"}
					name="Ms. Efrelhet Siarez"
					day="Tuesday"
					time="10:00-1:30 PM"
				/>
				<Sched
					profile={"/camalig.png"}
					name="Sir. Jonel Camalig"
					day="Tuesday"
					time="5:00-7:00 PM"
				/>
				<Sched
					profile={"/masana.png"}
					name="Dr. Louziela P. Masana"
					day="Wednesday"
					day2="Thursday"
					time="4:00-6:00 PM"
					time2="1:00-4:00 PM"
				/>
				<Sched
					profile={"/hayag.png"}
					name="Ms. Shain Custodio Hayag"
					day="Tuesday"
					day2="Friday"
					time="3:00-6:00 PM"
					time2="7:00-6:00 PM"
				/>
			</div>
		</div>
	)
}

export default Schedule
