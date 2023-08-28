/* --- Jsx içinde süslü parantez ile js expression kullanmak ---- */
export function Page01() {
  return (
    <section>
      <h2>Jsx içerisinde süslü parantez çifti ile js expression &apos; ları kullanmak</h2>

      <MyButton />

      <SquareShape />

      <CircleShape />

      <RectangleShape />

      <RedBall />

      <BlueBall />

      <YellowBall />
    </section>
  );
}

function MyButton() {
  const buttonsFirstName = "Jack";
  const buttonsLastName = "Joe";
  buttonsFirstName + buttonsLastName;
  return <button>{buttonsFirstName + buttonsLastName}</button>;
}

function SquareShape() {
  const edgeLength = 12;

  return <div>Ben çevresi {edgeLength * 4} px olan bir kareyim</div>;
}

function CircleShape() {
  const Pi = 3.1415;
  const radius = 14;

  return <p>Ben çevresi {Pi * 2 * radius} olan bir çemberim</p>;
}

function RectangleShape() {
  const shapeName = "rectangle";
  const shabeType = "basic";

  //rectangle-basic

  return <div className={`${shapeName}-${shabeType}`}>Ben bir dörtgenim</div>;
}

/* --- Jsx içinde süslü parantezin yanlış kullanımı ---- 
  
  function InvalidShape(){
    const tagName = "div";
    return <{tagName}>deneme</{tagName}>
  }
  */

//style özelliğinin değeri olarak js object kullanmak. css özellik isimlerini camel olarak yazabilirsiniz...
function RedBall() {
  const ballStyle = {
    backgroundColor: "red",
    border: "2px solid black",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };
  return <div style={ballStyle}>Kırmızı top</div>;
}

function BlueBall() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        border: "2px solid black",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
      }}
    >
      Mavi top
    </div>
  );
}

function YellowBall() {
  const yellowBallProperties = {
    id: 1,
    theme: {
      backgroundColor: "yellow",
      border: "2px solid black",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
  };

  return <div style={yellowBallProperties.theme}>Sarı top</div>;
}
