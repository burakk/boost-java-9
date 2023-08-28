export function Page02() {
  return (
    <section>
      <h2>
        Bir komponente özellikler geçirebilmek. Passing props to a component
      </h2>

      <CustomButton content="Deneme"/>
      <CustomButton content="Hello"/>
      <CustomButton content="Ben"/>
      <CustomButton content="Sen"/>
    </section>
  );
}

//props kelimesi properties kelimesinin kısaltması
function CustomButton(props) {
  console.log(props);


  return <button type="button">{props.content}</button>;
}
