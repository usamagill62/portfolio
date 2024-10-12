import React from "react";

const Experience = () => {
  const experienceData = [
    {
      range: "2024 - Present",
      role: "Senior Software Engineer",
      companyName: "Dubai Municipality",
      companyUrl: "https://www.dm.gov.ae/",
      Description:
        "At Dubai Municipality, I lead the development of scalable web applications to enhance public services. I collaborate with cross-functional teams to deliver innovative solutions, focusing on efficiency and user experience. I provide technical guidance, mentor junior developers, and ensure project success through proactive problem-solving and adherence to best practices. Additionally, I play a key role in automating testing procedures to maintain code quality and streamline deployments.",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
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
        "React Native",
        "AngularJS",
        "SQL",
        "CI/CD",
        "Git",
      ],
    },

    {
      range: "2022 - Present",
      role: "Senior Software Engineer",
      companyName: "DEVSINC",
      companyUrl: "https://devsinc.com/",
      Description:
        "At DEVSINC, I developed scalable software systems and applications in management, ecommerce, health, and education. As a leader, I collaborated with team members, ensuring project success. I provided technical guidance and mentoring to junior colleagues. Automating testing procedures improved code quality. My collaboration with product management and QA teams ensured software met requirements.",
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
        "React Native",
        "AngularJS",
        "SQL",
      ],
    },
    {
      range: "2020 - 2022",
      role: "Software Engineer",
      companyName: "Stackintel.io",
      companyUrl: "https://stackintel.io/",
      Description:
        "I played a key role in developing the IMS (Intelligent Monitoring System), leveraging the MERN stack and AI. This system effectively monitors social media and TV channels. Additionally, I contributed to the Network Management System, providing web services. I also worked on a project that utilized Google Drive as a database, enabling CRUD operations and incorporating Google authentication. I have also acquired proficiency in TypeScript through continuous learning and professional development.",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Ant Design",
        "Node",
        "Express",
        "MongoDB",
        "Redux",
        "HTML",
        "CSS",
        "SCSS",
        "BootStrap",
      ],
    },
    {
      range: "2019 - 2020",
      role: "Software Engineer",
      companyName: "Let Technologies",
      companyUrl: "https://www.facebook.com/lettechapps/",
      Description:
        "My role involves spearheading the development of mobile applications and curating my own portfolio. I have acquired extensive skills in utilizing Node.js and Express.js for backend development, along with proficiency in MongoDB for efficient database management. With a strong focus on delivering high-quality solutions, I collaborate closely with cross-functional teams to create robust mobile apps that meet client requirements. Additionally, my portfolio showcases my expertise in developing innovative and user-friendly applications.",
      skills: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Redux",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "BootStrap",
      ],
    },
    {
      range: "2018 - 2019",
      role: "Associate Software Engineer",
      companyName: "UNIAL Solutions",
      companyUrl: "https://unialsolutions.com",
      Description:
        "I consistently deliver high-quality, robust production code for diverse projects, including Digital Man, an AWS solution-based company. I also build company portfolio showcasing my skills. With expertise in AWS services and up-to-date knowledge of programming languages, I design scalable applications. I prioritize effective communication with clients, ensuring regular updates and exceeding expectations. Overall, I provide exceptional software solutions for successful project outcomes",
      skills: [
        "React",
        "Redux",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "BootStrap",
      ],
    },
  ];
  return (
    <div id="experience" className="container-fluid mt-5 pt-5">
      {experienceData.map(
        ({ range, role, companyName, companyUrl, Description, skills }) => {
          return (
            <a
              href={companyUrl}
              target="_blank"
              className="row p-3 p-md-4 experience-div mb-5"
              rel="noreferrer"
            >
              <div className="col-12 col-md-3 p-0 text-center text-lg-left job-range pb-3 pb-md-0">
                {range}
              </div>
              <div className="col-12 col-md-9 p-0">
                <div className="row company-name-parent">
                  <div className=" p-0  company-name">
                    {companyName}
                    <i className="fas fa-external-link-alt center-icon"></i>
                  </div>
                </div>

                <div className="row job-role ">{role}</div>
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

export default Experience;
