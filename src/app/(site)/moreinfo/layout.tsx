import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О кафедре",
  description:
    "Подробнее о кафедре МиТЛП: история, направления подготовки, научная работа и информация для абитуриентов.",
};

export default function MoreInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
