import { useState } from "react";

const Szamologep = () => {
  const [szam1, setSzam1] = useState<number>(0);
  const [szam2, setSzam2] = useState<number>(0);
  const [valaszt, setValaszt] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <h2>Számológép</h2>
      <input
        onChange={(e) => setSzam1(Number(e.target.value))}
        type="number"
        placeholder="1"
      />
      <select onChange={(e) => setValaszt(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        onChange={(e) => setSzam2(Number(e.target.value))}
        type="number"
        placeholder="1"
      />
      <button
        onClick={() => {
          switch (valaszt) {
            case "+":
              setEredmeny(`Eredmény: ${szam1 + szam2}`);
              break;
            case "-":
              setEredmeny(`Eredmény: ${szam1 - szam2}`);
              break;
            case "*":
              setEredmeny(`Eredmény: ${szam1 * szam2}`);
              break;
            case "/":
              setEredmeny(`Eredmény: ${szam1 / szam2}`);
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
