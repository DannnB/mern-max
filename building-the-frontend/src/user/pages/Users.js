import React from 'react';
import { useLocation } from "react-router-dom";

import UsersList from '../components/UsersList';
import Table from '../../shared/components/UIElements/Table';
// Goal: output list of users
const User = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Daniel Broughton',
            image: 
                'https://media-exp1.licdn.com/dms/image/C5603AQGABuiCZ0AyQg/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=to_8wn5BzUiilJdot75ZCWdVaPBEJyVMF2w80th995A',
            places: 1
        },
        {
            id: 'u2',
            name: 'Annise O\'connell',
            image: 'https://media-exp1.licdn.com/dms/image/C5603AQG9d8dci_hTdQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=aCqo0jLlRHJ09YIMERfda5uGPlsN19tWwAGxnNtdXTE',
            places: 2245
        }
    ]
    const OPTIONS = [
        {
            "option_id": 9,
            "option_id_unique": "PS001",
            "option_name": "Sport Green",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 10,
            "option_id_unique": "PS002",
            "option_name": "Sport Blue",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 11,
            "option_id_unique": "PS003",
            "option_name": "Sport Red",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Other",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 12,
            "option_id_unique": "PS004",
            "option_name": "Sport Ivory",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 13,
            "option_id_unique": "PS005",
            "option_name": "Sport Dove Grey",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Other",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 14,
            "option_id_unique": "PS006",
            "option_name": "Sport Black",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 15,
            "option_id_unique": "PS007",
            "option_name": "Classic Yellow",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 16,
            "option_id_unique": "PS008",
            "option_name": "Classic Orange",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 17,
            "option_id_unique": "PS009",
            "option_name": "Classic Meteor Red",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 18,
            "option_id_unique": "PS010",
            "option_name": "Classic Royal Ivory",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 19,
            "option_id_unique": "PS011",
            "option_name": "Classic Riviera Green",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 0
        },
        {
            "option_id": 20,
            "option_id_unique": "PS012",
            "option_name": "Classic Almond Green",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 21,
            "option_id_unique": "PS013",
            "option_name": "Classic Blue",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 22,
            "option_id_unique": "PS014",
            "option_name": "Classic White",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 23,
            "option_id_unique": "PS015",
            "option_name": "Classic Dark Grey",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        },
        {
            "option_id": 24,
            "option_id_unique": "PS016",
            "option_name": "Classic Heron Grey",
            "options_translation_name": "",
            "option_description": "",
            "option_translation_description": "",
            "category_name": "Solid",
            "language_code": "de",
            "region_code": "gb",
            "currency_code": "£",
            "price": 695
        }
    ]

    // const searchFilter = new URLSearchParams(useLocation().search);
    // const filteredList = OPTIONS.filter(
    //   (option) =>
    //     option.category_name.toLocaleLowerCase() ===
    //     searchFilter.get("category").toLocaleLowerCase() 
    //     // && option.price === 0
    // );
    return (
      <React.Fragment>
        <UsersList items={USERS} />
            <Table items={OPTIONS} />
      </React.Fragment>
    );
}

export default User;