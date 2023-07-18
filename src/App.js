import React, { useState } from "react";

const DisplayText = ({ text, maxLength }) => {
  const [textHidden, setTextHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  return (
    <div>
      <span>
        {textHidden ? `${text.substr(0, maxLength).trim()}.......` : text}
        <br />
        <br />
        {textHidden ? (
          <button onClick={() => setTextHidden(false)}>read more</button>
        ) : (
          <button onClick={() => setTextHidden(true)}>read less</button>
        )}
      </span>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <DisplayText
        text={`The real purpose of life is to spread love to others. If we can focus on that, the word will be a wonderful place. Let us all strife together to make this our aim.Indoing so we will achieve huge success in creating a better place on earth for everyone`}
        maxLength={75}
      />
    </div>
  );
};

export default App;
