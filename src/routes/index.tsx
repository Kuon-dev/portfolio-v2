import type { DocumentHead } from "@builder.io/qwik-city";
import { component$, useOnWindow, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useOnWindow('load', $(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme(mediaQuery.matches);
    mediaQuery.addListener((e) => applyTheme(e.matches));
  }));

  return (
    <div class="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      <Header />
      <main>
        <Today />
        <Projects />
        <UI />
        <More />
      </main>
    </div>
  );
});

const Header = component$(() => {
  return (
    <header class="mb-32 flex flex-col items-start">
      <Link class="text-medium inline-block font-medium no-underline" href="/">Aaron Lyn</Link>
      <span class="text-medium font-medium leading-none text-gray-1100">Professional Web Developer</span>
    </header>
  );
});

const Today = component$(() => {
  return (
    <section class="mb-16 sm:mb-32">
      <h2 class="mb-5 block font-medium sm:mb-6">Professional Background</h2>
      <p class="text-gray-1100">Professional junior web developer capable of creating professional looking and user-friendly websites from scratch and writes performance optimized, reusable and refactorable codes. Professionally developed 5 web applications with multiple Javascript frameworks.</p>
      <p class="mt-4 text-gray-1100">Hungry for knowledge, collaborative individual and possess analytical skills. Enjoys problem solving and willing to adapt to changes in the industry to stay on top.</p>
    </section>
  );
});

const Projects = component$(() => {
  const projects = [
    { name: 'Web Application 1', description: 'E-commerce platform built with React and Node.js', url: '#' },
    { name: 'Web Application 2', description: 'Task management system using Vue.js and Firebase', url: '#' },
    { name: 'Web Application 3', description: 'Social media dashboard with Angular and MongoDB', url: '#' },
  ];

  return (
    <div class="-mb-3 mt-16 sm:mt-32">
      <h2 class="mb-5 block font-medium sm:mb-4">Projects</h2>
      <div class="flex flex-col gap-7 sm:gap-4">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-stone-900 sm:py-3"
          >
            <span>{project.name}</span>
            <span class="text-gray-1100">{project.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
});

const UI = component$(() => {
  const uiItems = [
    { title: 'Journey: 2017', description: 'Started journey on programming as a hobby', url: '#' },
    { title: 'Journey: 2020', description: 'Enrolled for diploma of ICT with specialism in software engineering', url: '#' },
    { title: 'Journey: 2022', description: 'Started journey on web development', url: '#' },
  ];

  return (
    <div class="-mb-3 mt-16 sm:mt-32">
      <h2 class="mb-5 block font-medium sm:mb-4">Journey</h2>
      <div class="flex flex-col gap-7 sm:gap-4">
        {uiItems.map((item) => (
          <Link
            key={item.title}
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-stone-900 sm:py-3"
            href={item.url}
          >
            <span>{item.title}</span>
            <span class="text-gray-1100">{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
});

const More = component$(() => {
  return (
    <div class="mt-16 sm:mt-32">
      <h2 class="mb-5 block font-medium sm:mb-6">Bio</h2>
      <span class="text-gray-1100">
        Aaron has a strong passion for technology and computers. Outside of programming, Aaron has a hobby of collecting and engaging with technology. He likes to tinker with his Arch Linux Operating System and enjoys collecting custom keyboards.
      </span>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Aaron Lyn - Professional Web Developer",
  meta: [
    {
      name: "description",
      content: "Aaron Lyn's professional web developer portfolio",
    },
  ],
};
