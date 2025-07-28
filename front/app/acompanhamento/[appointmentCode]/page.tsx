import { findGroomingByCode } from "@/api/get";

export default async function groomingSteps({
  params,
}: {
  params: Promise<{ appointmentCode: string }>;
}) {
  const { appointmentCode } = await params;
  const groomingData = await findGroomingByCode(appointmentCode);
  if (groomingData?.data) {
    const keys = Object.keys(groomingData.data);

    return (
      <>
        {keys.map((key) => (
          <p key={key}>{`${key}: ${groomingData.data[key]}`}</p>
        ))}
      </>
    );
  }
}
