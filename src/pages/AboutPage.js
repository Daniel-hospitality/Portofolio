import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import "./HacPage.css";

function AboutPage(props) {
  return (
    <div className="AboutPage">
      <Hero title={props.title} stylingClass="About2" />

      <Content>
        <p className="AboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo
          earum repellendus, eum est ratione neque odit quae minima impedit modi
          eaque vero quisquam libero fuga porro reiciendis nihil aliquid! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Nobis iure vero
          recusandae corporis ducimus nulla facere corrupti quos minus hic
          expedita quis, perferendis fugit animi, voluptatibus est esse nemo
          error! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Delectus id omnis quidem suscipit. Consequatur quam minus laudantium
          debitis numquam atque! Magni nesciunt ratione veniam optio ut dolores
          voluptatum in saepe. Lorem ipsum dolor sit amet consectetur
        </p>
        
      </Content>
    </div>
  );
}

export default AboutPage;
