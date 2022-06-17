import { FaQuestion } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { ImCross } from 'react-icons/im';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../backendComponents/firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';

export default function Challenges({ setCurrentChallenge }) {
    const [challengeList, setChallengeList] = useState(null);
    const [challengeContainerJSX, setChallengeContainerJSX] = useState(null);
    const [a, setA] = useState(0);
    useEffect(() => {
        const challengeReference = collection(db, 'typeOfChallenge');
        const getChallengeList = async () => {
            const data = await getDocs(challengeReference);
            setChallengeList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            if (!challengeList) {
                setA(a + 1);
            }
        };
        getChallengeList();
    }, [a]);
    useEffect(() => {
        if (challengeList) {
            const challengeJSX = challengeList.map((item) => {
                getDownloadURL(
                    ref(storage, `challengeBackground/${item.background}`)
                )
                    .then((url) => {
                        setChallengeContainerJSX(
                            <div className="challenge-box">
                                <div
                                    className="challenge-image"
                                    style={{
                                        backgroundImage: `url(${url})`,
                                    }}
                                ></div>
                                <h4>{item.name}</h4>
                                <p>
                                    <FaQuestion className="challenge-icon" />
                                    <span>{item.ammount} câu hỏi.</span>
                                </p>
                                <p>
                                    <IoIosTimer className="challenge-icon" />
                                    <span>{item.time} giây cộng dồn.</span>
                                </p>
                                <p>
                                    <ImCross className="challenge-icon" />
                                    <span>{item.wrong}</span>
                                </p>
                                <Link
                                    to="/challenges-gameplay"
                                    onClick={() => {
                                        setCurrentChallenge(item);
                                    }}
                                >
                                    <button>Tham Gia</button>
                                </Link>
                            </div>
                        );
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            });
            setChallengeContainerJSX(challengeJSX);
        }
    }, [challengeList]);
    return (
        <main className="challenges-main">
            <h2>Thử thách nâng cao</h2>
            <p>Chỉ dành cho những người có bộ não siêu tốc.</p>
            <div className="challenges-container">{challengeContainerJSX}</div>
        </main>
    );
}
