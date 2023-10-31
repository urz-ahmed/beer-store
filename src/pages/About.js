import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <div class="section-title-one">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <div class="content">
                  <h2 class="fw-bold">About Our Open-Source Project</h2>
                  <section class="container mt-4">
                    <h2>Introduction</h2>
                    <p>
                      Welcome to our open-source project! We're excited to
                      welcome contributors from the community. Our project is
                      all a fake beer store where contributors can get involved.
                      To encourage contributors to participate and "clean their
                      hands" (meaning to gain experience and enhance their
                      skills), you can create a contributing guide tailored to
                      your project.. We value your input and contributions to
                      make this project even better.
                    </p>
                  </section>

                  <section class="container mt-4">
                    <h2>How to Contribute</h2>
                    <ol>
                      <li>Fork the repository on GitHub.</li>
                      <li>Clone your fork to your local machine.</li>
                      <li>Create a new branch for your contribution.</li>
                      <li>
                        Make your changes and commit them with clear, concise
                        messages.
                      </li>
                      <li>Push your changes to your GitHub fork.</li>
                      <li>Create a pull request to our main repository.</li>
                      <li>
                        Our team will review your contribution, and we'll work
                        together to get it merged.
                      </li>
                    </ol>
                    <p>
                      For more detailed contribution guidelines, please refer to
                      our{" "}
                      <a target="blank" href="https://github.com/urz-ahmed/beer-store">
                        repository
                      </a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
