import Card from "./Card";
import data from "../data/sitedata";

export default function Work() {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h1 className="fade-in">Projects</h1>
          <div className="grid fade-in-cascade">
            {data.projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
