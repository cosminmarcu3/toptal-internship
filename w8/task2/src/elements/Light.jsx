const Light = ({ isOn, color }) => (
  <div className={`circle ${color} ${isOn ? "" : "off"}`}></div>
);

export default Light;
