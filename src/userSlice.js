import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://192.168.1.37:5051/api";
export const otpsend = createAsyncThunk(
  "otpsend",
  async ({ email, type }, { rejectWithValue }) => {
    let url = `${baseUrl}/send-otp`;
    const config = {
      headers: {
        "Content-Type": "application/json", //bina config ke cookie nhi set honi dhyan rakhna
      },
    };
    try {
      const response = await axios.post(url, { email, type }, config); // replace with your API endpoint and data
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const signup = createAsyncThunk(
  "signup",
  async (
    {
      first_name,
      last_name,
      email,
      mobile,
      password,
      cnf_password,
      refferBy,
      resetToken,
      refferByName,
      otp,
    },
    { rejectWithValue }
  ) => {
    let url = `${baseUrl}/signup`;
    const config = {
      headers: {
        "Content-Type": "application/json", //bina config ke cookie nhi set honi dhyan rakhna
      },
    };

    try {
      const response = await axios.post(
        url,
        {
          first_name,
          last_name,
          email,
          mobile,
          password,
          cnf_password,
          refferBy,
          resetToken,
          refferByName,
          otp,
        },
        config
      ); // replace with your API endpoint and data
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, { rejectWithValue }) => {
    let url = `${baseUrl}/log-in`;
    const config = {
      headers: {
        "Content-Type": "application/json", //bina config ke cookie nhi set honi dhyan rakhna
      },
    };
    try {
      const response = await axios.post(
        url,
        {
          email,
          password,
        },
        config
      ); // replace with your API endpoint and data
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    error: null,
    userData: null,
    isUpdated: false,
    activeChats: [],
    chatId: null,
    myOneChatWithOther: null,
    myMobileNo: null,
    myChatData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(otpsend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpsend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userData = action.payload.user;
      })
      .addCase(otpsend.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.userData = null;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userData = action.payload.user;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.userData = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userData = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.userData = null;
      });
  },
});

export default userSlice.reducer;
