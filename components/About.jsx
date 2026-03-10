import data from "../data/sitedata";

export default function About() {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <h1 className="fade-in">About Me</h1>
            <p>
              {data.aboutParaOne}
              <br />
              <br />
              {data.aboutParaTwo}
              <br />
              <br />
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.aboutImage} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
