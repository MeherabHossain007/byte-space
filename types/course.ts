export interface CourseItem {
  id: string;
  title: string;
  category: string;
  thumb: string;
  instructor?: string;
  price?: string;
  period?: string;
  rating?: number | string;
  level?: string;
  lessonsCount?: string;
  duration?: string;
  commentsCount?: string;
  studentsCount?: string;
}

export type CourseCategory = string;
