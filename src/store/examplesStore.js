import { createSlice } from '@reduxjs/toolkit';

import FirstPortrait from '@assets/first_portrait.webp';
import SecondPortrait from '@assets/second_portrait.webp';
import ThirdPortrait from '@assets/third_portrait.webp';

const initialState = {
    photos: [
        {
            id: 1,
            photo: FirstPortrait,
            alt: 'first',
            text: 'Женский портрет',
            link: '/female_portrait'
        },
        {
            id: 2,
            photo: SecondPortrait,
            alt: 'second',
            text: 'Контент-съемка',
            link: '/content_shooting'
        },
        {
            id: 3,
            photo: ThirdPortrait,
            alt: 'third',
            text: 'Прогулка',
            link: '/walk'
        },
        {
            id: 1,
            photo: FirstPortrait,
            alt: 'first',
            text: 'Женский портрет',
            link: '/female_portrait'
        },
        {
            id: 2,
            photo: SecondPortrait,
            alt: 'second',
            text: 'Контент-съемка',
            link: '/content_shooting'
        },
        {
            id: 3,
            photo: ThirdPortrait,
            alt: 'third',
            text: 'Прогулка',
            link: '/walk'
        },
        {
            id: 1,
            photo: FirstPortrait,
            alt: 'first',
            text: 'Женский портрет',
            link: '/female_portrait'
        },
        {
            id: 2,
            photo: SecondPortrait,
            alt: 'second',
            text: 'Контент-съемка',
            link: '/content_shooting'
        },
        {
            id: 3,
            photo: ThirdPortrait,
            alt: 'third',
            text: 'Прогулка',
            link: '/walk'
        },
    ],
};

export const examplesSlice = createSlice({
    name: 'examples',
    initialState,
    reducers: {
    },
});

export const { } = examplesSlice.actions

export default examplesSlice.reducer