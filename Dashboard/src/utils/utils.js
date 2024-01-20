const API_URL = "http://localhost:3001/api/"
export const API_TABLE = `${API_URL}table`
export const API_PIECHART = `${API_URL}pie-chart`
export const API_GRAPH = `${API_URL}graph`


// const generateRandomColor = () => {
//   // Generate a random hex color code
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

// const shadesOfGreen = [
//   'rgba(0, 128, 0, 0.8)',
//   'rgba(0, 128, 0, 0.6)',
//   'rgba(0, 128, 0, 0.5)',
//   'rgba(0, 128, 0, 0.3)',
//   'rgba(0, 128, 0, 0.1)',
// ];

// const modifyPieData = (resData) => {
//   const newResponse = resData.map((item,index) => {
//     item.fill = shadesOfGreen[index % shadesOfGreen.length];
//     return item;
//   });
//   return newResponse
// };
//   const modifiedPieData = modifyPieData(pie);