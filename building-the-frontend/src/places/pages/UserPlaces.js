import React from 'react';
import { useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Ancient Building',
        description: '01 description',
        imageUrl: 'https://source.unsplash.com/608x320/?building, ancient',
        address: 'address 01',
        location: {
            lat: 52.124690,
            lng: -2.387690 
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'New Building',
        description: '02 description',
        imageUrl: 'https://source.unsplash.com/608x320/?building, new',
        address: 'address 02',
        location: {
            lat: 52.124690,
            lng: -2.387690 
        },
        creator: 'u2'
    },
    {
        id: 'p3',
        title: 'Old Building',
        description: '03 description',
        imageUrl: 'https://source.unsplash.com/608x320/?building, old',
        address: 'address 03',
        location: {
            lat: 52.124690,
            lng: -2.387690 
        },
        creator: 'u2'
    },
]
const UserPlaces = props => {
    const userId = useParams().userId;
    console.log(`ID: ${userId}`)
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;