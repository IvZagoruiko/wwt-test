import {ISummary} from '../interfaces';

export const SUMMARY: ISummary = {
  name: 'Ivan Zahoruiko',
  position: 'Junior Front-End Developer',
  aboutMe: `Self-motivated and results-driven professional, an ambitious problem solver with a passion for software
        development. Fast learner, equipped with analytical skill. Highly adaptable to rapidly changing environments and
        challenging tasks. Highly motivated team player with the ability to work independently and adapt quickly to new
        and emerging technologies.`,
  sideBar: {
    photo: 'assets/images/photo.png',
    contacts: [
      {
        label: 'Cell:',
        ref: 'tel: +380965112937',
        text: '+38 (096) 511 29 37'
      },
      {
        label: 'Email:',
        ref: 'mailto: iv.zagoruiko@gmail.com',
        text: 'iv.zagoruiko@gmail.com'
      },
      {
        label: 'GitHub:',
        ref: 'https://github.com/IvZagoruiko',
        text: 'github.com/IvZagoruiko'
      },
      {
        label: 'LinkedIn:',
        ref: 'https://www.linkedin.com/in/ivan-zahoruiko/',
        text: 'linkedin.com/in/ivan-zahoruiko/'
      }
    ],
    lists: [
      {
        title: 'Tech Skills',
        items: [
          'Angular 2+',
          'Angular Material',
          'NgRx',
          'RxJS',
          'JavaScript',
          'HTML5',
          'CSS3',
          'SCSS',
          'OOP',
          'RESTful Api'
        ]
      },
      {
        title: 'Soft Skills',
        items: [
          'Scrum',
          'Agile',
          'TeamWork',
          'Self-motivated',
          'Results-driven'
        ]
      }
    ]
  },
  experience: [
    {
      position: 'Frontend developer',
      company: 'Body Storm',
      period: 'Sep.2020 – Present',
      duties: [
        'Construct the UI pages in accordance with project design concepts',
        'Document the detailed application specification and technical design',
        'Experience in relational database programming and administration in PostgreSQL',
        'Develop landing page'
      ]
    },
    {
      position: 'Frontend developer',
      company: 'Freelance / Upwork',
      period: 'Feb. 2020 – Sep.2020'
    }
  ],
  education: [
    {
      name: 'Kremenchug National University',
      specialty: 'Computer Engineer',
      period: '2014 – 2020',
      country: 'Ukraine'
    }
  ],
  courses: [
    {
      name: 'Video course on Angular 9',
      period: 'May 2020 – Jun. 06.2020',
      link: 'https://www.udemy.com/course/angular-complete-guide/'
    },
    {
      name: 'React/Redux',
      period: 'Apr. 2020 – May 2020',
      link: 'https://monsterlessons.com/project/series/internet-magazin-na-reactredux'
    }
  ]
};
