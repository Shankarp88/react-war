// import { START_GAME } from './actions/actionTypes';

const newDeck = dealGame();
const initialState = {
    cards: newDeck,
    newGame: false,
    description: "",
    playerOneCards: [],
    playerTwoCards: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case "START_GAME":
            return {
                cards: state.cards,
                newGame: true,
                description: "game is loaded"
            };
        case "DEAL_PLAYERS":
            
            return [
                ...state,
            // {
            //    player
            // }
        ];
        default: return state;
    }
}

//Function to get a new deck of cards for our state
function dealGame() {
    let suits = ['C', 'D', 'H', 'S'];
    let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let newDeck = [];
//For loops to create new deck  
    for(var i = 0; i < suits.length; i++) {
        for(var j = 0; j < points.length; j++) {
          var card = {point: points[j], suit: suits[i]};
          newDeck.push(card);
        }
      }
//Shuffle Deck array using sort
    newDeck.sort(() => Math.random() - 0.5);

return newDeck;
// //Set the state with the new array info
// this.setState({ cards: newDeck });
}
