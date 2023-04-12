import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../Utils/apiURL';
import { STATUS } from '../Utils/status';

const initialState = {
   blogs: [],
   blogStatus: STATUS.IDLE,
   blogSearch: [],
   blogSearchStatus: STATUS.IDLE,
   blogSingle: {},
   blogSingleStatus: STATUS.IDLE,
   userSingle: {},
   commentByPostId: [],
   userAll: [],
};
const blogSlice = createSlice({
   name: 'blogs',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchBlog.pending, (state, action) => {
            state.blogStatus = STATUS.LOADING;
         })
         .addCase(fetchBlog.fulfilled, (state, action) => {
            (state.blogStatus = STATUS.SUCCESS), (state.blogs = action.payload);
         })
         .addCase(fetchBlog.rejected, (state, action) => {
            state.blogStatus = STATUS.ERROR;
         })
         .addCase(fetchBlogBySearch.pending, (state, action) => {
            state.blogSearchStatus = STATUS.LOADING;
         })
         .addCase(fetchBlogBySearch.fulfilled, (state, action) => {
            (state.blogSearchStatus = STATUS.SUCCESS),
               (state.blogSearch = action.payload);
         })
         .addCase(fetchBlogBySearch.rejected, (state, action) => {
            state.blogSearchStatus = STATUS.ERROR;
         })
         .addCase(fetchBlogSingle.pending, (state, action) => {
            state.blogSingleStatus = STATUS.LOADING;
         })
         .addCase(fetchBlogSingle.fulfilled, (state, action) => {
            state.blogSingleStatus = STATUS.SUCCESS;
            state.blogSingle = action.payload;
         })
         .addCase(fetchBlogSingle.rejected, (state, action) => {
            state.blogSingleStatus = STATUS.ERROR;
         })
         .addCase(fetchUserSingle.fulfilled, (state, action) => {
            state.userSingle = action.payload;
         })
         .addCase(fetchComment.fulfilled, (state, action) => {
            state.commentByPostId = action.payload;
         })
         .addCase(fetchUserAll.fulfilled, (state, action) => {
            state.userAll = action.payload;
         });
   },
});

export const fetchBlog = createAsyncThunk('blog/fetch', async () => {
   const response = await fetch(`${API_URL}posts?limit=60`);
   const data = await response.json();
   return data.posts;
});

export const fetchBlogBySearch = createAsyncThunk('blog/search',async (keyword) => {
      const response = await fetch(`${API_URL}posts/search?q=${keyword}`);
      const data = await response.json();
      return data.posts;
   }
);
export const fetchBlogSingle = createAsyncThunk('blog/post', async (id) => {
   const response = await fetch(`${API_URL}posts/${id}`);
   const data = await response.json();
   return data;
});
export const fetchUserSingle = createAsyncThunk('blog/user', async (id) => {
   const response = await fetch(`${API_URL}users/${id}`);
   const data = await response.json();
   return data;
});
export const fetchComment = createAsyncThunk('blog/comment', async (id) => {
   const response = await fetch(`${API_URL}comments/post/${id}`);
   const data = await response.json();
   return data.comments;
});
export const fetchUserAll = createAsyncThunk('blog/userAll', async () => {
   const response = await fetch(`${API_URL}users?limit=0`);
   const data = await response.json();
   return data.users;
});

export default blogSlice.reducer;
