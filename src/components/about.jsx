import React from "react";
import { v4 as uuidv4 } from 'uuid';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { content: "C#" },
        { content: "ASP.NET" },
        { content: ".NET Core" },
        { content: "Javascript (ES6)" },
        { content: "CSS" },
        { content: "Angular" },
        { content: "React" },
        { content: "HTML5" },
        { content: "MVC5" },
        { content: "Next.js" },
        { content: "AWS" },
        { content: "Lambda" },
        { content: "S3" },
        { content: "Distributed Systems" },
        { content: "Microservices" },
        { content: "Git" },
        { content: "TeamCity" },
        { content: "Atlassian Jira" },
        { content: "Agile/Scrum" },
        { content: "SQL" },
        { content: "ElasticSearch" },
        { content: "Node.js" },
        { content: "npm" },
        { content: "NUnit" },
        { content: "Ninject" },
        { content: "Unit Testing" },

      ],
      about_me: [
        {
          id: "Work",
          Title: "Work",
          content:
            `I graduated from Kennesaw State University in 2016 with a B.S. in Computer Science. Right out of college, I worked for a company in the healthcare industry, providing tools and
            other services to the Orthodonic and Dental Practice-domain. Nowadays, I am working on building out a new streaming platform for the latest news, updates, movies, and TV.
            Feel free to check out the work section for more details.`
        },
        {
          id: "Aspirations",
          Title: "Aspirations",
          content:
            `My dream job would be working for the Walt Disney Company.
            Nothing motivates me more than feeling like I am a part of something that people can be excited about. And nothing is more satisfying than making an idea into reality, while maintaining excellence and professionalism.
            My proudest moments as a developer is seeing a user's face brighten up over a fantastic looking UI or a convenient feature that they hadn't thought of. `
        },
        {
          id: "Interests",
          Title: "Interests",
          content:
            `I am a programmer by trade, but I also reserve a lot of interest for Fencing, wrestling, martial arts, Video FX and Editing, gaming, the study of the Japanese language, music, and digital illustration. Honestly, I will try almost anything. I love learning and trying new things.`
        },
        {
          id: "About This Site",
          Title: "About This Site",
          content:
            `This site is a pretty boilerplate example of a single-page application built in React. It is hosted in AWS. I have a few things I want to add to this, when I have time.`
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
              <div className="about-me">
                  <div className="row">
                    {this.state.skills.map(skill => {
                        return (
                          <p className="field" key={uuidv4()}>
                            <span className="tag">
                              {skill.content}
                            </span>
                          </p>
                        );
                      })}
                  </div>
                  <div className="row">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <React.Fragment key={uuidv4()}>
                            <h6>{content.Title}</h6>
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
