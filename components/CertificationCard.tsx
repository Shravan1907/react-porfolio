import React from "react";
import { Card,Button, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { CertificationType } from "../types/sections";

const CertificationCard = ({ sourceLogo, certificationName, source, date, desc, link }: CertificationType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <img
            src={sourceLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={sourceLogo}
          />
          <CardTitle tag="h4" className="mb-2">
            {certificationName}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {source}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">open to view</span>
                </Button>
            ) : null }
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CertificationCard
