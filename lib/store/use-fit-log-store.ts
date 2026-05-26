"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Exercise, FitLogState, WorkoutSession, WorkoutSet } from "./type";

function notImplemented(action: string): never {
  throw new Error(`${action} is not implemented yet — Sprint 2`);
}

export const useFitLogStore = create<FitLogState>()(
  persist(
    (): FitLogState => ({
      exercises: [] as Exercise[],
      sessions: [] as WorkoutSession[],
      sets: [] as WorkoutSet[],

      addExercise: () => notImplemented("addExercise"),
      updateExercise: () => notImplemented("updateExercise"),
      deleteExercise: () => notImplemented("deleteExercise"),

      getOrCreateSession: () => notImplemented("getOrCreateSession"),
      updateSessionNotes: () => notImplemented("updateSessionNotes"),

      addSet: () => notImplemented("addSet"),
      updateSet: () => notImplemented("updateSet"),
      deleteSet: () => notImplemented("deleteSet"),
      duplicateSet: () => notImplemented("duplicateSet"),
    }),
    {
      name: "fitlog-storage",
      partialize: (state) => ({
        exercises: state.exercises,
        sessions: state.sessions,
        sets: state.sets,
      }),
    },
  ),
);
