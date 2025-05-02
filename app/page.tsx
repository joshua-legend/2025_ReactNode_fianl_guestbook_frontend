import GuestbookCard from "@/components/Guestbook";
import Heading from "@/components/Common/Bases/Typography/Heading";
import { getGuestbook } from "@/apis/guestbooks/guestbookAPI";
export default async function Home() {
  const data = await getGuestbook();
  if (!data?.success) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }
  if (data.data?.length === 0) {
    return <div>방명록이 없습니다.</div>;
  }
  return (
    <>
      <Heading>방명록</Heading>
      {/* <GuestbookCard guestbook={data.data?.data || []} /> */}
    </>
  );
}
