import React from "react";

const Projects = () => {
  const Projects = [
    {
      imageName: "KUDO",
      projectName: "KUDO",
      projectURL: "https://kudoway.com/",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Redux",
        "REST APIs",
        "SQL",
      ],
      Description:
        "Imagine a world in which communicating fluently in 200+ languages was as simple as clicking a button. That's KUDO",
    },
    {
      imageName: "BOON",

      projectName: "BOON",
      projectURL: "https://app.goboon.co/signin",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Redux",
        "REST APIs",
        "SQL",
      ],
      Description:
        "The platform that empowers you to earn money through job referrals and apply for rewarding opportunities. Seamlessly connect your network to open positions, while accessing a vast database of tailored job listings. ",
    },
    {
      imageName: "CONVEYOR",

      projectName: "CONVEYOR",
      projectURL: "https://conveyor.finance/",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Ant Design",
        "Node",
        "Express",
        "MongoDB",
        "Redux",
        "AWS CLI",
        "Amazon S3",
        "AWS IAM",
        "AWS CloudFormation",
        "AWS Lambda",
        "REST APIs",
      ],
      Description:
        "Conveyor is a decentralized, trustless, and non-custodial DeFi trading protocol that leverages aggregation, automation, and MEV to give traders the edge they need.",
    },
    {
      imageName: "FREEBUSY",

      projectName: "FREEBUSY",
      projectURL: "https://freebusy.io/en",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Ant Design",
        "REST APIs",
        "AngularJS",
        "SQL",
      ],
      Description:
        "Create seamless scheduling experiences. Use leading technology that adapts to any business",
    },
    {
      imageName: "MWS",

      projectName: "MWS",
      projectURL:
        "https://millionwebservices.com/on-site-data-center-management/",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Ant Design",
        "Node",
        "Express",
        "MongoDB",
        "Redux",
        "REST APIs",
      ],
      Description:
        "On site data center management is the provision of offsite physical data center facilities and infrastructure to clients. Clients rent or lease access to the provider’s data center, using the servers, networking, storage and other computing resources",
    },
    {
      imageName: "BARBARCLASIC",

      projectName: "BARBAR CLASSIC",
      projectURL:
        "Oh you cut your hair! What happened? Are you going through a breakup or something?",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Ant Design",
        "Node",
        "Express",
        "MongoDB",
        "Redux",
        "REST APIs",
        "SQL",
      ],
      Description:
        "Oh you cut your hair! What happened? Are you going through a breakup or something?",
    },
    {
      imageName: "PROFILE",

      projectName: "PORTFOLIO",
      projectURL: "https://my-portfolio-5e610.web.app/",
      skills: ["React", "JavaScript", "Bootstrap"],
      Description:
        "Porfolio previously build by using react redux react router dom and bootstaro",
    },
  ];
  return (
    <div id="projects" className="container-fluid my-5 py-5">
      {Projects.map(
        ({ imageName, projectName, projectURL, Description, skills }) => {
          return (
            <a
              href={projectURL}
              target="_blank"
              className="row p-4 experience-div mb-5"
              rel="noreferrer"
            >
              <div className="col-12 col-md-3 p-0">
                <img
                  src={require(`../images/${imageName}.png`)}
                  className="image-banner rounded"
                  alt="imgg"
                ></img>
              </div>

              <div className="col-12 col-md-9 p-0 pt-5 pt-md-0">
                <div className="row company-name-parent">
                  <div className=" p-0  company-name">
                    {projectName}
                    <i className="fas fa-external-link-alt center-icon"></i>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-10 p-0 mt-2 job-description">
                    {Description}
                  </div>
                </div>
                <div className="row skills-container mt-3">
                  {skills.map((skill) => {
                    return <div className="skill-item">{skill}</div>;
                  })}
                </div>
              </div>
            </a>
          );
        }
      )}
    </div>
  );
};

export default Projects;
