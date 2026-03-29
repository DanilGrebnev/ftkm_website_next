import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости",
  description:
    "Новости кафедры МиТЛП ВолгГТУ: события, достижения, объявления и материалы для студентов и абитуриентов.",
};

export default function NewsSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
