/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Checkbox from "@/components/dynamic-components/Checkbox";
import Headline from "@/components/dynamic-components/Headline";
import SubHeadline from "@/components/dynamic-components/SubHeadline";
import FullWidthInput from "@/components/dynamic-components/FullWidthInput";
import Select from "@/components/dynamic-components/Select";
import Input from "@/components/dynamic-components/Input";
import Break from "@/components/dynamic-components/Break";
import Textarea from "@/components/dynamic-components/Textarea";
import OptionsGroup from "@/components/dynamic-components/OptionsGroup";
import MultipleOptionsGroup from "@/components/dynamic-components/MultipleOptionsGroup";

import { updateCedula } from "@/helpers/updateCedula";

 
const Components = {
  checkbox: Checkbox,
  headline: Headline,
  subheadline: SubHeadline,
  fullwidthinput: FullWidthInput,
  select: Select,
  input: Input,
  break: Break,
  optionsgroup: OptionsGroup,
  textarea: Textarea,
  multipleoptionsgroup: MultipleOptionsGroup
};

 
const changed = (e, id) => {
  alert("changed")
  const newValue = updateCedula(id, e.target.value)
  const cedula = JSON.parse(localStorage.getItem("cedula"))
  const newCedula = {...cedula.cedula, ...newValue}
  cedula.cedula = newCedula
  localStorage.setItem("cedula", JSON.stringify(cedula))
}

const changedGroup = (e, id) => {
  const newValue = updateCedula(id, e.target.value)
  console.log(newValue)
  console.log(JSON.parse(localStorage.getItem("cedula")))

}

const multipleChangedGroup = (e, id) => {
  const newValue = updateCedula(id, e.target.value)
  console.log(JSON.parse(localStorage.getItem("cedula")))

  
}

export default block => {
  // component does exist
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block, 
      onClick: () => {clicked()},
      onChange: (e, id) => {changed(e, id)},
      onChangeGroup: (e, id) => {changedGroup(e, id)},
      onChangedMultiple: (e, id) => (multipleChangedGroup(e, id))
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}