import * as React from "react";
import {
  PlasmicHorizontalButton,
  DefaultHorizontalButtonProps
} from "./plasmic/wedding_website/PlasmicHorizontalButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface HorizontalButtonProps extends DefaultHorizontalButtonProps {
  // Feel free to add any additional props that this component should receive
}
function HorizontalButton_(props: HorizontalButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicHorizontalButton.useBehavior<HorizontalButtonProps>(props, ref);
  return <PlasmicHorizontalButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<HorizontalButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<HorizontalButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const HorizontalButton = React.forwardRef(
  HorizontalButton_
) as any as ButtonComponentType;

export default Object.assign(HorizontalButton, { __plumeType: "button" });
