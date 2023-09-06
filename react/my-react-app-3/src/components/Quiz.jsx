import { useState } from "react";

export function Quiz() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(""); // "typing", "submitting", "success"

  function handleChange(e) {
    setAnswer(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");
    //send the answer

    submitAnswer(answer)
      .then((resp) => {
        setStatus(resp);
      })
      .catch((err) => {
        setStatus("typing");
        setError(err);
      });
  }

  if (status === "success") {
    return <p>Tebrikler kazandınız</p>;
  }

  return (
    <div>
      <h1>Quiz</h1>

      <p>İki kıtada var olan şehri yazınız.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="answer"
          id="answer"
          placeholder="Cevabınız"
          value={answer}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={answer.length < 3 || status === "submitting" ? true : false}
        >
          Cevapla
        </button>
      </form>

      {error && <p>Tekrar deneyiniz.</p>}
    </div>
  );
}

function submitAnswer(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLocaleLowerCase("tr-Tr") === "istanbul") {
        resolve("success");
      } else {
        reject(new Error("Error"));
      }
    }, 1500);
  });
}
