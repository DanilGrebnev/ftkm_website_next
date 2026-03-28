"use client";

import { BurgerMenuItems } from "@UI/BurgerMenu/BurgerMenuItem";
import { HeightCalcHelper } from "@lib/HeightHelper";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import dynamic from "next/dynamic";
import {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import { VSTUIcon } from "../VSTU_icon";
import { HeaderMenuItems } from "./HeaderMenuItems";
import s from "./style.module.scss";

type PinState = "off" | "entering" | "on" | "exiting";

type PinAction =
  | { type: "scroll"; shouldFix: boolean }
  | { type: "entered" }
  | { type: "exited" };

function pinReducer(state: PinState, action: PinAction): PinState {
  switch (action.type) {
    case "scroll":
      if (action.shouldFix) {
        if (state === "exiting") return "on";
        if (state === "off") return "entering";
        return state;
      }
      if (state === "on") return "exiting";
      if (state === "entering") return "off";
      return state;
    case "entered":
      return state === "entering" ? "on" : state;
    case "exited":
      return state === "exiting" ? "off" : state;
    default:
      return state;
  }
}

function getInitialPinState(): PinState {
  if (typeof window === "undefined") return "off";
  return window.scrollY >= window.innerHeight ? "on" : "off";
}

const BurgerMenu = dynamic(
  () => import("@UI/BurgerMenu").then((mod) => ({ default: mod.BurgerMenu })),
  { ssr: false },
);

const BurgerMenuModal = dynamic(
  () =>
    import("@UI/BurgerMenu/BurgerMenuModal").then((mod) => ({
      default: mod.BurgerMenuModal,
    })),
  { ssr: false },
);

export const Header = () => {
  const ref = useRef<HTMLElement>(null);
  const [pinState, dispatch] = useReducer(pinReducer, undefined, getInitialPinState);
  const pinStateRef = useRef(pinState);
  pinStateRef.current = pinState;
  const [barHeight, setBarHeight] = useState(0);
  const rafScroll = useRef<number | null>(null);

  const syncHeight = () => {
    if (!ref.current) return;
    const h = ref.current.offsetHeight;
    setBarHeight(h);
    HeightCalcHelper.height = h;
  };

  const isFixedLayout =
    pinState === "entering" || pinState === "on" || pinState === "exiting";

  useLayoutEffect(() => {
    syncHeight();
  }, [pinState]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (pinState === "entering") dispatch({ type: "entered" });
    if (pinState === "exiting") dispatch({ type: "exited" });
  }, [pinState]);

  useLayoutEffect(() => {
    const onResize = () => {
      syncHeight();
      const y = window.scrollY || document.documentElement.scrollTop;
      dispatch({ type: "scroll", shouldFix: y >= window.innerHeight });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      dispatch({ type: "scroll", shouldFix: y >= window.innerHeight });
    };

    const onScroll = () => {
      if (rafScroll.current != null) return;
      rafScroll.current = window.requestAnimationFrame(() => {
        rafScroll.current = null;
        tick();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafScroll.current != null) {
        window.cancelAnimationFrame(rafScroll.current);
      }
    };
  }, []);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    const name = e.animationName;
    if (!name.includes("headerPinIn") && !name.includes("headerPinOut")) {
      return;
    }
    const ps = pinStateRef.current;
    if (ps === "entering") dispatch({ type: "entered" });
    if (ps === "exiting") dispatch({ type: "exited" });
  };

  return (
    <>
      <div
        aria-hidden
        className={s.headerFlowSpacer}
        style={{ height: isFixedLayout ? barHeight : 0 }}
      />
      <header
        ref={ref}
        className={clsx(
          s.headerWrapper,
          isFixedLayout && s.headerFixed,
          pinState === "entering" && s.headerEnter,
          pinState === "exiting" && s.headerExit,
        )}
        id="Header"
        onAnimationEnd={handleAnimationEnd}
      >
        <AppBar className={s.Header} position="static" elevation={0}>
          <Container maxWidth="xl">
            <Toolbar className={s.toolbar} disableGutters>
              <BurgerMenu className={s["burger-menu"]} />

              <VSTUIcon className={s.vstuIcon} />

              <HeaderMenuItems />
            </Toolbar>
          </Container>
        </AppBar>
        <BurgerMenuModal>
          <BurgerMenuItems />
        </BurgerMenuModal>
      </header>
    </>
  );
};
