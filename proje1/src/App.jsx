import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Alias animi similique ullam sequi maxime rem corrupti, 
        perspiciatis excepturi facere dolor, voluptate ratione quam vitae accusantium voluptates quidem. 
        Non, atque sequi."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Alias animi similique ullam sequi maxime rem corrupti, 
      perspiciatis excepturi facere dolor, voluptate ratione quam vitae accusantium voluptates quidem. 
      Non, atque sequi."
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Alias animi similique ullam sequi maxime rem corrupti, 
      perspiciatis excepturi facere dolor, voluptate ratione quam vitae accusantium voluptates quidem. 
      Non, atque sequi."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Alias animi similique ullam sequi maxime rem corrupti, 
      perspiciatis excepturi facere dolor, voluptate ratione quam vitae accusantium voluptates quidem. 
      Non, atque sequi."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
