export const dynamic = "force-dynamic";
import { getAdmissionSettings } from "@/entities/admission/model/server_actions/admission";
import { Main } from "@views/Main";

export default async function HomePage() {
  const { items: admissionItems } = await getAdmissionSettings();

  return <Main admissionItems={admissionItems} />;
}
