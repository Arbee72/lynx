import * as React from "react";

import InputForm from './components/InputForm';

function App() {
  const [visible, setVisible] = React.useState(true);
  return (
    <div className="App">
      <InputForm submit={'Add Link'}>
      </InputForm>
    </div>
  );
}

export default App;
