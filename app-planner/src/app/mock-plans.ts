import { Plan } from './plan-model';

export const PLANDATA: Plan[] = [
  {
    user_id: 1999991,
    name: 'Twisty',
    username: 'handleBars',
    applications: [
      {   title: 'SampleTitle',
        components: [
          {
            title: 'Node',
            description: 'NodeJS for Server Tech',
            url: 'www.nodejs.org',
            componentTutorials: [
              {
                title: 'How to node',
                url: 'fakesite.fak/howtonode'
              },
              {
                title: 'How to node Even Better!',
                url: 'fakesite.fak/howtonodeEB'
              }]
          },
          {
            title: 'Express',
            description: 'Express JS -- Comms',
            url: 'www.expressjs.org',
            componentTutorials: [
              {
                title: 'How to Express',
                url: 'fakesite.fak/howtoexpress'
              },
              {
                title: 'How to Express Even Better!',
                url: 'fakesite.fak/howtoexpressEB'
              }]
        } ]
      }]
  }
];

