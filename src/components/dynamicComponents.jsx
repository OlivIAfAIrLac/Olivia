

import React, { createElement, useContext } from "react";
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
import { CedulaContext } from "@/app/CedulaProvider";


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

export const DynamicComponent = block => {
  return createElement(
    CedulaContext.Consumer,
    null,
    context => createElement(Components[block.component], {
      context,
      key: block._uid,
      block: block,
      onClick: () => { context.clicked() },
      onChange: (e, id) => { context.changed(e, id) },
      onChangeGroup: (e, id) => { context.changedGroup(e, id) },
      onChangedMultiple: (e, id) => (context.multipleChangedGroup(e, id))
    })
  );
}