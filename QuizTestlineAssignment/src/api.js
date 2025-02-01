// // Fetching data from a public API
// const apiUrl = "https://api.jsonserve.com/Uw5CrX";

// // Function to fetch data
// export async function fetchData() {
//   try {
//     const response = await fetch(apiUrl);

//     // Check if the response is OK (status code 200)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json(); // Parse JSON response
//     console.log("Fetched Data:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Call the function to fetch data
// fetchData();
