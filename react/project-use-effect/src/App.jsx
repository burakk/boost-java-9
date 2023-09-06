import { useEffect } from "react";
import "./App.css";

//useEffect callback function'ı render bittikten sonra çalışır

function App() {
  return <MyComponent />;
}

function MyComponent() {

  //[todos, setTodos] = useState()

  //todo'ları getiren bir api bağlantısı yap
  //todos undefined

  useEffect(() => {
    //sideEffects ( api bağlantıları )
    //todo'ları getiren bir api bağlantısı yap
    console.log("I am from useEffect");
  });

  console.log("MyComponent");

  return <h1>Hello   </h1>;
  //todo'lar içerisinde dönerek li jsx'leri ile yazdır
}

export default App;
