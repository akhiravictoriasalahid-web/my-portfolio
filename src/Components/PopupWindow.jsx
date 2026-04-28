import "./PopupWindow.css";

function PopupWindow({project, onClose}) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>{project.name}</h2>
                <img src={project.screenshots} width="300" />

                <h3>What the Project Does</h3>
                <ul>
                    {project.what?.map((item, i) => (
                        <li key={{i}}>{item}</li>
                    ))}
                </ul>

                <h3>What I Learned</h3>
                <ul>
                    {project.learned?.map((item, i) => (
                        <li key={{i}}>{item}</li>
                    ))}
                </ul>

                <h3>Challenges I Solved</h3>
                <ul>
                    {project.challenges?.map((item, i) => (
                        <li key={{i}}>{item}</li>
                    ))}
                </ul>

                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupWindow;