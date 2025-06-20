import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SAP"
              description="Developed and maintained SAP Fiori Elements applications utilizing SAPUI5 framework and Java backend. Implemented OData services, annotations, and custom extensions to create responsive user interfaces that follow SAP Fiori design guidelines. Leveraged SAP Web IDE and SAP Business Application Studio for development."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NEXI PAYMENTS"
              description="Developed payment processing solutions with Liferay portal using JSP, Java, CSS, AJAX, and JavaScript. Created dynamic web components and portlets for seamless user experience. Implemented secure transaction processing workflows with responsive UI and integration with backend payment systems."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ALL STATE"
              description="Worked with Enterprise Information Systems (EIS) utilizing Java for backend development. Implemented REST API calls and microservice integration to create scalable solutions. Used Confluence for documentation and collaboration, ensuring efficient knowledge sharing across teams. Focused on building robust, maintainable systems with comprehensive integration testing."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={leaf}*/}
          {/*    isBlog={false}*/}
          {/*    title="Plant AI"*/}
          {/*    description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Plant_AI"*/}
          {/*    demoLink="https://plant49-ai.herokuapp.com/"*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={suicide}*/}
          {/*    isBlog={false}*/}
          {/*    title="Ai For Social Good"*/}
          {/*    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
          {/*    ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"*/}
          {/*    // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
