import { useRef, useState } from "react";

const Homerseklet = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [f, setF] = useState<number>(0);
  const [k, setK] = useState<number>(0);

  return (
    <>
      <h2>Hőmérséklet átváltó</h2>
      <input type="number" placeholder="Homerseklet" ref={inputRef} />
      <button
        onClick={() => {
          setF(Number(inputRef.current.value) * 1.8 + 32);
          setK(Number(inputRef.current.value) + 273.15);
        }}
      >
        Számítás!
      </button>
      <p>{f} °F</p>
      <p>{k} °K</p>
    </>
  );
};

export default Homerseklet;
