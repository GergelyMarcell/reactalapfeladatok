import { useState } from "react";

const Homerseklet = () => {
  const [c, setC] = useState<number>(0);
  const [f, setF] = useState<number>(0);
  const [k, setK] = useState<number>(0);

  return (
    <>
      <h2>Hőmérséklet átváltó</h2>
      <input
        type="number"
        placeholder="Homerseklet"
        onChange={(e) => setC(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setF(c * 1.8 + 32);
          setK(c + 273.15);
        }}
      >
        Számítás!
      </button>
      <p>
        {c} °C = {f} °F
      </p>
      <p>
        {c} °C = {k} °K
      </p>
    </>
  );
};

export default Homerseklet;
