import React, { useState, useRef, useEffect } from "react";
import "./styles/DragAndDropQuestion.css";
interface DragHorizontalProps {
  text: string;
}

const DragHorizontal = ({ text }: DragHorizontalProps) => {
  const [offsetX, setOffsetX] = useState(0);
  const [isRight, setIsRight] = useState(false); 
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);

  const positions = [-250, 0, 250]; 
  const color = ["#531927", "#3f82bdff","#193C0F"];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const clickX = e.clientX - rect.left; 
  const width = rect.width;

  if (clickX < width / 3) {
    setOffsetX(-250);
    setIsRight(false);
  } else if (clickX > (2 * width) / 3) {
    setOffsetX(250);
    setIsRight(true);
  }
};


  const handleMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetX;
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const newOffset = startOffsetRef.current + deltaX;
    const clamped = Math.max(-250, Math.min(250, newOffset));
    setOffsetX(clamped);
  };

  const handleMouseUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const closest = positions.reduce((prev, curr) =>
      Math.abs(curr - offsetX) < Math.abs(prev - offsetX) ? curr : prev
    );
    setOffsetX(closest);

    setIsRight(closest === 250);

    document.body.style.userSelect = "";
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [offsetX]);

  return (
  <div>
    <div
      className="container"
      onMouseDown={handleMouseDown}
        onClick={handleClick} 
      style={{
        backgroundColor: color[positions.indexOf(offsetX)],
        padding: "15px",
        transform: `translateX(${offsetX}px)`,
        transition: "transform 0.1s ease",
        
        cursor: "grab",
      }}
    >
      <h2 className="false">Faux</h2>
      <p className="statement">{text}</p>
      <h2 className="true">Vrai</h2>
    </div>
  </div>
);

};

export default DragHorizontal;
