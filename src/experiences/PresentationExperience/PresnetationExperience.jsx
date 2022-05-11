import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import Experience from "./classes/Experience";

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
`;

const PresentationExperience = () => {
  const canvasRef = useRef();
  const experience = useRef();

  useEffect(() => {
    experience.current = new Experience(canvasRef.current);

    return () => {
      experience.current.destroy();
      experience.current = null;
    };
  }, []);

  return (
    <Canvas className="webgl" ref={canvasRef}/>
  );
};

export default PresentationExperience;