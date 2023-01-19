import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import Counter from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Lists from "./components/generics/Lists";

function App() {
  const personName = {
    first: "Bruce ",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce ",
      last: "Wayne",
    },
    {
      first: "Clark ",
      last: "Kent",
    },
    {
      first: "Princess ",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <Greet name="Fahad" messageCount={20} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicpario!</Heading>
        </Oscar>
        <Button
          handleClick={(event, id) => {
            console.log("Button Clicked", event, id);
          }}
        />
        <br />
        <Input value="" handleChange={(event) => console.log(event)} />
        <Container styles={{ border: "1px solid black", padding: "1rem" }} />
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="The Count Value is" /> */}
      {/* <Private isLoggedIn={true} Component={Profile} /> */}
      <Lists
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <Lists items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
      <Lists items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
      <Lists
        items={[
          {
            first: "Bruce ",
            last: "Wayne",
          },
          {
            first: "Clark ",
            last: "Kent",
          },
          {
            first: "Princess ",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
