import Light from "../elements/Light";

let colors = ["red", "yellow", "blue", "green"];
colors = colors.concat(colors);

const Lights = ({ isOn }) => (
  <section className="lights">
    {colors.map((color, index) => (
      <Light {...{ key: index, isOn, color }} />
    ))}
  </section>
);

export default Lights;
