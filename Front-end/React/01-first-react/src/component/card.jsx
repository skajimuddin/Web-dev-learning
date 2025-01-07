/* eslint-disable react/prop-types */

function Card({ titel, pg, btn }) {
  return (
    <>
      <div className="card">
        <h2>{titel}</h2>
        <p>{pg}</p>
        <button>{btn}</button>
      </div>
    </>
  );
}

export default Card;
