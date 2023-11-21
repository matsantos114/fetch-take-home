export const fetchAPI = async (name: string, email: string, navigate: Function) => {
  const API = "https://frontend-take-home-service.fetch.com/auth/login";
  try {
    const response = await fetch(API, {
      method: "POST", // Correct capitalization
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }), // Convert loginInfo to JSON string
    });
    console.log(response.status);
    if (response.ok) {
      console.log("Login successful!");
      return true; // Indicates a successful login
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
