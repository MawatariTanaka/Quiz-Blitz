import Quiz from '../Quiz';
import { questionsDatabase } from '../../backendComponents/getQuiz';

export default function Home() {
    return (
        <section
            onClick={() => console.log(questionsDatabase)}
            id="daily-question"
        >
            <h2>Thử thách hôm nay</h2>
            <Quiz />
        </section>
    );
}
