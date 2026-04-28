import "./PopupWindow.css";

function PopupWindow({project, onClose}) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>{project.name}</h2>
                <img src={project.screenshots} width="300" />

                <p><b>Tech: </b>{project.tech}</p>

                <h3>Description</h3>
                <p>{project.description}</p>

                <a href={project.github} target="_blank">View Repo</a>

                <br />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupWindow;