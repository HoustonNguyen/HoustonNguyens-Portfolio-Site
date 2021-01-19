import React from "react";
import { v4 as uuidv4 } from 'uuid';

//import stock
import LocalNowAd from "../img/portfolioContent/LocalNow/LocalNowAd.png";
import LN1 from "../img/portfolioContent/LocalNow/1.png";
import LN2 from "../img/portfolioContent/LocalNow/2.png";
import LN3 from "../img/portfolioContent/LocalNow/3.png";
import LN4 from "../img/portfolioContent/LocalNow/4.png";
import LN5 from "../img/portfolioContent/LocalNow/5.png";
import LN6 from "../img/portfolioContent/LocalNow/6.png";
import LN7 from "../img/portfolioContent/LocalNow/7.jpg";

import C92 from "../img/portfolioContent/Cloud9Software/2.png";
import Cloud9Webpage from "../img/portfolioContent/Cloud9Software/Cloud9Webpage.png";

import P1 from "../img/portfolioContent/PortfolioSite/P1.png";

import H1 from "../img/portfolioContent/Hashibirokou/1.png";


const PortfolioContents = [
  {
    Title: "Cloud9Software Ortho",
    URL: "https://www.cloud9ortho.com/products/cloud-9-ortho-practice-management-software/",
    Description: `Full Suite Practice Management Software for Orthodontics. Complete MVC5 Web App with MSSQL as data storage. 
    Front-end consisted of pure Javascript and CSS. Legacy app based on Silverlight 5. Involved interfacing with hardware like printers and XRay machines.`,
    Tags: ".NET Framework, C#, MVC5, Entity Framework, Telerik Reporting Services, MSSQL, Javascript, HTML5, CSS",
    MainImage: C92,
    Gallery: []
  },
  {
    Title: "Cloud9Software Pediatric",
    URL: "https://www.cloud9ortho.com/products/cloud-9-pedo/",
    Description: `A Full Suite Web-based Practice Management Application that is built on top of Cloud9Software's Ortho Platform, this is an enhancement to the 
    product that accomodated Dental Practices. Although the technology is the same, there are a lot of drastically different considerations such as how insurances work, how contracts
    are handled, and even how appointments and treatment history works. A lot of work went towards not only implementing features that dentists found useful, but also
    research and collaboration with obtaining these specifications.`,
    Tags: ".NET Framework, C#, MVC5, Entity Framework, Telerik Reporting Services, MSSQL, Javascript, HTML5, CSS",
    MainImage: Cloud9Webpage,
    Gallery: []
  },
  {
    Title: "Cloud9Software Ceph",
    Description: `No Information provided.`,
    MainImage: Cloud9Webpage,
    Gallery: []
  },
  {
    Title: "Cloud9Software Conversion Suite",
    URL: "https://www.cloud9ortho.com/products/cloud-9-ortho-practice-management-software",
    Description: `This was an internally used set of utilities and processes that aided the company with client on-boarding. These tools involved processing databases from a variety of sources
    and types, including MSSQL, PostGres, MySQL, SQLLite, CSV, and even some propiertary systems. Data is read, mapped, and exported to Cloud9's schema. In addition, this also
    involved converting image files, sometimes involving sophistated analysis in order to determine the image contents, as well as encryption and decryption (in order to bring in
      images from competitive systems that did not want to share data). Lastly, the process heavily involved debugging and troubleshooting staff and customer issues to make sure
      that data integrity was preserved, including the finanial history for millions of patients.`,
    Tags: "MSSQL, Imaging, PostGres, MySQL, SQLLite",
    MainImage: Cloud9Webpage,
    Gallery: []
  },
  {
    Title: "Local Now",
    URL: "https://localnow.com/",
    Description: `A React-based web app (Next.js) that served video content, much like Hulu or Netflix. 
    The niche that this fills is that it also offers an ongoing live-reel on the front page. It is supposed to be like TV.`,
    Tags: "React, Next.js, Heroku",
    MainImage: LN1,
    Gallery: [ LN2, LN3, LN4, LN5, LN6, LN7 ]
  },
  {
    Title: "Local Now Ingestion Services",
    URL: null,
    Description: `A Microservice running in AWS Lambda, this is a tool that handles
    the transferrence of data between a content provider (ex: Lions Gate, Film Rise, MGM, etc) and Local Now's Content Management System, which is a third-party vendor that will not be named.
    This is an automated solution to rectified the data and assets coming from a studio and streamlined it in preparation for consumption and publishing on the front-facing app.`,
    MainImage: LocalNowAd,
    Gallery: [ ],
    Tags: "AWS Lambda, AWS CodePipeline, AWS IAM, Micro-Services, Distributed Systems"
  },
  {
    Title: "VODLibrary Admin",
    URL: null,
    Description: `An internal web-application used by Local Now and The Weather Group's staff`,
    MainImage: LocalNowAd,
    Gallery: [ ],
    Tags: "Angular 8, AWS CodePipeline, AWS EC2, AWS CloudFront, Auth0, PrimeNG, AWS Lambda, AWS S3, AWS IAM, AWS Secrets Manager"
  },
  {
    Title: "OTT Config and OTT CMS",
    URL: null,
    Description: `An internal web-application used by Local Now and The Weather Group's staff`,
    MainImage: LocalNowAd,
    Gallery: [ ],
    Tags: "Angular, AWS CodePipeline, AWS EC2, AWS CloudFront, AWS IAM, AWS Lambda, AWS Dynamo"
  },
  {
    Title: "This Site",
    URL: "http://houstonguyen-portfolio-site.s3-website-us-east-1.amazonaws.com/",
    Description: `This site is a simple boilerplate React app hosted out of an AWS S3 bucket as a static webpage. Deployments are handled automatically by 
    a CodePipeline configuration.`,
    Tags: "React, AWS, S3, CodePipeline",
    MainImage: P1,
    Gallery: [ ]
  },
  {
    Title: "Hashibirokou",
    URL: null,
    Description: `This is a defunct background service that used the Twitter API to monitor Twitter and mine for posts, filling certain criteria, 
    and process them using Google's Translation API. Lastly, it sent the processed data to a Discord server using Discord's API.`,
    Tags: "Service, Google API, Twitter API, Discord API",
    MainImage: H1,
    Gallery: [ ]
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
              <div className="col-md-4" key={uuidv4()}>
                <div className="work-box">
                  <a href={content.MainImage} data-lightbox={"Gallery" + content.Title}>
                    <div className="work-img">
                      <img src={content.MainImage} alt="" className="img-fluid" />
                    </div>
                    
                  </a>
                  <div className="work-content">
                      <div className="row">
                        <div className="col-sm-12">
                          <h2 className="w-title">{content.Title}</h2>
                          {(content.URL) ? (<a className="button button-a" target="_blank" href={content.URL} Title={content.URL}>Visit</a>) : (<p></p>)}
                          <p className="w-description">{content.Description}</p>
                          <div className="w-more">
                            <span className="w-ctegory">
                              {content.Tags}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  {content.Gallery.map((image) => {
                    return (
                      <a key={uuidv4()}
                        href={image}
                        data-lightbox={"Gallery" + content.Title}
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
