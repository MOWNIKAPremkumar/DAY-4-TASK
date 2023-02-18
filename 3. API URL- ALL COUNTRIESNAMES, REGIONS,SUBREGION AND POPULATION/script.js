var x=new XMLHttpRequest();
x.open('GET',"https://restcountries.com/v2/all");
x.send();
x.onload=function(){
     let data=JSON.parse(this.response);
     console.log(data);
     for (let i = 0; i < data.length; i++)
     {
     console.log(`counrty name:${data[i].name},
      region:${data[i].region},
      subregion:${data[i].subregion},
       population:${data[i].population}`);
     }
  
}
