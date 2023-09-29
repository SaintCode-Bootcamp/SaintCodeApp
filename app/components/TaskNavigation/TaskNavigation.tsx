import cn from '../../../shared/lib/cn/cn';
import s from '../TaskNavigation/TaskNavigation.module.scss';
import ChapterTitle from '../ChapterTitle/ChapterTitle';
import TaskSelect from '../TaskSelect/TaskSelect';

function TaskNavigation() {
  // Независимо от того, в каком формате придут данные с бека, нужно будет их обязательно трансформировать в два массива, первый - chapter title (думаю можно вытащить из usert level stat по ключу chapter_id), второй - думаю оттуда же, но нужно продумать, как сделать калькуляцию прогресса (или это на беке будет?)

  interface Chapter {
    id: number;
    title: string;
    text: string;
  }

  interface Task {
    id: number;
    chapter: number;
    progress: number;
  }

  interface ChapterObject extends Chapter {
    tasks: Task[];
  }

  let chapters: Chapter[] = [
    {
      id: 1,
      title: 'Раздел 1',
      text: 'Верстка, язык разметки HTML, базис любого сайта.',
    },
    {
      id: 2,
      title: 'Раздел 2',
      text: 'JavaScript, “оживляем” web страницу',
    },
  ];

  let tasks: Task[] = [
    {
      id: 1,
      chapter: 1,
      progress: 25,
    },
    {
      id: 2,
      chapter: 1,
      progress: 100,
    },
    {
      id: 3,
      chapter: 1,
      progress: 25,
    },
    {
      id: 4,
      chapter: 1,
      progress: 63,
    },
    {
      id: 5,
      chapter: 2,
      progress: 30,
    },
    {
      id: 6,
      chapter: 2,
      progress: 0,
    },
  ];

  function createChapterObjects(
    chapters: Chapter[],
    tasks: Task[]
  ): ChapterObject[] {
    return chapters.map((chapter) => {
      const chapterTasks = tasks.filter((task) => task.chapter === chapter.id);

      return {
        ...chapter,
        tasks: chapterTasks,
      };
    });
  }

  const chapterObjects = createChapterObjects(chapters, tasks);
  console.log(chapterObjects);

  return (
    <div className={cn(s.cn__container)}>
      <ChapterTitle {...chapters[0]} />
      {tasks
        .filter((el) => el.chapter === 1)
        .map((el) => (
          <TaskSelect {...el} />
        ))}
      <ChapterTitle {...chapters[1]} />
      {tasks
        .filter((el) => el.chapter === 2)
        .map((el) => (
          <TaskSelect {...el} />
        ))}
    </div>
  );
}

export default TaskNavigation;
