const checkToken = async(_url) => {
  if(!localStorage["tok"]){
   return window.location.href = "login.html"
  }
  try{
    let data = await doApiMethod(_url,"GET");
    if(!data._id){
      localStorage.removeItem("tok");
      window.location.href = "login.html"
    }
    console.log("you logged");
    return data;
  } 
  catch(err){
    console.log(err);
    return err;
  }

}