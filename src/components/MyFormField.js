import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";

export default (props) => {
  const [inputValue, setInputValue] = React.useState(props.value);
  return (
    <FormField
      description={props.description}
      label={props.label}
    >
      <Input
        value={inputValue}
        onChange={event =>
          setInputValue(event.detail.value)
        }
      />
    </FormField>
  );
}