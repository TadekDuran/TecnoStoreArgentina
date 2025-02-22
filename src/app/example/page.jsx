const ColorBox1 = ({ color, name }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        margin: "10px",
        color: "#fff",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      {name}
    </div>
  );
};
const ColorBox2 = ({ props }) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        padding: "20px",
        margin: "10px",
        color: "#fff",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      {props.name}
    </div>
  );
};

const Example = () => {
  const colors = [
    { color: "#FF0000", name: "Rojo 3" },
    { color: "#00FF00", name: "Verde 3" },
    { color: "#0000FF", name: "Azul 3" },
  ];

  return (
    <div>
      <div>
        <ColorBox1 color="#FF0000" name="Rojo 1" />
        <ColorBox1 color="#00FF00" name="Verde 1" />
        <ColorBox1 color="#0000FF" name="Azul 1" />
      </div>
      <div>
        <ColorBox2 props={{ color: "#FF0000", name: "Rojo 2" }} />
        <ColorBox2 props={{ color: "#00FF00", name: "Verde 2" }} />
        <ColorBox2 props={{ color: "#0000FF", name: "Azul 2" }} />
      </div>
      <div>
        {colors.map((item, index) => (
          <ColorBox1 key={index} color={item.color} name={item.name} />
        ))}
      </div>
      <div>
        {colors.map((item, index) => (
          <ColorBox2 key={index} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Example;
