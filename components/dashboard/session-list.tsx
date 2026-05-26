"use client";

import { Block, List, ListItem } from "konsta/react";
import { useFitLogStore } from "@/lib/store/use-fit-log-store";
import { getSessionsWithStats } from "@/lib/utils/volume";
import { formatDate } from "@/lib/utils/date";

export function SessionList() {
  const sessions = useFitLogStore((state) => state.sessions);
  const sets = useFitLogStore((state) => state.sets);
  const sessionsWithStats = getSessionsWithStats(sessions, sets);

  if (sessionsWithStats.length === 0) {
    return (
      <Block strong inset>
        <p className="text-center text-black/60 dark:text-white/60">
          Chưa có buổi tập nào. Bấm &quot;Bắt đầu tập hôm nay&quot; để ghi log.
        </p>
      </Block>
    );
  }

  return (
    <List strongIos outlineIos>
      {sessionsWithStats.map(({ session, stats }) => (
        <ListItem
          key={session.id}
          link
          href={`/workout/${session.date}`}
          title={formatDate(session.date)}
          subtitle={`${stats.exerciseCount} bài · ${stats.setCount} set · ${stats.totalVolume.toLocaleString("vi-VN")} kg`}
        />
      ))}
    </List>
  );
}
