// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: scFep1yV2m46PC9GmZdAAJ
// Component: 7_ur_Gg5fMLo0x
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: scFep1yV2m46PC9GmZdAAJ/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 7_ur_Gg5fMLo0x/css
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: FS4934u8pYlyi/icon

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled"
);

export const PlasmicButton__ArgProps = new Array(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.showStartIcon
          : undefined
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.showEndIcon
          : undefined
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.color : undefined
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.iconOnly : undefined
      },
      {
        path: "outline",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.outline : undefined
      },
      {
        path: "bgDifference",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.bgDifference
          : undefined
      },
      {
        path: "round",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.round : undefined
      },
      {
        path: "large",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.large : undefined
      },
      {
        path: "flat",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.flat : undefined
      },
      {
        path: "extraSmallShadow",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.extraSmallShadow
          : undefined
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isDisabled : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbgDifference]: hasVariant(
            $state,
            "bgDifference",
            "bgDifference"
          ),

          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_darkGray]: hasVariant($state, "color", "darkGray"),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_indigo]: hasVariant($state, "color", "indigo"),
          [sty.rootcolor_navLink]: hasVariant($state, "color", "navLink"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootextraSmallShadow]: hasVariant(
            $state,
            "extraSmallShadow",
            "extraSmallShadow"
          ),

          [sty.rootflat]: hasVariant($state, "flat", "flat"),
          [sty.rooticonOnly]: hasVariant($state, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootlarge]: hasVariant($state, "large", "large"),
          [sty.rootoutline]: hasVariant($state, "outline", "outline"),
          [sty.rootround]: hasVariant($state, "round", "round"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
    >
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <AppleIcon
                className={classNames(projectcss.all, sty.svg__iMTs)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),

              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),

              [sty.slotTargetStartIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),

              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),

              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),

              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),

              [sty.slotTargetStartIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),

              [sty.slotTargetStartIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),

              [sty.slotTargetStartIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetStartIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetStartIconshowEndIcon_color_green]:
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              ),

              [sty.slotTargetStartIconshowStartIcon_showEndIcon_color_green]:
                hasVariant($state, "showStartIcon", "showStartIcon") &&
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green")
            })
          })
        : null}
      {(hasVariant($state, "iconOnly", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenbgDifference]: hasVariant(
                $state,
                "bgDifference",
                "bgDifference"
              ),

              [sty.slotTargetChildrencolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),

              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),

              [sty.slotTargetChildrencolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),

              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),

              [sty.slotTargetChildrencolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),

              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),

              [sty.slotTargetChildrencolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),

              [sty.slotTargetChildrencolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),

              [sty.slotTargetChildreniconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetChildrenisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetChildrenlarge]: hasVariant(
                $state,
                "large",
                "large"
              ),

              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant($state, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant($state, "iconOnly", "iconOnly")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <AppleIcon
                className={classNames(projectcss.all, sty.svg__bye50)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),

              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),

              [sty.slotTargetEndIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),

              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),

              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),

              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),

              [sty.slotTargetEndIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),

              [sty.slotTargetEndIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),

              [sty.slotTargetEndIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetEndIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */