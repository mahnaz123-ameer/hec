import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastOption } from "@/constant/data";
import { adminPasswordChangeUrl } from "@/constant/apiUrls";
import { hideLoader, showLoader } from "@/store/loader/store";
import api from "@/server/api";

export const resetAdminPassword = createAsyncThunk(
  "auth/resetAdminPassword",
  async (data, thunkAPI) => {
    let url = `${adminPasswordChangeUrl}/${data.id}/`;    
    thunkAPI.dispatch(showLoader()); // Show loader
    try {
      const response = await api.patch(url, data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(hideLoader()); // Hide loader
    }
  }
);

const initialUsers = () => {
  const item = window.localStorage.getItem("users");
  return item ? JSON.parse(item) : [];
};
// save users in local storage

const initialIsAuth = () => {
  const item = window.localStorage.getItem("isAuth");
  return item ? JSON.parse(item) : false;
};


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    isAuth: initialIsAuth(),
    isAdmin:false,
  },
  reducers: {
    handleRegister: (state, action) => {
      const { name, email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.users.push({
          name,
          email,
          password,
        });
        window.localStorage.setItem("users", JSON.stringify(state.users));
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    handleLogin: (state, action) => {
      state.isAuth = true;
      // const _token = action.payload.token;
      let _token = action.payload.token;
      let username = action.payload.username;
      let userType = action.payload.userType;
      let userId = action.payload.userId;
      let userFirstName = action.payload.userFirstName;
      let userLastName = action.payload.userLastName;

      //console.log('action', action.payload);
      
      // save in local storage
      window.localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
      window.localStorage.setItem("_token", _token);
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("userType", userType);     
      window.localStorage.setItem("userId", userId);     
      window.localStorage.setItem("userFirstName", userFirstName);     
      window.localStorage.setItem("userLastName", userLastName);     
      // window.localStorage.setItem("users", JSON.stringify(user));
      // toast.success("Login Successful", toastOption);
    },
    handleUserType: (state, action) => {
      state.isAdmin = action.payload;
      window.localStorage.setItem("isAdmin", state.isAdmin);
    },
    handleLogout: (state, action) => {
      state.isAuth = action.payload;
      // remove isAuth from local storage
      window.localStorage.removeItem("isAuth");
      window.localStorage.removeItem("_token");
      window.localStorage.removeItem("users");
      window.localStorage.removeItem("userType");
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("userFirstName");
      window.localStorage.removeItem("userLastName");
      toast.success("User logged out successfully", {
        position: "top-right",
      });
    },
    handleNotStudentLogout: (state, action) => {
      state.isAuth = action.payload;
      // remove isAuth from local storage
      window.localStorage.removeItem("isAuth");
      window.localStorage.removeItem("_token");
      window.localStorage.removeItem("userType");
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("userId");
      // window.localStorage.removeItem("users");
      toast.error("Invalid Username or Password", {
        position: "top-right",
      });
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(resetAdminPassword.pending, (state) => {
      state.isLoading = true;
    }).addCase(resetAdminPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    }).addCase(resetAdminPassword.rejected, (state, action) => {
      state.isLoading = false;
    })
    }
});

export const { handleRegister, handleNotStudentLogout, handleLogin, handleLogout, handleUserType } = authSlice.actions;
export default authSlice.reducer;
