import axios from "axios";

async function findGroomingByCode(code: string) {
  await axios(`http://localhost:4000/appointment/${code}`).then((res) => {
    console.log(res.data);
  });
}
export default findGroomingByCode