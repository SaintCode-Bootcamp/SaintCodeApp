import cn from '../../../shared/lib/cn/cn';
import s from '../TaskNavigation/TaskNavigation.module.scss';
import ChapterTitle from '../ChapterTitle/ChapterTitle';
import TaskSelect from '../TaskSelect/TaskSelect';
import styles from './TaskNavigation.module.css';

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
      progress: 0,
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
      progress: 100,
    },
    {
      id: 5,
      chapter: 2,
      progress: 0,
    },
    {
      id: 7,
      chapter: 2,
      progress: 0,
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

  // <div className="container">
  //   <div className="article"><img/></div>
  //   <div className="article"><img /></div>
  //   <div className="article"><img/></div>
  // </div>;

  const chapterObjects = createChapterObjects(chapters, tasks);
  console.log(chapterObjects[0].tasks);

  return (
    <div className={styles.section_container}>
      {chapterObjects.map((el) => (
        <div className={styles.chapter_container}>
          <ChapterTitle id={el.id} title={el.title} text={el.text} />
          <div className={styles.progress}>
            {el.tasks.map((el) => (
              <div className={styles.line_progress}>
                <div
                  className={
                    chapterObjects[0].tasks.length % 2 !== 2
                      ? styles.task_select
                      : styles.task_select_odd
                  }
                >
                  <TaskSelect
                    chapter={el.chapter}
                    progress={el.progress}
                    id={el.id}
                  />
                </div>

                <span
                  className={
                    el.progress == 0
                      ? styles.empty_line_one
                      : el.chapter == 1
                      ? styles.green_line_one
                      : styles.violet_line_one
                  }
                ></span>
                <span
                  className={
                    el.progress == 0
                      ? styles.empty_line_two
                      : el.chapter == 1
                      ? styles.green_line_two
                      : styles.violet_line_two
                  }
                ></span>
                <span
                  className={
                    el.progress == 0
                      ? styles.empty_line_tree
                      : el.chapter == 1
                      ? styles.green_line_tree
                      : styles.violet_line_tree
                  }
                ></span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* <ChapterTitle {...chapters[0]} />
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
        ))} */}
    </div>
  );
}

export default TaskNavigation;
