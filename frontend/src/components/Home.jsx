import './Home.css'
import React, { useState } from 'react';

export default function Home() {
    const poems = [
        {
            id: 1,
            title: "Still I Rise",
            author: "Maya Angelou",
            text: "You may write me down in history, With your bitter, twisted lies,You may tread me in the very dirt, But still, like dust, I’ll rise.Does my sassiness upset you?...",
        },
        {
            id: 2,
            title: "There Will Come Soft Rain",
            author: "Sara Teasdale",
            text: "There will come soft rain and the smell of the ground, And swallows circling with their shimmering sound; And frogs in the pools singing at night, And wild plum trees in tremulous white...",
        },
        {
            id: 3,
            title: "Dreams",
            author: "Langston Hughes",
            text: "Hold fast to dreams, For if dreams die, Life is a broken-winged bird, That cannot fly. Hold fast to dreams, For when dreams go...",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? poems.length - 1 : prev - 1));
    };
    const goNext = () => {
        setCurrentIndex((prev) => (prev === poems.length - 1 ? 0 : prev + 1));
    };
    const currentPoem = poems[currentIndex];

    return(
        <>
            <div className='home-container'>
                <h1 className='heading'>Inkspire</h1>
                <p className='sub-heading'>Where words find their wings.</p>
            </div>
            <div className='section1'>
                <h1>Get inspired by others'</h1>
                <p>Inkspire provides a platform for all the creative writters to express themselves through their poems. Here are some of the most beatiful art pieces!</p>
                <div className='poem-container'>
                    <button onClick={goPrev} aria-label="Previous poem" style={{ fontSize: "1rem", borderRadius: "50%", width: 50, height: 50 }} > &lt; </button>
                    <div className='poem'>
                        <div style={{ flex: 1, padding: "0 20px" }}>
                            <h2>{currentPoem.title}</h2>
                            <p style={{ fontStyle: "italic", whiteSpace: "pre-wrap" }}>{currentPoem.text}</p>
                            <p>— {currentPoem.author}</p>
                        </div>
                    </div>
                    <button onClick={goNext} aria-label="Next poem" style={{ fontSize: "1rem", borderRadius: "50%", width: 50, height: 50 }} > &gt; </button>
                </div>
                <button>Explore more!</button>
            </div>
            <div className='section2'>
                <div className='left'>
                    <h1>Let your creativity flow...</h1>
                    <p>Get started and let the world know your creativity. Sign in and share your own creations with others!</p>
                </div>
                <div className='right'>
                    <form className='signin'>
                        <input placeholder='Email' className='fields'></input>
                        <input placeholder='Password' className='fields'></input>
                        <button className='submit'>Sign in!</button>
                    </form>
                </div>
            </div>
        </>
    )
}