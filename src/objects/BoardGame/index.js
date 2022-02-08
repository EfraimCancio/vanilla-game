import "./style.css"
import CardFrontBack from  "../../components/CardFrontBack";
import cards from "./data";


const BoardGame = (amountCards) => {
    const flipAndHideCards = ($cardsActives) => {
        $cardsActives.forEach((card) => card.classList.remove('-active'));
    }
    const swapPlayer = ($arrowDown) => {
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
        $arrowDown.setAttribute('data-currentplayer' , currentPlayer == 1 ? 2 : 1);
    }

    window.boardGame = {}
    
    window.boardGame.handleClick = () => {
        const $boarGame = document.querySelector('.board-game');
        const $arrowDown = document.querySelector('.arrow-down');
        const $cardsActives = $boarGame.querySelectorAll('.card-front-back.-active');

        if ($cardsActives.length === 2) {
            setTimeout(() => {
                
                flipAndHideCards($cardsActives)
                swapPlayer($arrowDown)
            }, 1000);
        }
    };
   
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardsList.join('');

    return /*html*/ `
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
       `;
};

export default BoardGame;