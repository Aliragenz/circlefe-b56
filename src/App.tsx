import { useEffect, useState } from "react";
import { useAppDispatch } from "./auth/hooks/use-store";
import { AppRouter } from "./routes";
import { setUser, clearUser } from "./store/auth-slice";
import Cookies from "js-cookie";
import { apiV1 } from "./libs/api";
import { UserStoreDTO } from "./auth/types/dto";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true); // Add loading state

  async function checkAuthentication() {
    const token = Cookies.get("token");

    if (token) {
      try {
        // Make API call to validate the token
        const { data } = await apiV1.get<null, { data: UserStoreDTO }>("/auth/check", {
          headers: {
            Authorization: `Bearer ${Cookies.get(token)}`,
          },
        });

        // Dispatch user data to store
        dispatch(setUser(data));
      } catch (error) {
        dispatch(clearUser());
      }
    } else {
      // Retrieve user from localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        dispatch(setUser(JSON.parse(storedUser)));
      } else {
        dispatch(clearUser());
      }
    }

    setLoading(false); // Set loading to false after authentication check
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading until authentication is done
  }

  return <AppRouter />;
}

export default App;
