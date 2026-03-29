import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты кафедры «Машины и технология литейного производства» ВолгГТУ: адрес, способы связи и схема проезда.",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
