
import Link from 'next/link'
import Header from '../app/components/Header'
import TaskNavigation from '../app/components/TaskNavigation/TaskNavigation'
import styles from '../styles/Header.module.css'

export default function Home() {
  return (
    <div className={styles.background}>
      <Header  />
     
      <TaskNavigation/>
    </div>
  )
}
