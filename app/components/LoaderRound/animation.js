import { keyframes } from 'styled-components';

const DEG = '360';

function animation (props) {
  return keyframes`
    12% {
      transform: rotate(${DEG}deg);
      border-top-color: ${props.color || 'black'};
    }
    24% {
      transform: rotate(${DEG * 2}deg);
      border-right-color: ${props.color || 'black'};
    }
    36% {
      transform: rotate(${DEG * 3}deg);
      border-left-color: ${props.color || 'black'};
    }
    48% {
      transform: rotate(${DEG * 4}deg);
      border-bottom-color: ${props.color || 'black'};
    }
    60% {
      transform: rotate(${DEG * 5}deg);
      border-bottom-color: transparent;
    }
    72% {
      transform: rotate(${DEG * 6}deg);
      border-left-color: transparent;
    }
    84% {
      transform: rotate(${DEG * 7}deg);
      border-right-color: transparent;
    }
    100% {
      transform: rotate(${DEG * 8}deg);
      border-top-color: transparent;
    }
  `;
}

export default animation;
