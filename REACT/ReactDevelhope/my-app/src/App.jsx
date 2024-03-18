import { Login } from "./3";
import { Prova } from "./Bottonediprova";
import { OrologgioBello } from "./Clock";
import { InteractiveWelcome } from "./ControlledForms";
import { Counter2 } from "./Counter copy";
import { HelloWorld } from "./HelloWorld";
import { TodoList2 } from "./ListAndState2";
import { TodoList3 } from "./ListAndState3";
import { TodoList } from "./ListAndStates1";
import { LoginForm } from "./LoginForm";
import { MouseClicker } from "./MouseClicker";
import { FocusableInput } from "./Refs";
import { MyComponentRefs2 } from "./Refs2";
import { MyUncontrolledForm } from "./UncontrolledFOrm";
import { Counter } from "./Counter";
import { List } from "./list";
import { Welcome2 } from "./Welcome";
import { Container } from "./Container";
import classes from "./welcome.module.scss"
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { GithubUsers } from "./GithubUsers";



export function App() {
  const [language, setLanguage] = useState('en')

  function handleSetLanguage(language) {
    setLanguage(language)
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage('it')}>IT</button>
      <button onClick={() => handleSetLanguage('en')}>EN</button>
      <Container title={<h1 className={classes.welcome}>My Awesome Application</h1>}>
        <LanguageContext.Provider value={language}>
          <hr />
          <HelloWorld />
          <Counter />
          <OrologgioBello />
          <MouseClicker />
          <InteractiveWelcome />
          <LoginForm />
          <Login />
          <MyUncontrolledForm />
          <FocusableInput />
          <MyComponentRefs2 />
          <Counter2 />
          <List items={[
            { id: 1, name: 'laura', age: 20 },
            { id: 2, name: 'emilio', age: 21 },
            { id: 3, name: 'carlo', age: 22 },
            { id: 4, name: 'paola', age: 23 },
            { id: 5, name: 'cicco', age: 26 }
          ]} />
          <TodoList />
          <TodoList2 />
          <TodoList3 />
          <Prova />
          <Welcome2 />
        </LanguageContext.Provider>
        <GithubUsers />
      </Container>



    </div>
  );
}
