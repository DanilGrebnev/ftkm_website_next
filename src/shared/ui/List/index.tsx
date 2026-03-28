import React from "react";

import clsx from "clsx";

import s from "./s.module.scss";

interface IProps {
  title: string;
  list: string[];
  className?: string;
}

export const List: React.FC<IProps> = ({ title, list, className }) => (
  <div className={clsx(s.list, className)}>
    <h3>{title}</h3>
    <ul>
      {list.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  </div>
);
