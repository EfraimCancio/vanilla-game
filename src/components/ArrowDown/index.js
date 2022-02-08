import "./style.css"

const ArrowDown = (currentPlayer = 1) => {

    return /*html*/ `       
            <img data-currentplayer="${currentPlayer}" 
                 class="arrow-down" 
                 src="images/IconArrowDown.png" 
                 alt="Ícode de seta para baixo"
            >        
    `;
}

export default ArrowDown;