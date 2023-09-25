/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Search({ emojiData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState("");
  const filteredEmojis = emojiData.filter((emojiObj) =>
    emojiObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCopyToClipboard = (emoji) => {
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        setCopiedEmoji(emoji);
        setTimeout(() => {
          setCopiedEmoji("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="search-bar">
      <h1>Emoji Sorter</h1>
      <input
        type="text"
        placeholder="Search by emoji name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="elevation">
        <div className="emoji-results">
          {filteredEmojis.map((emojiObj) => (
            <span
              key={emojiObj.name}
              onClick={() => handleCopyToClipboard(emojiObj.emoji)}
              className="emoji"
            >
              {emojiObj.emoji}
            </span>
          ))}
        </div>
      </div>
      {copiedEmoji && (
        <div className="copy-message">Copied {copiedEmoji} to clipboard!</div>
      )}
    </div>
  );
}
