import { Suspense } from "react";

import { getAdmissionSettingsForPublicPage } from "@/entities/admission/model/server_actions/admission";
import { Admission } from "@/views/Main/components/Admission";

async function AdmissionStream() {
  const { items } = await getAdmissionSettingsForPublicPage();
  return <Admission items={items} />;
}

export function HomeAdmissionWidget() {
  return (
    <Suspense fallback={<Admission items={[]} />}>
      <AdmissionStream />
    </Suspense>
  );
}
