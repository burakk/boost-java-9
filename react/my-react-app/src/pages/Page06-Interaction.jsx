export function Page06() {
  return (
    <section>
      <h2>Interaction</h2>
      <Button>Deneme</Button>
      <ButtonV2>Deneme</ButtonV2>

      <MessageButton message="Life is hard...">Message 1</MessageButton>
      <MessageButton message="Life is beautiful...">Message 2</MessageButton>

      <div>
        <PlayButton />
      </div>

      <div>
        <UploadButton />
      </div>

      <NavBar />

      <FrmLogin />
    </section>
  );
}

//{}, {children:"Deneme"}
//user events - click, mouseover, mouseout ...
function Button({ children }) {
  function handleClick(e) {
    console.log(e.target);
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

function ButtonV2({ children }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        console.log("Btn v2");
      }}
    >
      Btn v2{children}
    </button>
  );
}

function ButtonV3({ children }) {
  return (
    <button
      type="button"
      onClick={() => {
        alert("Button3");
      }}
    >
      {children}
    </button>
  );
}

function MessageButton({ message, children }) {
  return (
    <button type="button" onClick={() => console.log(message)}>
      {children}
    </button>
  );
}

// --- **** passing event handler callback functions as props **** --- //

function BaseButton({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function PlayButton() {
  function handlePlay() {
    alert("Şimdi oynatılıyor");
  }
  return <BaseButton onSmash={handlePlay}>Play</BaseButton>;
}

function UploadButton() {
  function handleUpload() {
    alert("Şimdi yükleniyor");
  }
  return <BaseButton onSmash={handleUpload}>Upload</BaseButton>;
}

// --- Event propagation ( olayın yayılması ) ---

function NavBar() {
  const navBarStyles = {
    border: "2px solid red",
    backgroundColor: "pink",
    padding: "16px",
  };
  return (
    <nav style={navBarStyles} onClick={() => alert("Ben navbar, selam.")}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          alert("Ben buton1, selam.");
        }}
      >
        Buton 1
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          alert("Ben buton2, selam.");
        }}
      >
        Buton 2
      </button>
    </nav>
  );
}

// --- Event preventing default behaviour

function FrmLogin() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Deneme");
      }}
    >
      <h2>Üye girişi</h2>
      <input type="text" name="firstName" placeholder="Adınız" />
      <input type="text" name="LastName" placeholder="Soyadınız" />

      <button type="submit">Gönder</button>

      <a
        href="https://github.com"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Githuba gider
      </a>
    </form>
  );
}
