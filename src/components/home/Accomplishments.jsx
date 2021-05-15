import React, { useState, useEffect, Profiler } from "react";

import Carousel from "react-bootstrap/Carousel";
import psi from "../../editable-stuff/psi.jpg"
import ps from "../../editable-stuff/ps.jpg"
import jb from "../../editable-stuff/jb.jpg"
import wd from "../../editable-stuff/wd.jpg"
import algo from "../../editable-stuff/algo.jpg"
import hck from "../../editable-stuff/hck.jpg"



const Accomplishments = ({ heading}) => {
  return (

    <section id="Accomplishments" className="section">
    <h2 className="display-4 pb-5 text-center">{heading}</h2>
    <Carousel>

      <Carousel.Item >
        <img
          className="d-block w-50"
          src={psi}
          alt="First slide"
        />
        <Carousel.Caption>
    	<h3>Problem Solving (Intermediate) Certificate </h3>
      </Carousel.Caption></Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50"
          src={ps}
          alt="First slide"
        />
        <Carousel.Caption>
    	<h3>Problem Solving (Basic) Certificate </h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50"
          src={jb}
          alt="First slide"
        />
        <Carousel.Caption>
    	<h3>Java (Basic) Certificate </h3>
      </Carousel.Caption></Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50"
          src={wd	}
          alt="First slide"
        />
        <Carousel.Caption>
    	<h3>The Complete 2020 Web Development Bootcamp </h3>
      </Carousel.Caption></Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50"
          src={algo}
          alt="First slide"
        />
        <Carousel.Caption>
    	<h3>Algorithms Certificate </h3>
      </Carousel.Caption></Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50"
          src={hck}
          alt="First slide"
        />
        <Carousel.Caption>
    	<h3>Hack the Interview V (Rank 16)</h3>
      </Carousel.Caption></Carousel.Item>


    </Carousel>
    </section>
)};

export default Accomplishments;
