
//Requisições AJAX
/* var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.respondeText));
    }
}
*/

//Promises
/*
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/diego3g');
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                resolve(JSON.parse(xhr.respondeText));
            }else {
                reject('Erro na requisição');
            }


            }
        }
    });
}

minhaPromise()
    .then(function(responde){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
*/

//Utilizando Axios
/*
axios.get('https://api.github.com/users/diego3g')
    .then(function(responde){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

    */