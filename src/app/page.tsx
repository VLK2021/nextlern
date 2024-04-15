import styles from "./page.module.css";
// @ts-ignore
import course from './course.json';
import {Lesson} from "./lesson";


async function getAllCourses(): Promise<typeof course> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(course), 1000);
    })
}


export default async function Home() {
    const courses = await getAllCourses();


    return (
        <main className={styles.main}>
            <h2>TEST</h2>

            <ul>
                {courses.lessons.map(lesson => {
                    return <li key={lesson.name}>
                        <Lesson title={lesson.title}/>
                    </li>
                })}
            </ul>
        </main>
    );
}
