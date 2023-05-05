import React from "react";
import about from "../assets/aboutus.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="main-about">
      <div className="card-about">
        <div
          className="about-top"
          style={{ backgroundImage: `url(${about})` }}
        ></div>
        <div className="about-content">
          <h1>Who Are We ?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quam
            saepe assumenda molestiae nam ad nemo eveniet voluptates provident
            excepturi, iusto id veniam alias placeat, culpa ut commodi
            veritatis! Voluptate optio, architecto ad tenetur debitis qui quae
            facilis sunt est expedita, laudantium et unde illo quam hic maiores
            velit quos perspiciatis excepturi amet? Maxime ab ducimus mollitia
            quia dolore molestias, vero dicta cum. Nisi mollitia molestias
            possimus ab corporis? Quidem repellendus esse eveniet expedita, eos
            accusamus incidunt doloremque suscipit quaerat amet nobis harum,
            blanditiis ex in aliquam ea vel ullam sequi perferendis explicabo!
            Nobis, consequuntur dignissimos soluta minus officiis voluptate!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quam
            saepe assumenda molestiae nam ad nemo eveniet voluptates provident
            excepturi, iusto id veniam alias placeat, culpa ut commodi
            veritatis! Voluptate optio, architecto ad tenetur debitis qui quae
            facilis sunt est expedita, laudantium et unde illo quam hic maiores
            velit quos perspiciatis excepturi amet? Maxime ab ducimus mollitia
            quia dolore molestias, vero dicta cum. Nisi mollitia molestias
            possimus ab corporis? Quidem repellendus esse eveniet expedita, eos
            accusamus incidunt doloremque suscipit quaerat amet nobis harum,
            blanditiis ex in aliquam ea vel ullam sequi perferendis explicabo!
            Nobis, consequuntur dignissimos soluta minus officiis voluptate!
          </p>
        </div>
      </div>
    </div>
  );
}
