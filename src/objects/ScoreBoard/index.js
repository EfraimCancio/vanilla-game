import "./style.css"
import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer"
import PlayerScore from "../../components/PlayerScore"
import ArrowDown from "../../components/ArrowDown"

const ScoreBoard = () => {
    return /*html*/ `
        <header class="score-board">
            ${ArrowDown(1)}
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(2)}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;