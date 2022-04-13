import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/img4.jpg";
import img3 from "../../assets/img/img4.png";
import img4 from "../../assets/img/img5.jpg";
import img5 from "../../assets/img/img7.jpg";
import img6 from "../../assets/img/img3.png";
const Portfolio = () => {
  const data = [
    {
      id:1,
      img: img1,
      githubLink: "https://github.com/ShabnamRashidova/e-commerce1.github.io",
      demoLink: "https://shabnamrashidova.github.io/e-commerce1.github.io/",
      info: "HTML/CSS/BOOTSTRAP/JAVASCRIPT ",
    },
    {
      id:2,
      img: img2,
      githubLink: "https://github.com/ShabnamRashidova/watch-page.github.io",
      demoLink: "https://shabnamrashidova.github.io/watch-page.github.io/",
      info: "HTML/CSS/BOOTSTRAP/JAVASCRIPT",
    },
    {
      id:3,
      img: img3,
      githubLink: "https://github.com/ShabnamRashidova/e-commerce2.github.io",
      demoLink: "https://shabnamrashidova.github.io/e-commerce2.github.io/",
      info: "HTML/CSS/BOOTSTRAP/JAVASCRIPT",
    },
    {
      id:4,
      img: img4,
      githubLink: "https://github.com/ShabnamRashidova/texnomart-clone-react/",
      demoLink: "https://react-app-texnomart-clone.netlify.app/",
      info: "REACT/BOOTSTRAP",
    },
    {
      id:5,
      img: img5,
      githubLink: "https://github.com/ShabnamRashidova/react-app",
      demoLink: "https://react-app-e-commerce.netlify.app/",
      info: "REACT/BOOTSTRAP",
    },
    {
      id:6,
      img: img6,
      githubLink: "https://github.com/ShabnamRashidova/hmart.github.io",
      demoLink: "https://shabnamrashidova.github.io/hmart.github.io/",
      info: "HTML/CSS/BOOTSTRAP/JAVASCRIPT",
    },
  ];
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="title">Portfolio</h2>
        <div className="portfolio-container">
          <div className="row">
            {data.map((item) => (
           
                <div className="col-xl-4 col-md-6" key={item.id}>
                  <div className="portfolio-item text-center">
                    <div className="portfolio-item-img">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="portfolio-item-info">{item.info}</div>
                    <a
                      href={item.githubLink}
                      className="btn header-btn"
                      target="blank"
                    >
                      Github
                    </a>
                    <a
                      href={item.demoLink}
                      className="btn header-btn"
                      target="blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
             
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
