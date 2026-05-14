import { showsList, featuredShow } from "../data/showsData";

export default function Shows({ dict }: { dict: any }) {
  return (
    <section id="shows">
      <div className="container">
        <div className="shows-layout">
          
          <div>
            <div className="section-label reveal">{dict.label}</div>
            <h2 className="section-title reveal reveal-delay-1">{dict.title} <em>{dict.title_em}</em></h2>
            
            <div style={{ marginTop: '2.5rem' }}>
              {showsList.map((show, index) => (
                <div key={show.id} className={`show-item reveal reveal-delay-${(index % 3) + 1}`}>
                  <div className="show-date">
                    <span className="show-date-num">{show.day}</span>
                    <span className="show-date-month">{show.month}</span>
                  </div>
                  <div className="show-info">
                    <h4>{show.venue}</h4>
                    <p>{show.location}</p>
                  </div>
                  <a href={show.ticketLink} style={{ textDecoration: 'none' }} className="show-ticket">
                    {show.ticketLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="shows-aside reveal reveal-delay-2">
            <div className="next-show-card">
              <div className="next-show-date">
                {featuredShow.label}<span>{featuredShow.highlightDate}</span>
              </div>
              <div className="next-show-venue">{featuredShow.title}</div>
              <div className="next-show-details">
                {featuredShow.infoLine1}<br />
                <strong>{featuredShow.infoHighlight}</strong><br /><br />
                {featuredShow.infoLine2}
              </div>
              <a href={featuredShow.buttonLink} className="btn-primary">
                {featuredShow.buttonText}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}