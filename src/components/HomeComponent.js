import { faCalendarAlt, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Carousel, OverlayTrigger, Popover } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div style={{ height: "500vh" }} className="home container-fluid">
        <div className="row p-5">
          <div className="col-12 col-md-6 pt-5">
            <h1 style={{ color: "white" }}>Tech-Tyros</h1>
            <p style={{ color: "whitesmoke" }}>
              Qui tempor occaecat velit labore commodo in nisi. Commodo quis
              adipisicing minim do exercitation aliqua proident nostrud non id
              sunt eu nostrud proident. Minim veniam ut adipisicing ea pariatur
              commodo anim non sint aute minim dolor in. Non fugiat laboris
              labore culpa sunt pariatur do irure do sit incididunt eiusmod.
            </p>
          </div>
          <div className="col-12 col-md-6 pt-5">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="images/boy.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="images/boy.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/boy.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row hometext">
          <div className="col-12 col-md-6 p-3 p-md-5">
            <h1>Live Online Coding Classes for kids in Grade 1-12</h1>
            <p style={{ color: "6d8191" }}>
              Culpa ullamco eiusmod consequat ea labore fugiat aliquip sit nisi.
              Ut magna fugiat consectetur culpa enim consequat ea sit irure
              velit laboris ex esse. Mollit ea non eu anim eiusmod sunt aute
              commodo consequat dolor consectetur ullamco. Exercitation fugiat
              et deserunt deserunt proident. Aliquip sit labore enim commodo
              Lorem commodo culpa ea cillum labore excepteur anim velit.
            </p>
            <button type="button" className="btn btn-warning btn-lg"><FontAwesomeIcon icon={faCalendarAlt} /> Book a FREE Trail</button>
          </div>
          <div className="col-12 col-md-6 p-3 p-md-5">
            <img src="images/learn.png" className="img-fluid" />
          </div>
        </div>
        <div className="m-md-5">
          <div className="quality m-3 m-md-5 text-center">
            <h1 className="p-2">Qualities Your Kid will gain</h1>
            <div className="row p-2">
              <div className="col">
                <OverlayTrigger
                  overlay={
                    <Popover>
                      <Popover.Content>
                        Programming first step is logic building. We teach our
                        future techies the logic making.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <span>
                    <img src="images/logic.png" className="img-fluid" />
                    <p>Logic</p>
                  </span>
                </OverlayTrigger>
              </div>
              <div className="col">
                <OverlayTrigger
                  overlay={
                    <Popover>
                      <Popover.Content>
                        Crack the algorithm behind each problem.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <span>
                    <img src="images/algo.png" className="img-fluid" />
                    <p>Algorithm</p>
                  </span>
                </OverlayTrigger>
              </div>
              <div className="col">
                <OverlayTrigger
                  overlay={
                    <Popover>
                      <Popover.Content>
                        Sequencing is further process for making efficient
                        programming.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <span>
                    <img src="images/sequence.png" className="img-fluid" />
                    <p>Sequence</p>
                  </span>
                </OverlayTrigger>
              </div>
              <div className="col">
                <OverlayTrigger
                  overlay={
                    <Popover>
                      <Popover.Content>
                        Learn structure in languages.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <span>
                    <img src="images/structure.png" className="img-fluid" />
                    <p>Structure</p>
                  </span>
                </OverlayTrigger>
              </div>
              <div className="col">
                <OverlayTrigger
                  overlay={
                    <Popover>
                      <Popover.Content>
                        Have out of box thinking.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <span>
                    <img src="images/creative.png" className="img-fluid" />
                    <p>Creative Thinking</p>
                  </span>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
