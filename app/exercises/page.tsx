"use client";

import { Block, Link as KonstaLink, Navbar, NavbarBackLink, Page } from "konsta/react";
import { useRouter } from "next/navigation";

export default function ExercisesPage() {
  const router = useRouter();

  return (
    <Page>
      <Navbar
        title="Bài tập"
        left={<NavbarBackLink onClick={() => router.push("/")} />}
      />
      <Block strong inset>
        <p className="text-center text-black/60 dark:text-white/60">
          Quản lý danh mục bài tập — Sprint 2
        </p>
      </Block>
      <Block inset>
        <KonstaLink onClick={() => router.push("/")}>← Về Dashboard</KonstaLink>
      </Block>
    </Page>
  );
}
