/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'var(--clr-dark)' : 'var(--clr-accent)'};
    `}
  />
)

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: .7;
    `}
  >
    {slides.map((slide, index) => (
      <Dot key={slide} active={activeSlide === index} />
    ))}
  </div>
)

export default Dots
