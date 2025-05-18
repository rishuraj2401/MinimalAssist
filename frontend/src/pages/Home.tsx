import mainBot from "/page-photos/homepage-bot.png";
import ui1 from "/page-photos/UI-1.png";

import { NavLink } from "react-router-dom";

import Section from "../components/home/Sections";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.parent}>
			<Section
				src={mainBot}
				alt='main-bot'
				animateImg={true}
				imgStyle={styles.ui1}
				reverse={false}>
				<h2>| Minimal AI Support PLATFORM</h2>
				<h1>
					YOUR OWN PERSONAL <span className={styles.highlight}>Assistance</span>
				</h1>
				<p>
					Engage in secure, confidential, and intuitive conversations through our AI-powered chat interface, 
					designed to provide helpful assistance across a wide variety of topics with a natural and seamless experience.
				</p>
				<NavLink to='/login' className={styles.btn}>
					Get Started For Free
				</NavLink>
			</Section>
		</div>
	);
};

export default Home;
