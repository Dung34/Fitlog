type ExerciseCategory = "gym" | "calisthenics";

interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  isCustom?: boolean;
}

interface WorkoutSession {
  id: string;
  date: string;
  notes?: string;
}

interface WorkoutSet {
  id: string;
  sessionId: string;
  exerciseId: string;
  weight: number;
  reps: number;
  order: number;
}

interface FitLogState {
  exercises: Exercise[];
  sessions: WorkoutSession[];
  sets: WorkoutSet[];

  addExercise: (exercise: Omit<Exercise, "id">) => void;
  updateExercise: (id: string, data: Partial<Exercise>) => void;
  deleteExercise: (id: string) => void;

  getOrCreateSession: (date: string) => WorkoutSession;
  updateSessionNotes: (sessionId: string, notes: string) => void;

  addSet: (sessionId: string, exerciseId: string) => WorkoutSet;
  updateSet: (
    setId: string,
    data: Partial<Pick<WorkoutSet, "weight" | "reps">>,
  ) => void;
  deleteSet: (setId: string) => void;
  duplicateSet: (setId: string) => WorkoutSet;
}

export type {
  ExerciseCategory,
  Exercise,
  WorkoutSession,
  WorkoutSet,
  FitLogState,
};
