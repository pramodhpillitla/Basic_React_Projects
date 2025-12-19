import React from "react";

export default function Card() {
  return (
    <div className="card">
      <a href="/">
        <img
          src="https://ic4.maxabout.us/autos/tw_india/2/2021/1/2021-ducati-superleggera-v4.jpg"
          alt="Ducati Superleggera V4"
        />
      </a>
      <h5>Ducati Panigale Superleggera V4</h5>
      <p>$100,000</p>
      <a href="/">
        <button className="buy-btn">Buy Now</button>
      </a>
    </div>
  );
}
