import "./main-screen.css";

function MainScreen(props) {
  return (
    <div className="main-screen">
      <div className="display1">{props.state1}</div>
      <div className="display2">{props.state2}</div>
    </div>
  );
}
export default MainScreen;
