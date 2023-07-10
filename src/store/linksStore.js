import { createSlice } from '@reduxjs/toolkit';

import FirstPortrait from '@assets/first_portrait.webp';
import SecondPortrait from '@assets/second_portrait.webp';
import ThirdPortrait from '@assets/third_portrait.webp';

const initialState = {
    links: {}
};

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        setLink: ({ links }, { payload }) => {
            links = { ...links, ...payload };
        }
    },
});

export const { setLink } = linksSlice.actions

export default linksSlice.reducer