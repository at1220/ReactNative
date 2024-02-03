import axios from 'axios';
// https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SERVER_NAME = 'datausa.io';
async function getPopulation({drilldowns, measures}) {
  const urlGetPopulation = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`;
  try {
    let result = [];
  let responseData = await axios.get(urlGetPopulation);
  responseData.data.data.forEach(function (item) {
    let myObject = {};
    myObject.nationId = item['ID Nation'];
    myObject.yearId = item['ID Year'];
    myObject.nation = item['Nation'];
    myObject.population = item['Population'];
    myObject.slugNation = item['Slug Nation'];
    myObject.year = item['Year'];
    result.push(myObject);
  });
  return result;
  } catch (error) {
    throw error
  }
 
}
export default {
  getPopulation,
};
