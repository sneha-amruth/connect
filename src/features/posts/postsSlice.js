import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { statusEnum } from "../../utils/utils";
import { restAPICalls } from "../../utils/CallRestAPI";

const { request } = restAPICalls();

export const loadPosts = createAsyncThunk(
	'posts/loadPosts',
	async () => {
		 const {data} = await request({
            method:  "GET",
            endpoint: `/api/posts`,
        });
        console.log("load posts "+data);
		return data;
	},
);

export const addPost = createAsyncThunk(
	'posts/addPost',
	async (caption) => {
		const {data} = await request({
            method:  "POST",
            endpoint: `/api/posts`,
            body: {
               caption
            }
        });
		return data;
	},
);

export const deletePost = createAsyncThunk(
	'posts/deletePost',
	async (postId) => {
		const {success} = await request({
            method:  "DELETE",
            endpoint: `/api/posts/${postId}`,
        });
		return success;
	},
);


export const loadCurrentPost = createAsyncThunk(
	'posts/loadCurrentPost',
	async (postId) => {
		const {success} = await request({
            method:  "GET",
            endpoint: `/api/posts/${postId}`,
        });
		return success;
	},
);
export const likePost = createAsyncThunk(
	'posts/likePost',
	async (likesCount, postId) => {
		const {success} = await request({
            method:  "POST",
            endpoint: `/api/posts/${postId}`,
            body: {
                likesCount
            }
        });
		return success;
	},
);

const initialState = {
  posts: null,
  currentPost: {},
  status: {
    LOAD_POSTS: 0,
    LIKE_POST: 0,
    ADD_POST: 0,
    LOAD_CURRENT_POST: 0,
    DELETE_POST: 0,
  },
  error: null,
  deletable: '',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
        state.status.LOAD_POSTS = statusEnum['LOADING'];
    },
    [loadPosts.fulfilled]: (state, action) => {
        state.posts = action.payload.posts;
        state.status.LOAD_POSTS = statusEnum['SUCCESS'];
    },
    [likePost.pending]: (state, action) => {
        state.status.LIKE_POST = statusEnum['LOADING'];
    },
    [likePost.fulfilled]: (state, action) => {
        const postIndex = state.posts.findIndex(
            (post) => post._id === action.payload.post._id,
        );
        state.posts[postIndex] = action.payload.post;
        state.currentPost = action.payload.post;
        state.status.LIKE_POST = statusEnum['SUCCESS'];
        state.status.LOAD_CURRENT_POST = statusEnum['SUCCESS'];
    },
    [addPost.pending]: (state, action) => {
        state.status.ADD_POST = statusEnum['LOADING'];
    },
    [addPost.fulfilled]: (state, action) => {
        state.posts.unshift(action.payload.post);
        state.status.ADD_POST = statusEnum['SUCCESS'];
    },
    [deletePost.pending]: (state, action) => {
        state.status.DELETE_POST = statusEnum['LOADING'];
    },
    [deletePost.fulfilled]: (state, action) => {
        state.posts = action.payload.posts;
        state.deletable = '';
        state.status.DELETE_POST = statusEnum['SUCCESS'];
    },
    [loadCurrentPost.pending]: (state, action) => {
        state.status.LOAD_CURRENT_POST = statusEnum['LOADING'];
    },
    [loadCurrentPost.fulfilled]: (state, action) => {
        state.currentPost = action.payload.post;
        state.status.LOAD_CURRENT_POST = statusEnum['SUCCESS'];
    },
},
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer