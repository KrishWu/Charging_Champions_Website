import React from 'react';
import './App.css';
import heroImg from './img/heroImage.jpg';
import heroImgMobile from './img/heroImageMobile.jpg';
import apple from './img/apple.png';
import solidWorks from './img/solidWorks.png';
import firstCompetition from './img/firstCompetition.jpeg';
import students from './img/students.jpg';
import mentors from './img/mentors.jpeg';
import instagramBlue from './img/instagramBlue.png';
import instagram  from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';

// import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <header className="flex items-center border-b-4 pt-4 pb-4 pl-4 lg:p-6 border-gray-400 sticky top-0 bg-black w-full z-50">
      <a className="" href="https://chargingchampions.org" id="logo">
        <img className="w-14 h-14 lg:w-20 lg:h-20 rounded-md" src="https://i.imgur.com/AkKEJZ1.png" alt="Charging Champion's Logo"/>
      </a>
      <h1 className="text-blue-500 text-3xl lg:text-5xl text-center m-auto lg:pl-10" id="title">Charging Champions</h1>
      <div className="lg:flex justify-around items-center hidden w-3/5 m-auto text-xl">
        <a className="text-white" href="#About" id="aboutHeader">About Us</a>
        <a className="text-white" href="#First" id="firstHeader">First</a>
        <a className="text-white" href="#Students" id="studentsHeader">Students</a>
        <a className="text-white" href="#Mentors" id="mentorsHeader">Mentors</a>
        <a className="text-white" href="#Sponsors" id="sponsorsHeader">Sponsors</a>
        <a className="text-white" href="#Contacts" id="contactsHeader">Contacts</a>
        <a className="text-Blue-400 text-2xl" href="https://www.instagram.com/chargingchampions6560/" target="_blank" rel="noopener noreferrer">
          <img className="h-10" src={instagramBlue} alt="Instagram Icon Blue" />
        </a>
      </div>
    </header>
  )
}

const Bio = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="About"></div>
      <div className="p-4 lg:p-16 flex flex-col-reverse lg:flex-row justify-around border-b-4 border-gray-400">
        <h3 className="text-blue-500 text-xl lg:text-3xl lg:w-2/5 text-left m-2 lg:m-10">
          Charging Champions Team is the best FRC Robotics Team!
          <h5 className="text-base lg:text-2xl text-white">We are FTC team #8660 and FRC team #6560</h5>
        </h3>
        <img className="lg:w-2/5 rounded-3xl" src="https://i.imgur.com/ArqgbAB.jpeg" alt="Chargine Champion's Team"/>
      </div>
    </div>
  )
}

const First = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="First"></div>
      <div className="p-4 lg:p-16 flex flex-col lg:flex-row justify-around border-b-4 border-gray-400">
        <img className="lg:w-2/5 rounded-3xl" src={firstCompetition} alt="Solid Works logo." />
        <h3 className="text-blue-500 text-xl lg:text-3xl lg:w-2/5 text-left m-2 lg:m-10">
          What is First?
          <h5 className="text-base lg:text-2xl text-white">FIRST, which means “For Inspiration and Recognition of Science and Technology,” has high-schooler in teams design, program, and build a robot starting with a standard kit of parts and common set of rules to play in a themed head-to-head challenge. Teams also build a brand, develop community partnerships for support, and work to promote STEM in their local community.</h5>
        </h3>
      </div>
    </div>
  )
}

const Students = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="Students"></div>
      <div className="p-4 lg:p-16 flex flex-col-reverse lg:flex-row justify-around border-b-4 border-gray-400">
        <h3 className="text-blue-500 text-xl lg:text-3xl lg:w-2/5 text-left m-2 lg:m-10">
          Who are the students?
          <h5 className="text-base lg:text-2xl text-white">High school students from all around Irvine, CA (especially University High School) participate on FRC team 6560 and each year create a globally competitive robot with the support of industry and FIRST professional mentors.</h5>
        </h3>
        <img className="lg:w-2/5 rounded-3xl" src={students} alt="Solid Works logo." />
      </div>
    </div>
  )
}

const Mentors = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="Mentors"></div>
      <div className="p-4 lg:p-16 flex flex-col lg:flex-row justify-around border-b-4 border-gray-400">
        <img className="lg:w-2/5 rounded-3xl" src={mentors} alt="Solid Works logo." />
        <h3 className="text-blue-500 text-xl lg:text-3xl lg:w-2/5 text-left m-2 lg:m-10">
          Who are the mentors?
          <h5 className="text-base lg:text-2xl text-white">Industry professionals and FIRST alumni inspire students and pass their knowledge on to the team to foster a team that grows in competitiveness.</h5>
        </h3>
      </div>
    </div>
  )
}

const Sponsors = () => {
  return (
    <div className="relative">
      <div className="absolute floatyThingy" id="Sponsors"></div>
      <div className="p-4 lg:p-16 border-b-4 border-gray-400">
        <h3 className="text-center text-blue-500 text-4xl lg:text-5xl pb-4 lg:pb-16">Our Sponsors</h3>
        <div className="flex flex-row justify-around">
          <img className="w-1/6 h-1/5" src={apple} alt="Apple logo." />
          <img className="w-2/6 h-auto" src={solidWorks} alt="Solid Works logo." />
        </div>
      </div>
    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="relative">
    <div className="absolute floatyThingy" id="Contacts"></div>
      <div className="p-5 bg-gray-800">
        <div className="pt-10 pr-10 pl-10 flex flex-row m-auto justify-around w-1/5">
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
    <div className="min-h-full min-w-full text-center bg-black">
      <NavBar />
      <body>
        <img className="m-auto w-full hidden lg:inline" src={heroImg} alt="Charging Champions Hero" />
        <img className="m-auto w-full lg:hidden" src={heroImgMobile} alt="Charging Champions Hero" />
        <Bio />
        <First />
        <Students />
        <Mentors />
        <Sponsors />
        <ContactUs />
      </body>
    </div>
  );
}

export default App;
