/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
    className='Arrow'
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 40px;
      width: 40px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      opacity: 0.7;
      z-index: 100;

      &:hover {
        transform: scale(1.1);
      }

      i {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);

        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? (
      <i class='fas fa-angle-right fa-lg' ></i>
    ) : (
      <i class='fas fa-angle-left fa-lg'></i>
    )}
  </div>
  )
  
    };

export default Arrow;
