import { useState, useEffect } from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import colorsArr from "./colors";
import {
  Container,
  Title,
  QuoteApp,
  QuoteContainer,
  Quote,
  Author,
  Button,
  Link,
  ButtonContainer
} from "./App.styled";
import "./styles.css";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [selectedData, setSelectedData] = useState({
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  });
  const [selectedColor, setSelectedColor] = useState("#16a085");

  const [ fade, setFade ] = useState(false)
 

  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);

  useEffect(() => {
    const getQuotes = async () => {
      const resQuotes = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const jsonQuotes = await resQuotes.json();

      setQuotes(jsonQuotes.quotes);
    };
    getQuotes();
  }, []);

  const handleClick = (e) => {
    let randomQuoteIndex = Math.floor(Math.random() * 102);
    let randomColorIndex = Math.floor(Math.random() * 12);

    setSelectedData({
      quote: quotes[randomQuoteIndex].quote,
      author: quotes[randomQuoteIndex].author
    });

    setSelectedColor(colorsArr[randomColorIndex]);
  };

  return (
    <Container>
      <Title>
        Daily Quotes <BsFillChatLeftQuoteFill className="title-icon" />
      </Title>
      <QuoteApp id="quote-box" color={selectedColor}>
        <QuoteContainer fade={fade}>
          <Quote id="text">
            <FaQuoteLeft className="quote-icon" />
            {selectedData.quote}
          </Quote>
          <Author id="author">- {selectedData.author}</Author>
        </QuoteContainer>
        <ButtonContainer backgroundColor={selectedColor}>
          <Link
            id="tweet-quote"
            padding="0.725em 0.775em"
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent(
                '"' + selectedData.quote + '" ' + selectedData.author
              )
            }
            target="_top"
          >
            <FaTwitter />
          </Link>
          <Button
            id="new-quote"
            padding="0.725em 0.225em"
            onClick={handleClick}
          >
            New quote
          </Button>
        </ButtonContainer>
      </QuoteApp>
    </Container>
  );
}

export default App
