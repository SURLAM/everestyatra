import ReserveClient from "../ReserveClint";

export default async function ReservePage({ params }) {
  const { slug } = await params; // ✅ REQUIRED in Next 16+

  return <ReserveClient slug={slug} />;
}
