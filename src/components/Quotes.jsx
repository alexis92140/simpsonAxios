import { useState } from "react";
import axios from "axios";

// Je définis ma variable QuoteList
const QuoteList = () => {
  const [quotes, setQuotes] = useState([
    {
    quote: "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
    character: "Milhouse Van Houten",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
    characterDirection: "Right"
    }
    ]);
  //   J'appel gentillement mon API et je choisis les DATA pour resultat
const getQuote = () => {
  axios
    .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    .then((res) => (res.data))
    .then((data) => setQuotes(data))
}
  

  return (
    <div>
        <button type="button" onClick={getQuote}>Say something</button>

{quotes.map((quote) => 
(
<>
<p>{quote.quote}</p>
<p>{quote.character}</p>
<img src={quote.image} alt="okioki" />
</>
)

)}


      
      
    </div>
  );
};

export default QuoteList;
