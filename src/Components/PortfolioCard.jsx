

function PortfolioCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.screenshots} width="300" className="card-img" />
            <p><b>Tech: </b>{props.tech}</p>

            <h3>Description</h3>
            <p>{props.description}</p>
            
            <h3>What the Project Does</h3>
            <ul>
                {props.what.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

             <h3>What I Learned</h3>
            <ul>
                {props.learned.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <h3>My Role</h3>
            <p>{props.role}</p>
            
            <h3>Challenges I Solved</h3>
            <ul>
                {props.challenges.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <a href={props.github} className="repo-btn" target="_blank">View Repo</a>
        </div>
    );
}

export default PortfolioCard;