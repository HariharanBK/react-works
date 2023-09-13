import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Hari Haran</h2>
        <div className="prompt">
          <p>A front-end developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>My Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Frontend Developer</h3>
            <span>
              I like to code things from scratch,and enjoy bringing ideas to life in the browser.
            </span>
          </li>
          {/* <li className="item">
            <h2>Back-End</h2>
            ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li> */}
          <li className="item">
            <h3>Languages</h3>
            <span>HTML, CSS, BootStrap, Jquery, Java Script, ReactJS</span>
          </li>
          <li className="item">
            <h3>Dev-Tools</h3>
            <span>
             Type Script, Github, Material UI, Fontawesome.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
