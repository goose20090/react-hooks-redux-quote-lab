// Action Creators
// TODO: Create action creators as defined in tests

export function addQuote(quote){
  return { 
    type: "quotes/add",
    payload: quote,
   };
}

export function removeQuote(quote){
  return{
    type: "quotes/remove",
    payload: quote,
  }
}

export function upvoteQuote(num){
  return{
    type: "quotes/upvote",
    payload: num
  }
}

export function downvoteQuote(num){
  return{
    type: "quotes/downvote",
    payload: num
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type){
    case "quotes/add":
      return [...state, action.payload];

    case "quotes/remove":
      return state.filter((quote)=> quote.id !== action.payload);
    
    case "quotes/upvote":
    
      // find the quote to upvote
      return state.map((quote) =>
      quote.id === action.payload ? 
      // return a copy of the quote object with the votes key value incremented
      { ...quote, votes: quote.votes + 1 } : 
      // return a copy of the quotes object, unchanged
      quote);

    case "quotes/downvote":
      return state.map((quote)=>
      quote.id === action.payload && quote.votes > 0 ? { ...quote, votes: quote.votes - 1 }: quote);
  default:
  return state;
}
}
