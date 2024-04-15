'use client'

import {useState} from "react";

type LessonProps = {
    title: string;
};

type LikeState = 'unset' | 'Liked' | 'dislake';

export function Lesson({title}: LessonProps) {
    const [likeState, setLikeState] = useState<LikeState>('unset');

    const setLike = () => setLikeState('Liked');


    return (
        <div>
            <h2>{title}</h2>
            <button type={'button'} onClick={setLike}>
                {likeState === 'unset' ? 'like' : likeState}
            </button>
        </div>
    )
}