import React, {useState} from 'react';
import './App.css';
import heroImgLight from './img/heroImageLight.jpg';
import heroImgMobileLight from './img/heroImageMobileLight.jpg';
import heroImgDark from './img/heroImageDark.jpg';
import heroImgMobileDark from './img/heroImageMobileDark.jpg';
import apple from './img/apple.png';
import solidWorks from './img/solidWorks.png';
import firstCompetition from './img/firstCompetition.jpeg';
import students from './img/students.jpg';
import mentors from './img/mentors.jpeg';
import instagramBlue from './img/instagramBlue.png';
import instagram  from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';
import logo from './img/logo.png';
import google from './img/google.png'
import johnsonAndJohnson from './img/johnsonAndJohnson.png'

import Slide from './components/util/Slide';
import { ThemeProvider, ThemeContext } from './components/util/ThemeContext';



const NavBar = () => {
  const [clicked, setClicked] = useState(null);
  const toggleClicked = () => {
    if (clicked === "open") {
      setClicked(null)
    }
    if (clicked === null) {
      setClicked("open")
    }
   };
  return (
    <header className="flex items-center border-b-4 pt-4 pb-4 pl-4 lg:p-6 border-gray-400 fixed top-0 bg-gray-700 dark:bg-black w-full z-50">
      <a className="" href="https://chargingchampions.org" id="logo">
        <img className="h-14 lg:h-20 rounded-md m-auto lg:pl-10" src={logo} alt="Charging Champion's Logo"/>
      </a>
      <h1 className="text-blue-500 text-3xl lg:text-5xl text-center m-auto lg:pl-5" id="title">
        Cha
        <a className="" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
          r
        </a>
        ging Champions
      </h1>
      <div className={"bg-gray-700 dark:bg-black fixed top-0 left-0 h-screen w-screen flex-col lg:flex-row lg:static flex justify-around items-center lg:w-3/5 lg:h-auto m-auto text-xl mask " + clicked}>
        <a className="text-white hover:text-blue-500" href="#About" id="aboutHeader" onClick={toggleClicked}>About Us</a>
        <a className="text-white hover:text-blue-500" href="#First" id="firstHeader" onClick={toggleClicked}>First</a>
        <a className="text-white hover:text-blue-500" href="#Students" id="studentsHeader" onClick={toggleClicked}>Students</a>
        <a className="text-white hover:text-blue-500" href="#Mentors" id="mentorsHeader" onClick={toggleClicked}>Mentors</a>
        <a className="text-white hover:text-blue-500" href="#Sponsors" id="sponsorsHeader" onClick={toggleClicked}>Sponsors</a>
        <a className="text-white hover:text-blue-500" href="#Contacts" id="contactsHeader" onClick={toggleClicked}>Contacts</a>
        <DarkMode />
        <a className="text-Blue-400 text-2xl" href="https://www.instagram.com/chargingchampions6560/" target="_blank" rel="noopener noreferrer">
          <img className="h-10" src={instagramBlue} alt="Instagram Icon Blue" />
        </a>
      </div>
      <div className="cursor-pointer pr-2 lg:hidden" onClick={toggleClicked}>
        <div className="w-7 h-1 bg-white m-1 relative"></div>
        <div className="w-7 h-1 bg-white m-1 relative"></div>
        <div className="w-7 h-1 bg-white m-1 relative"></div>
      </div>
    </header>
  )
}

const DarkMode = () => {

  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
      <div className="transition duration-500 ease-in-out rounded-full p-2">
        {theme === 'dark' ? (
        <svg
        id="theme-toggle-dark-icon"
        class="w-5 h-5 hover:fill-blue-500"
        fill="white"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
        ) : (
          <svg
          id="theme-toggle-light-icon"
          class="w-5 h-5 hover:fill-blue-500"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        )}
      </div>
  );
}

const Bio = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="About"></div>
      <div className="p-4 lg:p-16 flex flex-col-reverse lg:flex-row justify-around border-b-4 border-gray-400">
        <div className="lg:w-2/5">
          <Slide direction="left">
            <h3 className="text-blue-500 text-xl lg:text-3xl text-left m-2 lg:m-10">
              Charging Champions Team is the best FRC Robotics Team!
              <h5 className="text-base lg:text-2xl text-black dark:text-white">We are FTC team #8660 and FRC team #6560</h5>
            </h3>
          </Slide>
        </div>
        <img className="lg:w-2/5 h-auto rounded-3xl" src="https://i.imgur.com/ArqgbAB.jpeg" alt="Chargine Champion's Team"/>
      </div>
    </div>
  )
}

const First = () => {
  return (
    <div className="relative bg-gray-300 dark:bg-black">
      <div className="absolute floatyThingy" id="First"></div>
      <div className="p-4 lg:p-16 flex flex-col lg:flex-row justify-around border-b-4 border-gray-400">
        <img className="lg:w-2/5 h-auto rounded-3xl" src={firstCompetition} alt="Solid Works logo." />
        <div className="lg:w-2/5">
          <Slide direction="right">
            <h3 className="text-blue-500 text-xl lg:text-3xl text-left m-2 lg:m-10">
              What is First?
              <h5 className="text-base lg:text-2xl text-black dark:text-white">FIRST, which means “For Inspiration and Recognition of Science and Technology,” has high-schooler in teams design, program, and build a robot starting with a standard kit of parts and common set of rules to play in a themed head-to-head challenge. Teams also build a brand, develop community partnerships for support, and work to promote STEM in their local community.</h5>
            </h3>
          </Slide>
        </div>
      </div>
    </div>
  )
}

