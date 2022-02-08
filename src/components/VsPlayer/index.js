import "./style.css";

const VsPlayer = (content = "VS") => {
    return /*html*/ `
        <span class="vs-player">${content}</span>
    `;
}

export default VsPlayer;