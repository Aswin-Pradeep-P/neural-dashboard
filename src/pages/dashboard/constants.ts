import { LeaderCardProps } from "../../components/leader-card/leaderCard";

export const dashboardCard = [
    { text: 'No of students', count: 100 },
    { text: 'Total assessments', count: 50},
    { text: 'Assessment completed', count: 30},
    { text: 'Average Score', count: '85 %' }
  ];
  
 export const leaderData: LeaderCardProps[] = [
    { id: '1', name: 'Alice Johnson', rank: 1, percentage: '95.75%', gender: 'female' },
    { id: '2', name: 'Bob Smith', rank: 2, percentage: '94.20%', gender: 'male'  },
    { id: '3', name: 'Catherine Lee', rank: 3, percentage: '92.50%', gender: 'female'  },
    { id: '5', name: 'Eva White', rank: 5, percentage: '89.85%', gender: 'female'  },
    { id: '6', name: 'Frank Harris', rank: 6, percentage: '88.60%', gender: 'male'  },
    { id: '7', name: 'Grace Wilson', rank: 7, percentage: '87.30%', gender: 'female'  },
    { id: '8', name: 'Henry Martinez', rank: 8, percentage: '86.10%', gender: 'male'  },
    { id: '4', name: 'David Brown', rank: 4, percentage: '91.00%', gender: 'male'  },
    { id: '9', name: 'Isabella Davis', rank: 9, percentage: '85.00%', gender: 'female'  },
    { id: '10', name: 'Jack Thompson', rank: 10, percentage: '83.75%', gender: 'male'  },
    { id: '11', name: 'Katherine Garcia', rank: 11, percentage: '82.45%', gender: 'female'  },
    { id: '12', name: 'Liam Rodriguez', rank: 12, percentage: '81.25%', gender: 'female'  },
    { id: '13', name: 'Mia Lee', rank: 13, percentage: '79.90%', gender: 'male'  },
    { id: '14', name: 'Noah Walker', rank: 14, percentage: '78.40%', gender: 'male'  },
    { id: '15', name: 'Olivia Hall', rank: 15, percentage: '76.85%', gender: 'female'  },
    { id: '16', name: 'Paul Allen', rank: 16, percentage: '75.50%', gender: 'male'  },
    { id: '17', name: 'Quinn Young', rank: 17, percentage: '73.90%', gender: 'female'  },
    { id: '18', name: 'Rita King', rank: 18, percentage: '72.20%', gender: 'female'  },
    { id: '19', name: 'Samuel Scott', rank: 19, percentage: '71.00%', gender: 'male'  },
    { id: '20', name: 'Tina Green', rank: 20, percentage: '70.00%', gender: 'female'  }
  ];
  
 export const assessmentReport = [
    {
      data: [
        { id: 0, value: 10, label: 'Created' },
        { id: 1, value: 15, label: 'Completed' }
      ],
    },
  ]

  export const moduleReport = [
    {
      data: [
        { id: 0, value: 10, label: 'Uploaded' },
        { id: 1, value: 15, label: 'Completed' }
      ],
    },
  ]