import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const CircleContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 5;
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 5;
  stroke-dasharray: 157; // Circunferência do círculo (2 * PI * R) com R = 25
  stroke-dashoffset: ${({ timeLeft }) => (157 * (100 - timeLeft)) / 100};
  transition: stroke-dashoffset 1s linear, stroke 1s linear;
  stroke: ${({ color }) => color};
`;


const Time = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const CircularTimer = forwardRef(({ duration, onComplete }, ref) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    startTimer() {
      clearInterval(intervalRef.current);
      setTimeLeft(duration);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current);
            onComplete();
            return 0;
          }
        });
      }, 1000);
    },
    stopTimer() {
      clearInterval(intervalRef.current);
    }
  }));

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const percentageLeft = (timeLeft / duration) * 100;
  const color = percentageLeft <= 25 ? 'red' : percentageLeft <= 50 ? 'orange' : 'green';

  return (
    <Container>
      <CircleContainer viewBox="0 0 50 50">
        <CircleBackground r="20" cx="25" cy="25" />
        <Circle
          r="20"
          cx="25"
          cy="25"
          timeLeft={percentageLeft}
          color={color}
        />
      </CircleContainer>
      <Time>{timeLeft}s</Time>
    </Container>
  );
});

export default CircularTimer;
