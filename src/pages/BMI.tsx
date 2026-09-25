import { useRef, useState } from "react";

const BMI = () => {
  const inputRefSuly = useRef<HTMLInputElement>(null);
  const inputRefMag = useRef<HTMLInputElement>(null);
  const [bmi, setBmi] = useState<number>(20.1);
  const [eredmeny, setEredmeny] = useState<string>("Normal");
  return (
    <>
      <h2>BMI</h2>
      <label htmlFor="suly">Testsúly (kg)</label>
      <input id="suly" type="number" placeholder="65" ref={inputRefSuly} />
      <label htmlFor="mag">Magasság (cm)</label>
      <input id="mag" type="number" placeholder="180" ref={inputRefMag} />
      <button
        onClick={() => {
          setBmi(
            Number(inputRefSuly.current.value) /
              Math.pow(Number(inputRefMag.current.value) / 100, 2),
          );
          if (bmi < 16) {
            setEredmeny("Súlyos soványság");
          } else if (bmi >= 16 && bmi < 17) {
            setEredmeny("Mársákelt soványság");
          } else if (bmi >= 17 && bmi < 18.5) {
            setEredmeny("Enyhe soványság");
          } else if (bmi >= 18.5 && bmi < 25) {
            setEredmeny("Normál testsúly");
          } else if (bmi >= 25 && bmi < 30) {
            setEredmeny("Túlsúlyos");
          } else if (bmi >= 30 && bmi < 35) {
            setEredmeny("Elhízott (I. fokú)");
          } else if (bmi >= 35 && bmi < 40) {
            setEredmeny("Elhízott (II. fokú)");
          } else if (bmi >= 40) {
            setEredmeny("Elhízott (III. fokú)");
          } else {
            setEredmeny("HIBA!");
          }
        }}
      >
        Számítás!
      </button>
      <p>BMI: {bmi.toFixed(1)}</p>
      <p>Állapot: {eredmeny}</p>
    </>
  );
};

export default BMI;
