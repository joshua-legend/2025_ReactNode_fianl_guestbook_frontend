import Link from "next/link";
import { Guestbook } from "./types/guestbook.type";
import GuestbookLayout from "./layout";
import Content from "./components/Content";
import Card from "./components/Card";
import Header from "./components/Header";

interface GuestbookCardProps {
  guestbook: Guestbook[];
}

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  return (
    <GuestbookLayout>
      {guestbook.map((guestbook, i) => (
        <Link key={i} href={`/${guestbook.id}`}>
          <Card>
            <Header author={guestbook.author} createdAt={guestbook.createdAt} />
            <Content content={guestbook.content} />
          </Card>
        </Link>
      ))}
    </GuestbookLayout>
  );
}
