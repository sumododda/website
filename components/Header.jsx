import data from "../data/sitedata";

export default function Header() {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h1 className="fade-in">
            Hi, I&apos;m {data.name}{" "}
            <span role="img" aria-label="Emoji">
              😎
            </span>
          </h1>
          <div className="heading-wrapper fade-in-cascade">
            <h1>{data.headerTagline[0] || "Building digital"}</h1>
            <h1>{data.headerTagline[1] || "products, brands"}</h1>
            <h1>{data.headerTagline[2] || "and experience"}</h1>
          </div>
          <p className="fade-in">{data.headerParagraph}</p>
          <a
            href={`mailto:${data.contactEmail || "hello@sumododda.me"}`}
            className="primary-btn fade-in"
          >
            CONNECT WITH ME
          </a>
        </div>
      </div>
    </div>
  );
}
