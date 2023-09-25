/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import useSound from "use-sound";
import crabRave from "./Sounds/Noisestorm-CrabRave.mp3";
import crabDance from "./Images/crab-dance.gif";
export default function PartyMode({ emojiData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState("");

  const crabEmojis = Array.from({ length: emojiData.length }, () => {
    return emojiData[0].emoji;
  });

  const filteredEmojis = crabEmojis.filter((emoji) =>
    emoji.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CrabRave = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const soundUrl = crabRave;
    const [play, { stop }] = useSound(soundUrl);

    useEffect(() => {
      if (isButtonHovered) {
        play();
      } else {
        stop();
      }
    }, [isButtonHovered, play, stop]);

    const handleHover = () => {
      setIsButtonHovered(true);
    };

    const handleMouseLeave = () => {
      setIsButtonHovered(false);
    };

    return (
      <img
        src={crabDance}
        alt=""
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
    );
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

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="party-time">
      <h1>Crab Party</h1>
      <CrabRave />
      <input
        type="text"
        placeholder="Search Crab"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="emoji-results">
        {filteredEmojis.map((emoji, index) => (
          <span
            key={index}
            className="emoji"
            onClick={() => handleCopyToClipboard(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      {copiedEmoji && (
        <div className="copy-message">Copied {copiedEmoji} to clipboard!</div>
      )}
    </div>
  );
}
