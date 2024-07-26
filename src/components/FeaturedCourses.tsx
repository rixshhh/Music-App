import { cn } from "@/utils/cn";
import { Boxes, BoxesCore } from "./ui/background-boxes";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="h-auto relative w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="py-12 w-full">
        <div className="text-center z-30 relative">
          <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATUERD COURSES
          </h1>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the Best
          </h2>
        </div>

        <div className="mt-10 z-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  flex justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`} 
                    className="rounded m-4 p-2 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center z-30">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
