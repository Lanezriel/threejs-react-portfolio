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
  const firstAlreadyDone = useRef(false);

  useEffect(() => {
    experience.current = new Experience(canvasRef.current);

    return () => {
      if (firstAlreadyDone.current) {
        experience.current.destroy();
        experience.current = null;
      } else {
        firstAlreadyDone.current = true;
      }
    };
  }, []);

  return (
    <Canvas className="webgl" ref={canvasRef}/>
  );
};

export default PresentationExperience;