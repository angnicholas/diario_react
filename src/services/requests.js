import api from "./auth.interceptor";

export async function getProtected(setContent, setLoading){
  await api
    .get("/protected/")
    .then((res) => {
      setContent(res.data);
      setLoading(false);
    })
    .catch((err) => console.log(err));
}

export async function getFromApi(url, setContent, setLoading, resDataToContent){
  await api
    .get(url)
    .then((res) => {
      const content = resDataToContent(res.data);
      setContent(content);
      console.log('apidata', res.data);      
      console.log('content', content);

      
      setLoading(false);
    })
    .catch((err) => console.log(err));
}