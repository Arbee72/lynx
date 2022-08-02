import * as React from "react";
import Alert from "@cloudscape-design/components/alert";
import Button from "@cloudscape-design/components/button";

function App() {
  const [visible, setVisible] = React.useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Amplify try 3
        </a>
      </header>
      <div>
        <Alert
          onDismiss={() => setVisible(false)}
          visible={visible}
          dismissAriaLabel="Close alert"
          header="Known issues/limitations"
        >
          Review the documentation to learn about potential compatibility issues
          with specific database versions.
        </Alert>
      </div>
      <Button variant="primary">Button</Button>
    </div>
  );
}

export default App;
