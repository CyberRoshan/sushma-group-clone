import Achivements from "./components/Achivements"
import Header from "./common/Header"
import About from "./components/About"
import AboutWork from "./components/AboutWork"
import Banner from "./assets/banner.png"
import ServicePartner from "./components/ServicePartner"
import WhyUs from "./components/WhyUs"
import Home from "./components/Home"
import EnquireNow from "./components/EnquireNow"
import ProjectsBoard from "./components/ProjectsBoard"
import BlogSection from "./components/BlogSection"
import NewsEventSection from "./components/NewsEventSection"
import SuccessStory from "./components/SuccessStory"
import WalkThrough from "./components/WalkThrough"
import Passion from "./components/Passion"
import ContactUs from "./components/Contact"
import BoardMember from "./components/BoardMember"
import OurOffering from "./components/OurOffering"
import Faq from "./components/Faq"
import Footer from "./common/Footer"
import CorporateOffice from "./components/CorporateOffice"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClintsSays from "./components/ClintsSays"

function App() {

  return (
    <main className="box-border overflow-x-hidden">
      <Header/>
      <Home/>
      <Achivements/>
      <About/>
      <Passion/>
      <WhyUs/>
      <OurOffering/>
      <SuccessStory/>
      {/* <EnquireNow/> */}
      <BoardMember/>
      <AboutWork/>
      <img src={Banner} alt="New Branch Address" />
      <ServicePartner/>
      <ClintsSays/>
      <Faq/>
      <WalkThrough/>
      <ProjectsBoard/>
      <BlogSection/>
      <NewsEventSection/>
      <ContactUs/>
      <CorporateOffice/>
      <Footer/>
      </main>
  )
}

export default App
