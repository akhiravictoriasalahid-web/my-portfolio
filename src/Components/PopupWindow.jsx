function PopupWindow({project, onClose}) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>{project.name}</h2>
                <img src={project.screenshots} width="300" />

                <p><b>Tech:</b>{project.tech}</p>
                <p>{project.description}</p>

                <ul>
                    {project.what.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <a href={project.github} target="_blank">View Repo</a>

                <br />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupWindow;