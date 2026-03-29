import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход",
  description: "Служебный вход администратора сайта кафедры МиТЛП.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
