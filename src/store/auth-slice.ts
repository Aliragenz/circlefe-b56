import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStoreDTO } from '@/auth/types/dto';


const initialState: UserStoreDTO = {} as UserStoreDTO ;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserStoreDTO>) {
      const userData = {
        id: action.payload.id,
        fullName: action.payload.fullName,
        userName: action.payload.userName,
        bio: action.payload.bio,
        email: action.payload.email,
        image: action.payload.image,
        bannerImg: action.payload.bannerImg,
        role: action.payload.role,
      };
      // Persist the user data to localStorage
      console.log("Saving user data to localStorage:", userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return {
        ...state,
        ...userData,
      };
    },
    clearUser() {
      // Clear user data from localStorage
      localStorage.removeItem("user");

      return {} as UserStoreDTO;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;

