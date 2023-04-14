export default async function api(data) {
  // eslint-disable-next-line no-console

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(
    "https://3i2haswu68.execute-api.ap-northeast-1.amazonaws.com/createJapaneseCV",
    requestOptions
  )
    .then((response) => {
      response.json();
    }).then((res)=> console.log("result",res))
    .catch((error) => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });

  console.log(data);
}
