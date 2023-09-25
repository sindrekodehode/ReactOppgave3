import { useState } from "react";
import Search from "./Search";
import Secret from "./Secret";
import PartyMode from "./PartyMode";
import { EmojiData } from "./EmojiData";

function App() {
  const [partyMode, setPartyMode] = useState(false);

  return (
    <div className="App">
      {partyMode ? (
        <PartyMode emojiData={EmojiData} />
      ) : (
        <Search emojiData={EmojiData} />
      )}
      <Secret setPartyMode={setPartyMode} />
    </div>
  );
}

export default App;
