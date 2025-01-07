import FirstComponent from "./component/First Component";
import Card from "./component/card";

function App() {
  return (
    <>
      <FirstComponent />
      <Card
        titel="This is Card 1"
        pg="This is a sample paragraph"
        btn="Bye now"
      />
      <Card
        titel="This is Card 2"
        pg="This is a sample paragraph"
        btn="Bye now"
      />
      <Card
        titel="This is Card 3"
        pg="This is a sample paragraph"
        btn="Bye now"
      />
    </>
  );
}

export default App;
