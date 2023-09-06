import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//useState - Komponent içindeki state değişkenini güncelleyerek rerender talep eder (triggers ) -

//useRef - rerender talep etmez

function App() {
  const [testing, setTesting] = useState();
  const counter = useRef(0); // { current:0 }
  let num = 0;

  function handleClick() {
    counter.current = counter.current + 1;
    num++;
    console.log(counter.current, num);
  }

  console.log(counter.current, "*****", num);

  return (
    <>
      <h1>useRef</h1>
      <button onClick={handleClick}>{counter.current}</button>
      <button onClick={() => setTesting(Math.random())}>Rerender please</button>

      <StopWatch />
      <FocusTheInput />
    </>
  );
}

function StopWatch() {
  const [startTime, setStartTime] = useState(null); //1200
  const [now, setNow] = useState(null); //1300
  const myInterval = useRef(null);

  function handleStart() {
    setStartTime(Date.now()); //1200;
    setNow(Date.now()); //1200;

    myInterval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(myInterval.current);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Geçen zaman:{secondsPassed}</h1>
      <button onClick={handleStart}>Başlat</button>
      <button onClick={handleStop}>Durdur</button>
    </div>
  );
}

function FocusTheInput() {
  const myInputRef = useRef(null);

  console.log(myInputRef.current)

  function handleFocus() {
    //document.getElementById("theInput").focus(); //don't
    myInputRef.current.focus();
  }

  return (
    <form style={{ marginTop: "40px" }}>
      <h2>useRef Kullanımı</h2>
      <input ref={myInputRef} type="text" id="theInput" />
      <button type="button" onClick={handleFocus}>
        Input&apos;a focus lütfen...
      </button>
    </form>
  );
}

export default App;
