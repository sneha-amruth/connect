import { statusEnum } from '../../utils/utils';
import { setLocalStorage } from "../../utils/localStorage";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { restAPICalls } from "../../utils/CallRestAPI";

const { request } = restAPICalls();

export const loadCurrentUser = createAsyncThunk(
	'posts/loadCurrentUser',
	async (userId) => {
		const {data} = await request({
            method:  "GET",
            endpoint: `/api/user/${userId}`,
        });
		return data;
	},
);

export const loginUser = createAsyncThunk(
	'currentUser/loginUser',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const {data} = await request({
                method:  "POST",
                endpoint: `/api/user/login`,
				body: {
					email,
					password,
				},
			});
			return data;
		} catch (error) {
			const value = error.response.data.error;
			return rejectWithValue(value);
		}
	},
);

export const registerUser = createAsyncThunk(
	'currentUser/registerUser',
	async ({ user }, { rejectWithValue }) => {
		try {
			const {data} = await request({
                method:  "POST",
                endpoint: `/api/user/register`,
				body: {
					user
				},
			});
			return data;
		} catch (error) {
			const value = error.response.data.error;
			return rejectWithValue(value);
		}
	},
);

export const logoutUser = () => {};

const initialState = {
	currentUser: null,
	status: {
		LOAD_CURRENT_USER: 0,
	},
	token: null,
	error: null,
	editProfile: false,
};

export const updateProfile = createAsyncThunk(
	'posts/updateProfile',
	async (bio) => {
		const { data } = await request({
			method: 'POST',
            endpoint: `/api/user/bio`,
            body: {
                bio
            },
		});
		return data;
	},
);

const currentUserSlice = createSlice({
	name: 'currentUser',
	initialState: initialState,
	reducers: {
		setToken(state, { payload }) {
			state.token = payload.token;
		},
		resetError(state) {
			state.error = '';
		},
		resetToken(state) {
			state.token = null;
		},
		toggleEditProfile(state) {
			state.editProfile = !state.editProfile;
		},
		cancelEditClicked(state) {
			state.editProfile = false;
		},
	},
	extraReducers: {
		[loadCurrentUser.pending]: (state, action) => {
			state.status.LOAD_CURRENT_USER = statusEnum['LOADING'];
		},
		[loadCurrentUser.fulfilled]: (state, action) => {
			state.currentUser = action.payload.user;
			state.status.LOAD_CURRENT_USER = statusEnum['SUCCESS'];
		},
		[loginUser.pending]: (state, action) => {
			state.status.error = '';
			state.status.LOAD_CURRENT_USER = statusEnum['LOADING'];
		},
		[loginUser.fulfilled]: (state, action) => {
			state.currentUser = action.payload.user;
			state.token = action.payload.token;
			state.status.LOAD_CURRENT_USER = statusEnum['SUCCESS'];
			setLocalStorage(action.payload.user, action.payload.token);
		},
		[loginUser.rejected]: (state, action) => {
			state.error = action.payload;
			state.status.LOAD_CURRENT_USER = statusEnum['REJECTED'];
		},
		[registerUser.pending]: (state, action) => {
			state.status.error = '';
			state.status.LOAD_CURRENT_USER = statusEnum['LOADING'];
		},
		[registerUser.fulfilled]: (state, action) => {
			state.currentUser = action.payload.user;
			state.token = action.payload.token;
			state.status.LOAD_CURRENT_USER = statusEnum['SUCCESS'];
			setLocalStorage(action.payload.user, action.payload.token);
		},
		[registerUser.rejected]: (state, action) => {
			state.error = action.payload;
			state.status.LOAD_CURRENT_USER = statusEnum['REJECTED'];
		},
		[updateProfile.pending]: (state) => {
			state.status.LOAD_CURRENT_USER = statusEnum['LOADING'];
		},
		[updateProfile.fulfilled]: (state, action) => {
			state.currentUser.bio = action.payload.user.bio;
			state.editProfile = false;
			state.status.LOAD_CURRENT_USER = statusEnum['SUCCESS'];
		},
	},
});

export const {
	setToken,
	resetError,
	resetToken,
	toggleEditProfile,
	cancelEditClicked,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;