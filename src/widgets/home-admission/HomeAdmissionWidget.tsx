import { Suspense } from "react";

import { getAdmissionSettingsForPublicPage } from "@/entities/admission/api/actions/admission";
import { Admission } from "@/entities/admission/ui/Admission";

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
