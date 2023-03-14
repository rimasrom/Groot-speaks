const input = document.querySelector('#input')
const btnTranslated = document.querySelector('#btn-translate') 
const output = document.querySelector('#output')

const url = `https://api.funtranslations.com/translate/groot.json?text=${input}`


btnTranslated.addEventListener('click', function onclick(){
    fetch(url)
    .then(res=>res.json())
    .then(result=>
        output.innerText=result.contents.translated)
        .catch(err=>{
            alert('something went wrong ! Try again after some time...')
        })
})