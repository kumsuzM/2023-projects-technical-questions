import { SetStateAction, Dispatch, FormEvent } from "react";
import { TableContents } from "../Table/Table";

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>;
  contents: TableContents;
}

export default function AlertModal({ useContents, contents }: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newEventAlert = (e.target as any)[0].value;
    const newEvent = {
      alert: newEventAlert,
      status: "",
      updates: [],
    };

    // create shallow copy of state
    const newContents = { ...contents };

    // add the new event with the alert to the shallow copy
    newContents.rowContents.push(newEvent);

    // set the state to the updated copy with our new event and alert
    useContents(newContents);
  }

  return (
    <form data-testid="form" onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type="text" id="alert" name="alert" />
      <button type="submit"> Add </button>
    </form>
  );
}
