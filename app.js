document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    const number= document.getElementById('number').value;
    document.getElementById('number').value = '';
    const xhr= new XMLHttpRequest();
 
    if(number === ''){
        document.querySelector('.jokes').innerHTML= `Enter a Vaild Number`;
    }
    else{
        xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

        xhr.onload= function(){
            let output='';
            if(this.status=== 200){    
                const response = JSON.parse(this.responseText);
                console.log(response);
                if (response.type === 'success'){
                    response.value.forEach(function(jk){           
                        output+=`<li>${jk.joke}</li>`;
                    });  
                } 
            }else{
                    output+=`<li>Something went wrong</li>`;
                }   
                document.querySelector('.jokes').innerHTML=output;  
        }
        xhr.send();
    }
    e.preventDefault();
}