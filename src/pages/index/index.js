import { ADMIN_LIST, WORK_LIST, SERVICE_LIST } from "../../constants/mock-data";
import ListItem from "../../components/ListItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";

function Home() {
  const { section } = useParams();
  useEffect(() => {
    let pos = 0;
    if (section) {
      const element = document.getElementById(section);
      pos = element.offsetTop;
    }
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }, [section]);

  return (
    <div className="home">
      <Header />
      <div className="home__banner">
        <div className="home__banner__title">
          Creative Innovative Design Agency
        </div>
        <div className="home__banner__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.{" "}
        </div>
      </div>
      <div id="work" className="home__section">
        <div className="home__section__title">Work</div>
        <ListItem type="work" items={WORK_LIST} />
      </div>
      <div id="services" className="home__section">
        <div className="home__section__title">Services</div>
        <ListItem type="service" items={SERVICE_LIST} />
        <div className="home__section__title home__section__title--team">
          Our Team
        </div>
        <div className="home__section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.{" "}
        </div>
        <ListItem type="profile" items={ADMIN_LIST} />
      </div>
      <div id="contact" className="home__section flex-col items-center">
        <div className="home__section__title">Contact</div>
        <div className="home__section__sub-title">contact@website.com</div>
        <div className="home__section__sub-title">+0 0000 0000</div>
        <div className="home__social">
          <div>Twitter</div>
          <div>LinkedIn</div>
          <div>Dribbble</div>
          <div>YouTube</div>
          <div>Instagram</div>
          <div>Facebook</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
