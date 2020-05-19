import React from 'react'
import UsersList from '../components/UsersList'
// Goal: output list of users
const User = () => {
    const USERS = [
        {
            id: Math.round(Math.random() * 1000000).toString(),
            name: 'Dan B',
            image: 
                'https://media-exp1.licdn.com/dms/image/C5603AQGABuiCZ0AyQg/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=to_8wn5BzUiilJdot75ZCWdVaPBEJyVMF2w80th995A',
            places: 1
        },
        {
            id: Math.round(Math.random() * 1000000).toString(),
            name: 'Annise O',
            image: 'https://media-exp1.licdn.com/dms/image/C5603AQG9d8dci_hTdQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=aCqo0jLlRHJ09YIMERfda5uGPlsN19tWwAGxnNtdXTE',
            places: 2245
        }
    ]
    return <UsersList items={USERS}/>
}

export default User;