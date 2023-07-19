import React from "react";
import Checkbox from "@/components/Checkbox";
import Headline from "@/components/Headline";
import SubHeadline from "@/components/SubHeadline";
import FullWidthInput from "@/components/FullWidthInput";
import Select from "@/components/Select";
 
const Components = {
 
  checkbox: Checkbox,
  headline: Headline,
  subheadline: SubHeadline,
  fullwidthinput: FullWidthInput,
  select: Select
};

const clicked = () => {
  console.log("clicked")
}
 
const changed = (e, id) => {
  console.log(e, id)
}

export default block => {
  // component does exist
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block, 
      onClick: () => {clicked()},
      onChange: (e, id) => {changed(e, id)}
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}