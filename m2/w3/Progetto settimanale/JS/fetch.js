document.getElementById('button2').addEventListener('click', loadJSON);

document.getElementById('button1').addEventListener('click', loadTxt);

//Load readme.txt
function loadTxt(){
  fetch('Readme.txt')
  .then(function(response){
    return response.text();
  })
  .then(function(data){
    document.getElementById('result').innerHTML = data;
  })
  .catch(function(error){
    console.log(error);
  })


}
//Load JSON file
function loadJSON(){
  fetch('users.json')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
      let html = '';
      data.forEach(function(users){
        html += `
              <li> ${users.firstName} ${users.lastName} <br> ${users.email} </li>
        `;
              
          
      });

      document.getElementById('result').innerHTML = html;

  })


}