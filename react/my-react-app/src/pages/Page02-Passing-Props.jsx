export function Page02() {
  return (
    <section>
      <h2>
        Bir komponente özellikler geçirebilmek. Passing props to a component
      </h2>
      <CustomButton content="Deneme" />
      <CustomButton content="Hello" />
      <CustomButton content="Ben" />
      <CustomButton content="Sen" />
      <Card theme="dark" hasBorder={false} size="lg" />
      <h2>Children property</h2>
      <p>
        Komponentlerimizi iki parçalı ( açılış ve kapanış parçaları ) jsx
        etiketi olarak yazdığımızda, react komponentin çocuk öğelerini children
        property adı ile gönderecektir.
      </p>
      <NavBar theme="dark" size="lg">
        {" "}
        Ben bir navbar{" "}
      </NavBar>{" "}
      {/* { theme:"dark", size:"lg", children:"Ben bir navbar"} */}
      <NavBar theme="dark" size="lg">
        {" "}
        Ben başka bir navbar
      </NavBar>
      <NavBar name="testing navbar" theme="dark" size="lg">
        {" "}
        {/* { theme:"dark", size:"lg", children:[<CustomButton content="Navbar btn 1"/>, <CustomButton content="Navbar btn 2"/>,   <CustomButton content="Navbar btn 3"/>]} */}
        <CustomButton content="Navbar btn 1" />
        <CustomButton content="Navbar btn 2" />
        <CustomButton content="Navbar btn 3" />
      </NavBar>
      <h2>
        Spread operator kullanarak özellikleri paslamak. Forwarding props via
        spread syntax.{" "}
      </h2>
    </section>
  );
}

//props kelimesi properties kelimesinin kısaltması
function CustomButton(props) {
  console.log(props); // { content:"Deneme" }

  return <button type="button">{props.content}</button>;
}

function Card(props) {
  const theme = props.theme;
  const hasBorder = props.hasBorder;
  const size = props.size;

  return <div>I am a card component</div>;
}

function Card2(props) {
  return (
    <div>
      I am a card component {props.theme} {props.size} {props.hasBorder}
    </div>
  );
}

function Card3(props) {
  const { theme, size, hasBorder } = props;

  return <div>I am a card component </div>;
}

// parametre parantezi içerisinde gelen props objesinin keylerinin destructuring ile toplayabilirsin
function Card4({ theme = "dark", size, hasBorder }) {
  return <div>I am a card component </div>;
}

// { deneme:"3", children:"Ben bir navbar"}
function NavBar(props) {
  //console.log(props.name, props.children);
  const children = props.children;
  return <nav style={{ border: "2px solid red" }}>{children}</nav>;
}

function NavBar2({ theme, size, children }) {
  return (
    <nav>
      {theme} {size} {children}
    </nav>
  );
}

// <Profile person="Burak" size="md" theme="dark" hasBorder={false} isSepia={false}/>

function Profile(props) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
}

function Avatar({ person, size, theme, hasBorder, isSepia }) {
  return (
    <div>
      Ben avatar
      <h4>{person}</h4>
    </div>
  );
}
