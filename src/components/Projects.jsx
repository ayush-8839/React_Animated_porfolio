import React from "react";
import Project from "./Data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {Project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                >
                  <div className="img d-flex justify-content-center align-content-center">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "250px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
