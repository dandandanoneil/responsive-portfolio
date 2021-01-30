import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";

import vinylImage from "../images/portfolio/Vinyl Destination.png";
import travelImage from "../images/portfolio/Travel Companion.png";
import employeeImage from "../images/portfolio/Employee Directory.png";
import passwordImage from "../images/portfolio/Password Generator.png";
import budgetImage from "../images/portfolio/Budget Tracker.png";
import weatherImage from "../images/portfolio/Weather Dashboard.png";

const projects = [
  {
    title: "Vinyl Destination",
    image: vinylImage,
    gitHubLink: "https://github.com/rachelrosenstein/Vinyl-Destination",
    deployedLink: "https://vinyl-destination.herokuapp.com/",
    demoCredentials: "Demo credentials: 'user@demo.com', 'password'",
    collaborators: "Collaboration with Rachel Rosenstein & Roman Mazzei",
    technologies: "JavaScript, MySQL, Node, Express, Sequelize, Passport, Handlebars",
    description: "A full-stack web application where users create an account to build/manage their music collection. The home page features dynamic content from last.fm’s pop music charts, and users can either add albums to their collection using search results from the last.fm API, or manually."
  },
  {
    title: "Travel Companion",
    image: travelImage,
    gitHubLink: "https://github.com/dandandanoneil/travel-companion",
    deployedLink: "https://dandandanoneil.github.io/travel-companion/",
    demoCredentials: "",
    collaborators: "Collaboration with Suzanne Givnish & Tricia Roush",
    technologies: "JavaScript, Third-Party API Integration, HTML5, Materialize Framework",
    description: "A front-end web application that simulates the cultural experience of travel. Based on a user input (search, ask for a random city, or use my current location), the app makes external API calls to show tailored results from Goodreads, Open Movie Database, New York Times, and Harvard Art Museums."
  },
  {
    title: "Employee Directory",
    image: employeeImage,
    gitHubLink: "https://dandandanoneil.github.io/employee-directory/",
    deployedLink: "https://dandandanoneil.github.io/employee-directory/",
    demoCredentials: "",
    collaborators: "",
    technologies: "JavaScript, React.js, Express, HTML5, Bootstrap Framework",
    description: "A web application that uses the OpenWeather API to display weather forecast data for a city provided by the user - including temperature data, humidity, wind speed, and UV index."
  },
  {
    title: "Password Generator",
    image: passwordImage,
    gitHubLink: "https://dandandanoneil.github.io/password-generator/",
    deployedLink: "https://dandandanoneil.github.io/password-generator/",
    demoCredentials: "",
    collaborators: "",
    technologies: "JavaScript, HTML5, Bootstrap Framework, Bootswatch Theme",
    description: "A web application that generates secure, random passwords based on user inputs. User interface includes the ability to select what kinds of characters to include, easily copy the generated password to the clipboard, generate a new password with the same criteria, eliminate easily misread characters."
  },
  {
    title: "Budget Tracker",
    image: budgetImage,
    gitHubLink: "https://github.com/dandandanoneil/budget-tracker/",
    deployedLink: "https://dandandanoneil-budget-tracker.herokuapp.com/",
    demoCredentials: "",
    collaborators: "",
    technologies: "JavaScript, MongoDB, Express, HTML5, Bootstrap Framework",
    description: "A web application that utilizes MongoDB, Mongoose, Node, and Express to track a user's budget, and uses IndexedDB to log transactions while offline, then sync transactions when brought back online."
  },
  {
    title: "Weather Dashboard",
    image: weatherImage,
    gitHubLink: "https://dandandanoneil.github.io/weather-dashboard/",
    deployedLink: "https://dandandanoneil.github.io/weather-dashboard/",
    demoCredentials: "",
    collaborators: "",
    technologies: "JavaScript, HTML5, Bootstrap Framework",
    description: "A web application that uses the OpenWeather API to display weather forecast data for a city provided by the user - including temperature data, humidity, wind speed, and UV index."
  }
]

function About() {
  return (
    <div>
      <Container>

        <Row>
          <PageTitle>Portfolio</PageTitle>
        </Row>

        <Row>
          {projects.map(project => (
            <Project project={project}/>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default About;
