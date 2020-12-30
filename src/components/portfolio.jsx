import React from "react";

//import stock
import stock from "../img/image1.jpg";
import LN1 from "../img/portfolioContent/LocalNow/1.png";
import LN2 from "../img/portfolioContent/LocalNow/2.png";
import LN3 from "../img/portfolioContent/LocalNow/3.png";
import LN4 from "../img/portfolioContent/LocalNow/4.png";
import LN5 from "../img/portfolioContent/LocalNow/5.png";
import LN6 from "../img/portfolioContent/LocalNow/6.png";
import LN7 from "../img/portfolioContent/LocalNow/7.jpg";

const PortfolioContents = [
  {
    Title: "Cloud9Software",
    URL: "https://cloud9.software/",
    Description: "Full Suite Practice Management System for Dentists and Orthodontics. Complete MVC5 Web App with MSSQL as data storage. Front-end consisted of pure Javascript and CSS. Alternate app based on Silverlight. Invovled interfacing with hardware like printers and XRay machines",
    Tags: ".NET Framework, C#, MVC5, Entity Framework, Telerik Reporting Services, MSSQL, Javascript, HTML5, CSS",
    MainImage: stock,
    Gallery: []
  },
  {
    Title: "Local Now",
    URL: "https://localnow.com/",
    Description: `A React-based web app (Next.js)`,
    Tags: "React, AWS, S3, Microservices, Lambda, Auth0, MSSQL, ElasticSearch, Entity Framework, Angular",
    MainImage: LN1,
    Gallery: [ LN2, LN3, LN4, LN5, LN6, LN7 ]
  }
];

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below is an overview of my work, as it pertains to software development.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {PortfolioContents.map((content) => { return (
              <div className="col-md-4">
                <div className="work-box">
                  <a href={content.MainImage} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                      <img src={content.MainImage} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">{content.Title}</h2>
                          <p>{content.URL}</p>
                          <p className="w-description">{content.Description}</p>
                          <div className="w-more">
                            <span className="w-ctegory">
                              {content.Tags}
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  {content.Gallery.map((image) => {
                    return (
                      <a
                        href={image}
                        data-lightbox="gallery-vmarine"
                        style={{ display: "none" }}
                      >
                        jsx-a11y/anchor-has-content warning
                      </a>
                    );
                  })}
                </div>
              </div>
            );})}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
