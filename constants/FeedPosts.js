const defaultPosts = [
  {
    name: 'Pres. Rodrigo Roa Duterte',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/du30.png?alt=media&token=26fc7597-6424-4ab6-be7c-2ee59152f9d3',
    comment: 'Created an event on inter-country agricultural talks',
    subcomment: '',
    timestamp: '11/26/2018 1:05PM',
    points: '212',
  },
  {
    name: 'Bryan',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/bryan.png?alt=media&token=24f72e5b-86d9-4c00-a85c-37f8412b950e',
    comment: 'Verified food exchange in Sulu',
    subcomment: '',
    timestamp: '11/26/2018 1:05PM',
    points: '111',
  },
  {
    name: 'Jannieca',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/jannieca.png?alt=media&token=1ad43871-b028-4892-a65c-4e6c4e9e7868',
    comment: 'Posted a video on home planting tutorial',
    subcomment: '',
    timestamp: '11/26/2018 2:00PM',
    points: '198',
  },
  {
    name: 'Buhawi',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/buhawi.png?alt=media&token=2412652b-f29e-42a7-81ed-daa3eb8b63b7',
    comment: 'Donated food for 50 people in Cagayan',
    subcomment: '',
    timestamp: '11/26/2018 2:05PM',
    points: '213',
  },
  {
    name: 'Sarah',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/Sarah.png?alt=media&token=d9c6df32-ec59-42ec-9255-7114b4943319',
    comment: 'Attended event on food security',
    subcomment: '',
    timestamp: '11/26/2018 4:45PM',
    points: '197',
  },
  {
    name: 'Jowil',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/Joil.png?alt=media&token=e31dd41a-cf30-4541-a49e-3ad3837e7e89',
    comment: 'Attended event on food security',
    subcomment: '',
    timestamp: '11/26/2018 5:45PM',
    points: '195',
  },
];

const locationPosts = [
  {
    name: 'Buhawi',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/buhawi.png?alt=media&token=2412652b-f29e-42a7-81ed-daa3eb8b63b7',
    comment: 'Pledged to donate organic food for 50 people',
    subcomment: '',
    timestamp: '11/26/2018 2:05PM',
    points: '213',
  },
  {
    name: 'Sarah',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/Sarah.png?alt=media&token=d9c6df32-ec59-42ec-9255-7114b4943319',
    comment: 'Pledged to donate processed food for 10 people',
    subcomment: '',
    timestamp: '11/26/2018 4:45PM',
    points: '197',
  },
  {
    name: 'Jowil',
    pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/Joil.png?alt=media&token=e31dd41a-cf30-4541-a49e-3ad3837e7e89',
    comment: 'Pledged to donate cooked food for 10 people',
    subcomment: '',
    timestamp: '11/26/2018 5:45PM',
    points: '195',
  }
];

function arePostsDefault(posts) {
  return JSON.stringify(posts) === JSON.stringify(defaultPosts);
}

export default {
  defaultPosts,
  locationPosts,
  arePostsDefault
};
