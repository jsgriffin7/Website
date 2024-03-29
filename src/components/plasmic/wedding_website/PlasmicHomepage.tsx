// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nVGJDWqEnXJFhK7kn2CwwN
// Component: 5Vr1WSlbe9Fk

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import VerticalButton from "../../VerticalButton"; // plasmic-import: n9pSBCdmzjFm/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantscvaFzhLfUy52 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CvaFZHLfUY52/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_wedding_website.module.css"; // plasmic-import: nVGJDWqEnXJFhK7kn2CwwN/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 5Vr1WSlbe9Fk/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: XIrPh1DPULIy/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: sX8440P88IEU/icon
import imageLRjZuQsU4Ly from "./images/image.webp"; // plasmic-import: LRjZu_qsU4Ly/picture
import image3TwqswwfGkBFo from "./images/image3.png"; // plasmic-import: twqswwfGkBFo/picture
import image4EMozQoNnrVA from "./images/image4.png"; // plasmic-import: eMozQONnrV_A/picture

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  mobileNavBar?: p.Flex<"div">;
  mobileNavBar2?: p.Flex<typeof NavigationBar>;
  ourStory?: p.Flex<"a">;
  h1?: p.Flex<"h1">;
  h3?: p.Flex<"h3">;
  home?: p.Flex<typeof VerticalButton>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscvaFzhLfUy52()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"mobileNavBar"}
            data-plasmic-override={overrides.mobileNavBar}
            className={classNames(projectcss.all, sty.mobileNavBar)}
          >
            <NavigationBar
              data-plasmic-name={"mobileNavBar2"}
              data-plasmic-override={overrides.mobileNavBar2}
              brand={
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fnUuy
                  )}
                  href={"#"}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__lwTQt)}
                    displayHeight={"40px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: imageLRjZuQsU4Ly,
                      fullWidth: 928,
                      fullHeight: 696,
                      aspectRatio: undefined
                    }}
                  />
                </a>
              }
              className={classNames("__wab_instance", sty.mobileNavBar2)}
              closeButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___2Exw3)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/close.svg"}
                />
              }
              itemsGap={8}
              menuItems={
                <React.Fragment>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___9C7Wi
                    )}
                    href={"/"}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToHomepage"] = true
                        ? (() => {
                            const actionArgs = { destination: `/` };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                location.assign(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToHomepage"] != null &&
                        typeof $steps["goToHomepage"] === "object" &&
                        typeof $steps["goToHomepage"].then === "function"
                      ) {
                        $steps["goToHomepage"] = await $steps["goToHomepage"];
                      }
                    }}
                  >
                    {"Home"}
                  </a>
                  <a
                    data-plasmic-name={"ourStory"}
                    data-plasmic-override={overrides.ourStory}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.ourStory
                    )}
                    href={"/"}
                  >
                    {"Home"}
                  </a>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__mez1H
                    )}
                    href={"/"}
                  >
                    {"Home"}
                  </a>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__kaRfu
                    )}
                    href={"/"}
                  >
                    {"Home"}
                  </a>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__lrBcN
                    )}
                    href={"/"}
                  >
                    {"Home"}
                  </a>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___3Y9Gf
                    )}
                    href={"/"}
                  >
                    {"Home"}
                  </a>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__o2KNl
                    )}
                    href={"/"}
                  >
                    {"Home"}
                  </a>
                </React.Fragment>
              }
              openButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__zzXjk)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/menu.svg"}
                />
              }
              responsiveBreakpoint={768}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___931Nj)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__mpErl)}
              displayHeight={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? "231px"
                  : "102px"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? "868px"
                  : "auto"
              }
              loading={"lazy"}
              src={{
                src: image3TwqswwfGkBFo,
                fullWidth: 1149,
                fullHeight: 311,
                aspectRatio: undefined
              }}
            />

            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Kirsty & Joshua"}
            </h1>
            <h3
              data-plasmic-name={"h3"}
              data-plasmic-override={overrides.h3}
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3
              )}
            >
              {"31 August 2024"}
            </h3>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___41X2P)}
              displayHeight={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? "651px"
                  : "auto"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"250px"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: image4EMozQoNnrVA,
                fullWidth: 999,
                fullHeight: 750,
                aspectRatio: undefined
              }}
            />
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ynFjn)}
          >
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton___8RnQb
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg___7Kydt)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__yozlU)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rx5Q0
                )}
              >
                {"Home"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__zXBbd
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__y9UNg)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__fcyBb)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fgnyn
                )}
              >
                {"Our Story"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__fZreQ
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__avoYx)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ge9Kz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5Ul9I
                )}
              >
                {"Photos"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames("__wab_instance", sty.verticalButton__sdey)}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg___7D68C)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__tHeIz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__r4Qwc
                )}
              >
                {"Q + A"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton___5SNtz
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__zDLg0)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg___56Yc)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__m34Aw
                )}
              >
                {"Travel"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__yv1Cy
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__o6TNh)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__jqQQz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__r6ZmB
                )}
              >
                {"Gifts"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__enTbz
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg___06Pg9)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ac3Sz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__a1Cd4
                )}
              >
                {"On the Day"}
              </div>
            </VerticalButton>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__ddmZt)}>
            <VerticalButton
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames("__wab_instance", sty.home)}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__rfKyx)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__kt7Lr)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__w5Ueu
                )}
              >
                {"Home"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__g6ZMz
              )}
              color={"clear"}
              endIcon={
                <React.Fragment>
                  <VerticalButton
                    className={classNames(
                      "__wab_instance",
                      sty.verticalButton__jhsth
                    )}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__sgX41)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__r3CE0)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ccNa
                      )}
                    >
                      {"Photos"}
                    </div>
                  </VerticalButton>
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__ocRtO)}
                    role={"img"}
                  />
                </React.Fragment>
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__lbTqx)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rkeRt
                )}
              >
                {"Our Story"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton___7MBjJ
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__wMzQ0)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__aOTaB)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yDHuu
                )}
              >
                {"Photos"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__jlBap
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__rWpK)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ka7Bh)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__heKpw
                )}
              >
                {"Q + A"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__fMpEz
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__jtNpv)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__yjW2)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mq2Po
                )}
              >
                {"Travel"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__kUwEo
              )}
              color={"clear"}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__tNEnP)}
                  role={"img"}
                />
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg___4EAjm)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k8TKb
                )}
              >
                {"Gifts"}
              </div>
            </VerticalButton>
            <VerticalButton
              className={classNames(
                "__wab_instance",
                sty.verticalButton__ahuIl
              )}
              color={"clear"}
              endIcon={
                <React.Fragment>
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg___0DYho)}
                    role={"img"}
                  />

                  <VerticalButton
                    className={classNames(
                      "__wab_instance",
                      sty.verticalButton__z6L96
                    )}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__y3NfA)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__pFsh)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9Ri5G
                      )}
                    >
                      {"Q + A"}
                    </div>
                  </VerticalButton>
                </React.Fragment>
              }
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__hPszC)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rm6Ln
                )}
              >
                {"On the Day"}
              </div>
            </VerticalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mobileNavBar",
    "mobileNavBar2",
    "ourStory",
    "h1",
    "h3",
    "home"
  ],
  mobileNavBar: ["mobileNavBar", "mobileNavBar2", "ourStory"],
  mobileNavBar2: ["mobileNavBar2", "ourStory"],
  ourStory: ["ourStory"],
  h1: ["h1"],
  h3: ["h3"],
  home: ["home"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  mobileNavBar: "div";
  mobileNavBar2: typeof NavigationBar;
  ourStory: "a";
  h1: "h1";
  h3: "h3";
  home: typeof VerticalButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mobileNavBar: makeNodeComponent("mobileNavBar"),
    mobileNavBar2: makeNodeComponent("mobileNavBar2"),
    ourStory: makeNodeComponent("ourStory"),
    h1: makeNodeComponent("h1"),
    h3: makeNodeComponent("h3"),
    home: makeNodeComponent("home"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
