import * as React from "react";
import {
  PlasmicVerticalButton,
  DefaultVerticalButtonProps
} from "./plasmic/wedding_website/PlasmicVerticalButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface VerticalButtonProps extends DefaultVerticalButtonProps {
  // Feel free to add any additional props that this component should receive
}
function VerticalButton_(props: VerticalButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicVerticalButton.useBehavior<VerticalButtonProps>(props, ref);
  return <PlasmicVerticalButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<VerticalButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<VerticalButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const VerticalButton = React.forwardRef(
  VerticalButton_
) as any as ButtonComponentType;

export default Object.assign(VerticalButton, { __plumeType: "button" });
