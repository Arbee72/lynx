import * as React from "react";
import Container from "@cloudscape-design/components/container";
import { Button } from "@cloudscape-design/components";
import { Header } from "@cloudscape-design/components";
import ModalInput from './ModalInput';

function InputForm(props) {
  const [modalState, setModalState] = React.useState(false);

  function openModal() {
    setModalState(true);
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Container
        header={
          <Header variant="h1" description="Frequently used links catalog">
            LYNX - Bookmarks Tool
          </Header>
        }
      >
        <Button
          variant="primary"
          id="modalOpen"
          disabled={false}
          onClick={openModal}
        >
          Add New Link
        </Button>
        { modalState ? <ModalInput visible={true} closeModal={setModalState} /> : null }
      </Container>
    </form>
  );
}

export default InputForm;