const Students = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="Students"></div>
      <div className="p-4 lg:p-16 flex flex-col-reverse lg:flex-row justify-around border-b-4 border-gray-400">
        <div className="lg:w-2/5">
          <Slide direction="left">
            <h3 className="text-blue-500 text-xl lg:text-3xl text-left m-2 lg:m-10">
              Who are the students?
              <h5 className="text-base lg:text-2xl text-black dark:text-white">High school students from all around Irvine, CA (especially University High School) participate on FRC team 6560 and each year create a globally competitive robot with the support of industry and FIRST professional mentors.</h5>
            </h3>
          </Slide>
        </div>
        <img className="lg:w-2/5 h-auto rounded-3xl" src={students} alt="Solid Works logo." />
      </div>
    </div>
  )
}

const Mentors = () => {
  return (
    <div className="relative bg-gray-300 dark:bg-black">
      <div className="absolute floatyThingy" id="Mentors"></div>
      <div className="p-4 lg:p-16 flex flex-col lg:flex-row justify-around border-b-4 border-gray-400">
        <img className="lg:w-2/5 h-auto rounded-3xl" src={mentors} alt="Solid Works logo." />
        <div className="lg:w-2/5">
          <Slide direction="right">
            <h3 className="text-blue-500 text-xl lg:text-3xl text-left m-2 lg:m-10">
              Who are the mentors?
              <h5 className="text-base lg:text-2xl text-black dark:text-white">Industry professionals and FIRST alumni inspire students and pass their knowledge on to the team to foster a team that grows in competitiveness.</h5>
            </h3>
          </Slide>
        </div>
      </div>
    </div>
  )
}

const Sponsors = () => {
  return (
    <div className="relative bg-gray-700 dark:bg-black">
      <div className="absolute floatyThingy" id="Sponsors"></div>
      <div className="p-4 lg:p-16 border-b-4 border-gray-400">
        <h3 className="text-center text-blue-500 text-4xl lg:text-5xl pb-4 lg:pb-16">Our Sponsors</h3>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row justify-around lg:w-2/5 mt-auto mb-auto p-5 lg:p-0">
            <img className="w-1/5 mt-auto mb-auto" src={apple} alt="Apple logo." />
            <img className="w-2/5 h-auto mt-auto mb-auto" src={solidWorks} alt="Solid Works logo." />
          </div>
          <div className="flex flew-row justify-around lg:w-3/5 mt-auto mb-auto p-5 lg:p-0">
            <img className="w-1/4 lg:h-4/5 mt-auto mb-auto" src={google} alt="Google logo." />
            <img className="w-1/2 h-auto mt-auto mb-auto" src={johnsonAndJohnson} alt="Johnson and Johnson logo." />
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="relative">
    <div className="absolute floatyThingy" id="Contacts"></div>
      <div className="p-5 bg-gray-700 dark:bg-gray-800">
        <div className="pt-10 pr-10 pl-10 flex flex-row m-auto justify-around lg:w-1/5">
          <a href="https://www.instagram.com/chargingchampions6560/" target="_blank" rel="noopener noreferrer">
            <img className="h-10 m-auto" src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://www.facebook.com/chargingchampions/" target="_blank" rel="noopener noreferrer">
            <img className="h-10 m-auto" src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCopXKZO1IG3zsvQKCXF4ESQ" target="_blank" rel="noopener noreferrer">
            <img className="h-10 m-auto" src={youtube} alt="Youtube Icon" />
          </a>
        </div>
        <h3 className="text-blue-500 text-xl lg:text-3xl text-left p-10 m-auto inline-block">
          Contact Us
          <h5 className="text-base lg:text-2xl text-white">
            email: <a className="text-blue-400 underline" href="mailto:charging.champions@gmail.com" target="_blank" rel="noopener noreferrer">charging.champions@gmail.com</a>
          </h5>
          <h5 className="text-base lg:text-2xl text-white">
            instagram: <a className="text-blue-400 underline" href="https://www.instagram.com/chargingchampions6560/" target="_blank" rel="noopener noreferrer">@chargingchampions6560</a>
          </h5>
        </h3>
        <h5 className="text-sm text-white text-center">Made with <span role="img" aria-label="heart emoji">❤️</span> by Krish Wu</h5>
      </div>
    </div>
  )
}

const App = () => {

  return (
    <ThemeProvider>
      <div className="min-h-full max-w-full text-center bg-white dark:bg-black overflow-x-hidden">
        <NavBar />
        <body>
          <div className="h-20 lg:h-28"></div>
          <div className="min-h-screen">
            <div className=" dark:hidden">
              <img className="m-auto w-full  hidden lg:inline" src={heroImgLight} alt="Charging Champions Hero" />
              <img className="m-auto w-full lg:hidden" src={heroImgMobileLight} alt="Charging Champions Hero" />
            </div>
            <div className="hidden dark:inline">
              <img className="m-auto w-full hidden lg:inline" src={heroImgDark} alt="Charging Champions Hero" />
              <img className="m-auto w-full lg:hidden" src={heroImgMobileDark} alt="Charging Champions Hero" />
            </div>
          </div>
          <Bio />
          <First />
          <Students />
          <Mentors />
          <Sponsors />
          <ContactUs />
        </body>
        <script src="https://cdn.tailwindcss.com"></script>
      </div>
    </ ThemeProvider>
  );
}

export default App;
