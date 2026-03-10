import data from "../data/sitedata";

export default function Skills() {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={skill.img} alt="skill icon" />
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
