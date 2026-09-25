import { useRef, useState } from "react";

const Szamologep = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [valaszt, setValaszt] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <h2>Számológép</h2>
      <input ref={inputRef1} type="number" placeholder="1" />
      <select onChange={(e) => setValaszt(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input ref={inputRef2} type="number" placeholder="1" />
      <button
        onClick={() => {
          switch (valaszt) {
            case "+":
              setEredmeny(
                `Eredmény: ${Number(inputRef1.current.value) + Number(inputRef2.current.value)}`,
              );
              break;
            case "-":
              setEredmeny(
                `Eredmény: ${Number(inputRef1.current.value) - Number(inputRef2.current.value)}`,
              );
              break;
            case "*":
              setEredmeny(
                `Eredmény: ${Number(inputRef1.current.value) * Number(inputRef2.current.value)}`,
              );
              break;
            case "/":
              setEredmeny(
                `Eredmény: ${Number(inputRef1.current.value) / Number(inputRef2.current.value)}`,
              );
              break;
          }
        }}
      >
        Számolás
      </button>
      <p>{eredmeny}</p>
    </>
  );
};

export default Szamologep;
