import { Form } from "react-bootstrap";

const DynamicFormControl = (props: any) => {
  console.log("props:- ", props);
  const { type } = props;
  return (
    <>
      {(type === "text" || type === "email") && (
        <>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control {...props} />
        </>
      )}

      {type === "textarea" && (
        <>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control {...props} />
        </>
      )}

      {(type === "checkbox" || type === "radio" || type === "switch") && (
        <Form.Check id={`default-${type}`} {...props} />
      )}
    </>
  );
};

export default DynamicFormControl;
