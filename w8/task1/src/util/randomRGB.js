const randomUnit = () => Math.floor(Math.random() * 256);

const randomRGB = () =>
  `rgb(${randomUnit()}, ${randomUnit()}, ${randomUnit()})`;

export default randomRGB;
