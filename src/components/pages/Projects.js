import React from 'react';
import Project from '../Project';

import move from '../../assets/images/screenshot-move.png';
import marvel from '../../assets/images/screenshot-marvel-wiki.png';
import blog from '../../assets/images/screenshot-tech-blog.png';
import weather from '../../assets/images/screenshot-weather.png';
import profile from '../../assets/images/screenshot-team-profile.png';
import quiz from '../../assets/images/screenshot-quiz.png';

export default function Projects() {

    const projectData = [
        {
            id: 1,
            img: move,
            alt: 'homepage of the Move applications with a series of posts on the left side and a chat box on the right side',
            title: 'Move',
            description: 'Full-Stack Group Project',
            deployment: 'https://uwb-move.herokuapp.com/',
            repository: 'https://github.com/aavillanueva6/Move'
        },
        {
            id: 2,
            img: marvel,
            alt: 'search results page for Spider Man that shows 5 Spider Man movies',
            title: 'Marvel Wiki',
            description: 'APIs Group Project',
            deployment: 'https://rajeswarivmarimuthu.github.io/marvel-character-finder/',
            repository: 'https://github.com/rajeswarivmarimuthu/marvel-character-finder'
        },
        {
            id: 3,
            img: blog,
            alt: 'page with a card titled \'edit post\' over an input for a title and an input for post content; they both are filled out and below are two buttons called \'update post\' and \'delete post\'',
            title: 'Tech Blog',
            description: 'MVC (Model View Controller)',
            deployment: 'https://tech-blog-ssharma.herokuapp.com/',
            repository: 'https://github.com/supsha878/tech-blog'
        },
        {
            id: 4,
            img: weather,
            alt: 'search bar with a list of past cities searched below it. The temperature and 5-day forecast for Atlanta is displayed on the other side',
            title: 'Weather Dashboard',
            description: 'Third Party APIs',
            deployment: 'https://supsha878.github.io/weather-dashboard/',
            repository: 'https://github.com/supsha878/weather-dashboard'
        },
        {
            id: 5,
            img: profile,
            alt: 'a page titled \'My Team\' with 3 cards below is that show the team member\'s name, role, contact information, and additional information',
            title: 'Team Profile Generator',
            description: 'Object-Oriented Programming',
            deployment: 'https://youtu.be/l5-xCIuGZC4',
            repository: 'https://github.com/supsha878/team-profile-generator'
        },
        {
            id: 6,
            img: quiz,
            alt: 'quiz page with a question asking for the three components of a for loop with four answers below it',
            title: 'Code Quiz',
            description: 'DOM Manipulation',
            deployment: 'https://supsha878.github.io/code-quiz/',
            repository: 'https://github.com/supsha878/code-quiz'
        }
    ]

    return (
        <main className='projects'>
            <h2>Projects</h2>
            {projectData.map((data) => {
                return <Project key={data.id} projectInfo={data} />
            })}
        </main>
    );
}