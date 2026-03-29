"use client";

import { Header } from "@/shared/ui/Header";
import { FC, ReactNode } from "react";

import s from "./App.module.scss";

interface AppProps {
  children: ReactNode;
}

export const App: FC<AppProps> = ({ children }) => (
  <div className="App">
    <a href="#main-content" className={s.skipToContent}>
      К основному содержимому
    </a>
    <Header />
    <main id="main-content">{children}</main>
  </div>
);
