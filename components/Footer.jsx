import data from "../data/sitedata";

export default function Footer() {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1 className="fade-in">Contact</h1>
          <h2 className="fade-in">{data.contactSubHeading}</h2>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={socialLink.img} alt="social icon" />
              </a>
            ))}
          </div>
          <span>
            Made With <span style={{ color: "red" }}>❤</span> by{" "}
            <a href="https://www.sumododda.me/">Sumanth Dodda</a>
          </span>
        </div>
      </div>
    </div>
  );
}
