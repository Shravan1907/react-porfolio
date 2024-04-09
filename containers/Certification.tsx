import React from "react";
import { certification }  from "../portfolio";
import { Container, Row } from "reactstrap";
import CertificationCard from "../components/CertificationCard";
import Fade from "react-reveal/Fade";

const Certification = () => {
  return (
    certification && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Certification</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {certification.map((data, i) => {
                return <CertificationCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Certification;
