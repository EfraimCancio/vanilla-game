import "./style.css"
import CardGame from "../CardGame"; 

const CardFrontBack = (icon, altIcon) => {
 
    window.cardFrontBack = {};

    window.cardFrontBack.hendleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active');
    };

    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.hendleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">   
                ${CardGame(icon , altIcon)}
            </div>    
        </article>
    `;
};

export default CardFrontBack;