import { isToday, add,  } from "date-fns"

export const mockMeetings = () => {
    const today = new Date()


    return [
        {
          id: 1,
          name: 'Leslie Alexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          startDatetime: today,
          endDatetime: add(today, { hours: 1 }),
        },
        {
          id: 2,
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          startDatetime: add(today, { hours: 5 }),
          endDatetime: add(today, { hours: 8 }),
        },
        {
          id: 3,
          name: 'Dries Vincent',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          startDatetime: add(today, { hours: 9 }),
          endDatetime: add(today, { hours: 10 }),
        },
        {
          id: 4,
          name: 'Leslie Alexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          startDatetime: add(today, { days: 1 }),
          endDatetime: add(today, { days: 1, hours: 1 }),
        },
        {
          id: 5,
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          startDatetime: add(today, { days: 6 }),
          endDatetime: add(today, { days: 7, hours: 6 }),
        },
      ]
}