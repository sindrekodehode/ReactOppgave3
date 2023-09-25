// eslint-disable-next-line react/prop-types
export default function Secret({ setPartyMode }) {
  const handlePartyClick = () => {
    setPartyMode((prevPartyMode) => !prevPartyMode);
  };
  return (
    <div className="btn-container">
      <p>Do not push</p>
      <button className="party-button" onClick={handlePartyClick}></button>
    </div>
  );
}
