import AppointmentCard from "../../components/AppointmentCard"
import SideBar from "../../components/navbar/SideBar"

const Appointment = () => {
	return (
		<div className="h-full grid grid-cols-[auto,1fr]">
			<SideBar />

			<div className="grid justify-center gap-20 py-16 px-10">
				<div className="grid justify-center items-center gap-20 lg:grid-cols-2 xl:grid-cols-3">
					<AppointmentCard
						profile={"/camalig.png"}
						name="Sir. Jonel Camalig"
						degree="Bachelor of Science in Psychology"
						degree2="Bachelor of Science in Information Technology"
						sched="Tuesday 5:00 PM - 7:00 PM"
					/>

					<AppointmentCard
						profile={"/bay.png"}
						name="Ms. Keithlyn Bay"
						degree="Bachelor of Science in Psychology"
						sched="Monday 5:00 PM - 7:00 PM"
					/>

					<AppointmentCard
						profile={"/labiang.png"}
						name="Sir. John Reil Labiang"
						degree="Bachelor of Science in Psychology"
						sched="Tuesday 6:00 PM - 10:00 PM"
					/>

					<AppointmentCard
						profile={"/masana.png"}
						name="Dr. Louziela P. Masana"
						degree="Bachelor of Science in Psychology"
						degree2="Bachelor of Science in Information Technology"
						sched="Wednesday 4:00 PM - 6:00 PM"
						sched2="Thrusday 1:00 PM - 4:00 PM"
					/>

					<AppointmentCard
						profile={"/hayag.png"}
						name="Ms. Shain Custodio Hayag"
						degree="Bachelor of Science in hospitality Management"
						degree2="Diploma in Hotel and Restaurant Management"
						sched="Thursday 3:00 PM - 6:00 PM"
						sched2="Friday 7:00 AM - 6:00 PM"

					/>

					<AppointmentCard
						profile={"/siarez.png"}
						name="Ms. Efrelhet Siarez"
						degree="Bachelor of Science in Psychology"
						sched="Tuesday 10:30 AM - 1:30 PM"
					/>
				</div>
			</div>
		</div>
	)
}

export default Appointment
