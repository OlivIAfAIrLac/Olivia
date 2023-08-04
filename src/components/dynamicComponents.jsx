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

const clicked = () => {
  console.log("clicked")
}
 
const changed = (e, id) => {
  console.log(e.target.value, id)
}

const changedGroup = (e, id) => {
  console.log(e, id, "From Group")
}

const multipleChangedGroup = (e, id) => {
  console.log(e, id)
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