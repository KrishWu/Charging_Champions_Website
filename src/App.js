import './App.css';
import heroImg from './img/heroImage.jpg';
import apple from './img/apple.png';
import solidWorks from './img/solidWorks.png';
import firstCompetition from './img/firstCompetition.jpeg';
import students from './img/students.jpg';

function NavBar() {
  return (
    <header className="flex justify-around items-center border-b-4 p-6 border-gray-400 sticky top-0 bg-black">
      <img className="w-20 h-20 rounded-md" src="https://i.imgur.com/AkKEJZ1.png" alt="Charging Champion's Logo" />
      <h1 className="text-blue-500 text-5xl text-center">Charging Champions</h1>
    </header>
  )
}

function Bio() {
  return (
    <div className="flex flex-row p-16 flex-wrap w-full border-b-4 border-gray-400">
      <h3 className="text-blue-500 text-3xl w-2/5 text-left m-10">
        Charging Champions Team is the best FRC Robotics Team!
        <h5 className="text-2xl text-white">We are FTC team #8660 and FRC team #6560</h5>
      </h3>
      <img className="w-2/5 rounded-3xl m-auto" src="https://i.imgur.com/ArqgbAB.jpeg" alt="Chargine Champion's Team" />
    </div>
  )
}

function First() {
  return (
    <div className="p-16 flex flex-row justify-around border-b-4 border-gray-400">
      <img className="w-2/6 h-auto rounded-3xl" src={firstCompetition} alt="Solid Works logo." />
      <h3 className="text-blue-500 text-3xl w-2/5 text-left m-10">
        What is First?
        <h5 className="text-2xl text-white">FIRST, which means “For Inspiration and Recognition of Science and Technology,” has high-schooler in teams design, program, and build a robot starting with a standard kit of parts and common set of rules to play in a themed head-to-head challenge. Teams also build a brand, develop community partnerships for support, and work to promote STEM in their local community.</h5>
      </h3>
    </div>
  )
}

function Students() {
  return (
    <div className="p-16 flex flex-row justify-around border-b-4 border-gray-400">
      <h3 className="text-blue-500 text-3xl w-2/5 text-left m-10">
        Who are the students?
        <h5 className="text-2xl text-white">High school students from all around Irvine, CA participate on FRC team 6560 and each year create a globally competitive robot with the support of industry and FIRST professional mentors.</h5>
      </h3>
      <img className="w-2/6 h-auto rounded-3xl" src={students} alt="Solid Works logo." />
    </div>
  )
}

function Mentors() {
  return (
    <div className="p-16 flex flex-row justify-around border-b-4 border-gray-400">
      <h3 className="text-blue-500 text-3xl w-2/5 text-left m-10">
        Who are the mentors?
        <h5 className="text-2xl text-white">Industry professionals and FIRST alumni inspire students and pass their knowledge on to the team to foster a team that grows in competitiveness.</h5>
      </h3>
      <img className="w-2/6 h-auto rounded-3xl" src={students} alt="Solid Works logo." />
    </div>
  )
}

function Sponsors() {
  return (
    <div className="p-16 border-b-4 border-gray-400">
          <h3 className="text-center text-blue-500 text-5xl pb-16">Our Sponsors</h3>
            <div className="flex flex-row justify-around">
              <img className="w-1/6 h-1/5" src={apple} alt="Apple logo." />
              <img className="w-2/6 h-auto" src={solidWorks} alt="Solid Works logo." />
            </div>
        </div>
  )
}

function App() {
  return (
    <div className="min-h-full min-w-full text-center bg-black">
      <NavBar />
      <body>
        <img className="m-auto w-full" src={heroImg} alt="Charging Champions Hero Image w-full" />
        <Bio />
        <First />
        <Students />
        <Mentors />
        <Sponsors />
      </body>
    </div>
  );
}

export default App;
