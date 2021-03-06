let user = {
  name: 'Tobias',
  avatar: '/static/tobias.png',
  birthday: (new Date(1978, 3, 2)).toISOString(),
  contracts: [
    {
      name: 'Household',
      type: 'policy',
      subtitle: 'gold',
      date: (new Date(2017, 7, 16)).toISOString(),
      avatars: []
    },
    {
      name: 'General liability',
      type: 'policy',
      subtitle: 'silver',
      date: (new Date(2017, 5, 6)).toISOString(),
      avatars: []
    }
  ],
  household: [
    {
      name: 'Christel',
      avatar: '/static/christel.png',
      birthday: (new Date(1982, 3, 2)).toISOString(),
    },
    {
      name: 'Joachim',
      avatar: '/static/joachim.png',
      birthday: (new Date(2009, 6, 10)).toISOString(),
    },
    {
      name: 'Erna',
      avatar: '/static/erna.png',
      birthday: (new Date(2002, 10, 21)).toISOString(),
    }
  ],
  partners: [
    {
      name: 'Zurich',
      avatar: '/static/zurich.png'
    }
  ],
  policies: [
    {
      name: 'Promotion',
      type: 'policy',
      subtitle: '30% on household policies',
      date: (new Date(2017, 7, 16)).toISOString(),
      avatars: []
    },
    {
      name: 'Winter is coming',
      type: 'policy',
      subtitle: 'are you ready?',
      date: (new Date(2017, 5, 6)).toISOString(),
      avatars: []
    },
    {
      name: 'New law',
      type: 'policy',
      subtitle: 'Do you have a fire alarm?',
      date: (new Date(2016, 9, 8)).toISOString(),
      avatars: []
    },

  ],
  house: {
    name: 'Müller\'s House',
    contractNumber: '83E735757',
    tags: [
      'T4',
      '47m²',
      '4 people',
      '6 rooms'
    ],
    rooms: [
      {
        'name': 'Kitchen',
        'type': 'kitchen'
      },
      {
        'name': 'Bathroom',
        'type': 'bathroom'
      },
      {
        'name': 'Living Room',
        'type': 'livingroom'
      },
      {
        'name': 'Bedroom 1',
        'type': 'bedroom'
      },
      {
        'name': 'Bedroom 2',
        'type': 'bedroom'
      },
      {
        'name': 'Bedroom 3',
        'type': 'bedroom'
      }
    ]
  },
  interventions: [
    {
      name: 'Intervention',
      type: 'intervention',
      subtitle: 'Plumbery',
      date: (new Date(2017, 9, 2)).toISOString(),
      avatars: ['Zurich']
    },
    {
      name: 'Intervention',
      type: 'intervention',
      subtitle: 'Masonery',
      date: (new Date(2017, 2, 21)).toISOString(),
      avatars: ['Zurich']
    }
  ]
};

const get = () => (user);
const set = (payload) => {
  user = Object.assign(user, payload);
  return user;
};

module.exports = {
  get,
  set
};
