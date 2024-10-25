import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/chatapp.jpg";
import project from "../assets/projects/jobapp.jpg";
import lift from "../assets/projects/prestige.jpg";
import kickstart from "../assets/projects/tarang.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Talent Sphere"
              description="This job application platform features a REST API with Node.js and Express.js, supporting seamless CRUD operations for user profiles, job postings, and applications. Job seekers can apply with resumes, while employers manage listings. Integrated with MongoDB for robust data storage, it ensures a smooth, secure, and efficient user experience."
              ghLink="https://github.com/MohitJaiswal1009/jobApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="HSC-HBTU"
              description="This college event platform, developed with React, JavaScript, and Tailwind CSS, provides a highly engaging and responsive user experience. It simplifies access to event information, schedules, and registration, ensuring a seamless journey for attendees. Tailwind CSS enhances design consistency and mobile responsiveness, while React powers real-time updates, contributing to increased event visibility and participant engagement across devices."
              ghLink="https://github.com/MohitJaiswal1009/hsc-hbtu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="ChatWave"
              description="This real-time chat application, built with the MERN stack, offers a dynamic and interactive messaging experience. Users can see who is online and connect instantly through Socket.io, enabling seamless, real-time communication. The application supports a responsive UI for both individual and group chats, providing a smooth, engaging experience. MongoDB powers efficient data storage, while Express and Node.js handle robust back-end operations."
              ghLink="https://github.com/MohitJaiswal1009/chatApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Prestige Rentals"
              description="This React-based home rental platform provides a streamlined interface for finding and listing rental properties, enhanced by Tailwind CSS for responsive, modern design. Users can search and view listings with detailed descriptions, images, and pricing, making the rental process simple and engaging. With dynamic components and user-friendly navigation, the platform supports efficient browsing, creating a seamless experience for renters and property owners alike."
              ghLink="https://github.com/MohitJaiswal1009/Prestige-Rentals"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects