import { useRef, useState } from "react";

const Penzvalto = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [ft, setFt] = useState<number>(1);
  const [penznem, setPenznem] = useState<string>("€");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <h2>Pánzváltó</h2>

      <label htmlFor="huf">Pénzösszeg (HUF)</label>
      <input
        id="huf"
        type="number"
        ref={inputRef}
        // onChange={(e) => setFt(Number(e.target.value))}
      />
      <select onChange={(e) => setPenznem(e.target.value)}>
        <option value="€">Euró (€)</option>
        <option value="$">Dollár ($)</option>
      </select>
      <button
        onClick={() => {
          switch (penznem) {
            case "€":
              setEredmeny(
                `${inputRef.current.value} Ft = ${(Number(inputRef.current.value) / 380).toFixed(2)} €`,
              );
              break;
            case "$":
              setEredmeny(
                `${inputRef.current.value} Ft = ${(Number(inputRef.current.value) / 350).toFixed(2)} $`,
              );
              break;
          }
        }}
      >
        Átváltás!
      </button>
      <p>{eredmeny}</p>
    </>
  );
};

export default Penzvalto;
