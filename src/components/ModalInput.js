import * as React from "react";
import Modal from "@cloudscape-design/components/modal";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Button } from "@cloudscape-design/components";
import Box from "@cloudscape-design/components/box";


export default (props) => {
    
    return(
        <Modal
        onDismiss={() => props.closeModal(false)}
        visible={props.visible}
        closeAriaLabel="Close modal"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary" onClick={() => props.closeModal(false)}>Ok</Button>
            </SpaceBetween>
          </Box>
        }
        header="Modal title"
      >
        Your description should go here
      </Modal>
    );
}