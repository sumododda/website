import data from "../data/sitedata";

export default function Experience() {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="work-wrapper">
          <h1 className="fade-in">Experience</h1>
          <div className="grid fade-in-cascade" style={{ gridTemplateColumns: '1fr', gridGap: '20px' }}>
            {data.experience.map((job, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                width: '100%',
                textAlign: 'left'
              }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>{job.title}</h2>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#666', fontWeight: 'normal' }}>
                  {job.company} | {job.date}
                </h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555', lineHeight: '1.6' }}>
                  {job.bullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
