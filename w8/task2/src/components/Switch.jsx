const Switch = ({ lightIsOn, switchLight }) => (
  <section className="buttons">
    <button onClick={() => switchLight(!lightIsOn)}>
      Turn {lightIsOn ? "off" : "on"}
    </button>
  </section>
);

export default Switch;
