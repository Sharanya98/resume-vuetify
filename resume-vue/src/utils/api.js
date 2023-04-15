export default async function api(data) {
  // eslint-disable-next-line no-console



  let response = await fetch("https://3i2haswu68.execute-api.ap-northeast-1.amazonaws.com/createJapaneseCV", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data.data),
    })
    let result = await response.json();

       // if error
       if (result.error) {
        console.log(result.error);
        // document.getElementById("loading").style.display = "none";
        // document.getElementById("submit_button").style.display = "block";
    } else {
      console.log("success",result)
        // response={fileName:string, cv:url string}
        // download file by button
        var a = document.createElement("a");
        a.href = result.cv;
        a.download = result.fileName;
        a.target = '_blank'
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        // document.getElementById("loading").style.display = "none";
        // document.getElementById("submit_button").style.display = "block";
    }
 
  console.log(data);
}




 