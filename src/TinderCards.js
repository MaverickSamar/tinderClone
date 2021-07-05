import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://myhero.com/content/images/thumbs/0129896_elon-musk.jpeg",
        },
        {
            name: "Kim Kardashian",
            url: "https://media1.popsugar-assets.com/files/thumbor/RlkQFq1UJrWRF6b34llIlvepCa0/612x451:2344x2183/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/007/n/1922398/d3c823415dd4769f7d9263.82518194_/i/Kim-Kardashian.jpg",
        },
        {
            name: "Ariana Grande",
            url: "https://www.cosmopolitanme.com/public/styles/medium/public/images/2019/09/04/ariana-grande-cover.jpg?itok=NNqhcd6M",
        },
        {
            name: "Wiz Khalifa",
            url: "https://data.whicdn.com/images/25967302/original.jpg",
        },
        {
            name: "Hrithik Roshan",
            url: "http://im.rediff.com/movies/2014/jan/10hrithik-roshan15.jpg",
        },
        {
            name: "Kylie Jenner",
            url: "https://www.cosmopolitanme.com/public/styles/980px_1470px_fullimage_scale/public/images/2020/03/23/kyliejennerpregnancy-lead.jpg?itok=EpaH40sq",
        },
        {
            name: "Elina Karimova",
            url: "https://i0.wp.com/biographyer.com/wp-content/uploads/2021/02/70626652_545962546152596_5674229393940802641_n-1.jpg?resize=280%2C300&ssl=1",
        },
    ]);
    const swiped = (direction,nameToDelete) => {
        console.log("removing "+ nameToDelete);
    };
    const outOfFrame = (names) => {
        console.log(names + " left the screen");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir,person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style = {{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>        
        </div>
    );
}

export default TinderCards;
