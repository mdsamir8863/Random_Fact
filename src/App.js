// import "./App.css";
// import handleSubmit from "./handles/handlesubmit";
// import { useRef } from "react";
// function App() {
//   const dataRef = useRef();
//   const submithandler = (e) => {
//     e.preventDefault();
//     handleSubmit(dataRef.current.value);
//     dataRef.current.value = "";
//   };
//   return (
//     <div className="App">
//
//       <form onSubmit={submithandler}>
//
//         <input type="text" ref={dataRef} />
//                 <button type="submit">Save</button>
//
//       </form>
//
//     </div>
//   );
// }
// export default App;

import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [fact, setFact] = useState("");
  const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  };
  useEffect(() => {
    fetchFact();
  }, []);
  const handleClick = () => {
    fetchFact();
  };
  return (
    <div className="App">
          <h1 className="heading">Press the button for a random cat fact!</h1>
          
          <button className="factBtn" onClick={() => handleClick()}>Get Cat fact</button>
        
      <div className="factContainer">
          <p>{fact}</p>
      </div>
        
    </div>
  );
}
export default App;

// import axios from &lsquo;axios&rsquo;
// const fetchFact = () => {
//   axios.get("https://catfact.ninja/fact").then((response) => {
//   setFact(response.data.fact)
//   });
// }
