import { useState } from "react";

const Penzvalto = () => {
  const [ft, setFt] = useState<number>(1);
  const [penznem, setPenznem] = useState<string>("€");
  const [eredmeny, setEredmeny] = useState<number>(0);
  return (
    <>
      <h2>Pánzváltó</h2>

      <label htmlFor="huf">Pénzösszeg (HUF)</label>
      <input
        id="huf"
        type="number"
        onChange={(e) => setFt(Number(e.target.value))}
      />
      <select onChange={(e) => setPenznem(e.target.value)}>
        <option value="€">Euró (€)</option>
        <option value="$">Dollár ($)</option>
      </select>
      <button
        onClick={() => {
          switch (penznem) {
            case "€":
              setEredmeny(Number(ft / 380));
              break;
            case "$":
              setEredmeny(Number(ft / 350));
              break;
          }
        }}
      >
        Átváltás!
      </button>
      <p>
        {ft}Ft = {eredmeny.toFixed(2)} {penznem}
      </p>
    </>
  );
};

export default Penzvalto;
