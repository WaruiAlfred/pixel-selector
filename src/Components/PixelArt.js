import React, { useContext, useState } from "react";
import appContext from "./Context";

function ColorPicker() {
  const { onChangeBackground, clearBackground } = useContext(appContext);
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div
      style={{
        marginLeft: "50px",
      }}
    >
      <h1>Choose a color</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => onChangeBackground(color)}
          />
        ))}
        <button
          onClick={() => clearBackground()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

function Pixel() {
  const { color } = useContext(appContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");
  return (
    <button
      onClick={() => setPixelColor(color)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  return (
    <div>
      <ColorPicker />
      <Pixels />
    </div>
  );
}
