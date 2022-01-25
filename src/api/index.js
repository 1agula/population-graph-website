import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

// 都道府県データを取得する
export const fetchPref = async () => {
  try {
    const {
      data: { result },
    } = await axios.get(`${url}/v1/prefectures`, {
      headers: { "X-API-KEY": key },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 指定された都道府県の人口構成データを取得する
export const fetchPop = async (prefCode) => {
  try {
    const {
      data: { result },
    } = await axios.get(
      `${url}/v1/population/composition/perYear?prefCode=${prefCode}`,
      {
        headers: { "X-API-KEY": key },
      }
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
