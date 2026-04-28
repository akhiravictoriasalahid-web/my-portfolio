

function PortfolioCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.screenshots} width="300" className="card-img" />
            <p><b>Tech: </b>{props.tech}</p>

            <h3>Description</h3>
            <p>{props.description}</p>
            
            <h3>My Role</h3>
            <p>{props.role}</p>
            
            <div className="btn-group">
              <a href={props.github} className="repo-btn" target="_blank">
                  View Repo
              </a>
            
              <button className="learn-btn" onClick={props.onClick}>
                  Learn More
              </button>
            </div>
        </div>
    );
}

export default PortfolioCard;