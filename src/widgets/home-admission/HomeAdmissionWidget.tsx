import { Suspense } from "react";

import { getAdmissionSettingsPublicServerAction } from "@/shared/api/requests/admission";
import { Admission } from "@/entities/admission/ui/Admission";

async function AdmissionStream() {
  const { items } = await getAdmissionSettingsPublicServerAction();
  return <Admission items={items} />;
}

export function HomeAdmissionWidget() {
  return (
    <Suspense fallback={<Admission items={[]} />}>
      <AdmissionStream />
    </Suspense>
  );
}
