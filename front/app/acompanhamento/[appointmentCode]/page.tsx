import { findGroomingByCode } from "@/api/get";

export default async function groomingSteps({
  params,
}: {
  params: Promise<{ appointmentCode: string }>;
}) {
  const { appointmentCode } = await params;
  const groomingData = await findGroomingByCode(appointmentCode);
  console.log(groomingData);

  return <></>;
}
