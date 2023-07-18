import React, { useState } from "react";

const DisplayText1 = ({ text1, maxLength }) => {
  const [text1Hidden, setText1Hidden] = useState(true);

  if (text1.length <= maxLength) {
    return <span>{text1}</span>;
  }
  return (
    <div>
      <span>
        {text1Hidden ? `${text1.substr(0, maxLength).trim()}.......` : text1}
        <br />
        <br />
        {text1Hidden ? (
          <button onClick={() => setText1Hidden(false)}>read more</button>
        ) : (
          <button onClick={() => setText1Hidden(true)}>read less</button>
        )}
      </span>
    </div>
  );
};

const DisplayText2 = ({ text2 }) => {
  if (text2.includes("Pukeko")) {
    return <span>"YES text2 definitely have the word Pukeko"</span>;
  } else {
    return <span>"No text2 DON'T have the word Pukeko"</span>;
  }
};

const App = () => {
  return (
    <div className="App">
      <DisplayText1
        text1={`The real purpose of life is to spread love to others. If we can focus on that, the word will be a wonderful place. Let us all strife together to make this our aim.Indoing so we will achieve huge success in creating a better place on earth for everyone`}
        maxLength={75}
      />
      <br />
      <DisplayText2 text2={`The Pukeko is swimming in the Lake`} />
    </div>
  );
};

export default App;
