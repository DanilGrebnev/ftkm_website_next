import { OrganizationJsonLd, WebSiteJsonLd } from "@/shared/seo/JsonLd";
import { Main } from "@views/Main";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Main />
    </>
  );
}
