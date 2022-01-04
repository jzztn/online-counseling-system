import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"

const AppLayout = ({ children }) => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr,auto]">
			<nav>
				<NavBar />
			</nav>

			<main>
				{children}
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default AppLayout
