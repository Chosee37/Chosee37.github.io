// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: scFep1yV2m46PC9GmZdAAJ
// Component: 24Ns76HZ8CU199
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: 3jHhcXtQUHiOBe/component
import Button from "../../Button"; // plasmic-import: 7_ur_Gg5fMLo0x/component
import { useScreenVariants as useScreenVariantslwkYg8Ze9PdYs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LwkYG8ZE9pdYs/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: scFep1yV2m46PC9GmZdAAJ/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: 24Ns76HZ8CU199/css

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavbar__RenderFunc(props) {
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
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslwkYg8Ze9PdYs()
  });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fRuXt)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pkXz)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__nruCo)}
            color={"navLink"}
            link={`/services`}
          >
            {"Services"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__pqynH)}
            color={"navLink"}
          >
            {"Features"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__m7ExQ)}
            color={"navLink"}
          >
            {"Company"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__hs6A6)}
            color={"navLink"}
          >
            {"Contact"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__vh3I2)}
            color={"navLink"}
          >
            {"Log in"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__ykbj)}
            color={"darkGray"}
          >
            {"Sign up"}
          </Button>
        </p.Stack>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox___383Bx)}>
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button___8Fs5E
              )}
            >
              {"Sign up"}
            </button>

            <Button className={classNames("__wab_instance", sty.button__t1Hs4)}>
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
