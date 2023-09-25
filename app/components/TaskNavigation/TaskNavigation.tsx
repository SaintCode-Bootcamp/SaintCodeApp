import cn from '../../../shared/lib/cn/cn';
import s from '../TaskNavigation/TaskNavigation.module.scss';
import ChapterTitle from "../ChapterTitle/ChapterTitle";
import TaskSelect from "../TaskSelect/TaskSelect";


function TaskNavigation() {
  let chapters = [
    {
      id: 1,
      title: "Раздел 1",
      text: "Верстка, язык разметки HTML, базис любого сайта."
    },
    {
      id: 2,
      title: "Раздел 2",
      text: "JavaScript, “оживляем” web страницу"
    }
  ]

  let tasks = [
    {
      id:1,
      chapter: 1,
      progress: 25
    },
    {
      id:2,
      chapter: 1,
      progress: 100
    },
    {
      id:3,
      chapter: 1,
      progress: 25
    },
    {
      id:4,
      chapter: 1,
      progress: 63
    },
    {
      id:5,
      chapter: 2,
      progress: 30
    },
    {
      id:6,
      chapter: 2,
      progress: 0
    }
  ]


return (
    <div className={cn(s.cn__container)}>

      <ChapterTitle {...chapters[0]}/>
      {tasks
        .filter((el) => el.chapter === 1)
        .map((el) => (
          <TaskSelect {...el}
          />))}
      <ChapterTitle {...chapters[1]}/>
      {tasks
        .filter((el) => el.chapter === 2)
        .map((el) => (
          <TaskSelect {...el}/>))}
    </div>
        )
}

export default TaskNavigation;
