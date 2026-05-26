"use client";

import {
  Block,
  Button,
  Navbar,
  NavbarBackLink,
  Page,
} from "konsta/react";
import { useParams, useRouter } from "next/navigation";
import { addDays, formatDate, parseDate } from "@/lib/utils/date";

export default function WorkoutPage() {
  const router = useRouter();
  const params = useParams<{ date: string }>();
  const rawDate = params.date ?? "";
  const date = (() => {
    try {
      return parseDate(rawDate);
    } catch {
      return null;
    }
  })();

  if (!date) {
    return (
      <Page>
        <Navbar
          title="Lỗi"
          left={<NavbarBackLink onClick={() => router.push("/")} />}
        />
        <Block strong inset>
          <p className="text-center text-black/60 dark:text-white/60">
            Ngày không hợp lệ: {rawDate || "—"}
          </p>
          <Button large className="mt-4" onClick={() => router.push("/")}>
            Về Dashboard
          </Button>
        </Block>
      </Page>
    );
  }

  return (
    <Page>
      <Navbar
        title={formatDate(date)}
        subtitle={date}
        left={<NavbarBackLink onClick={() => router.push("/")} />}
        right={
          <Button clear small onClick={() => router.push("/exercises")}>
            Bài tập
          </Button>
        }
      />

      <Block strong inset className="flex gap-2">
        <Button outline onClick={() => router.push(`/workout/${addDays(date, -1)}`)}>
          ← Trước
        </Button>
        <Button outline onClick={() => router.push(`/workout/${addDays(date, 1)}`)}>
          Sau →
        </Button>
      </Block>

      <Block strong inset>
        <p className="text-center text-black/60 dark:text-white/60">
          Workout Editor — Sprint 3
        </p>
      </Block>
    </Page>
  );
}
