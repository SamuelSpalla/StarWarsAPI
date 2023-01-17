const Startitle = document.querySelector('.title')
const Starid = document.querySelector('.id')
const StarOpen = document.querySelector('.open')
const StarDir = document.querySelector('.director')
const StarProd = document.querySelector('.prod')
const StarDate = document.querySelector('.date')
const ep4 = document.querySelector('.ep4')
const ep5 = document.querySelector('.ep5')
const ep6 = document.querySelector('.ep6')
const ep1 = document.querySelector('.ep1')
const ep2 = document.querySelector('.ep2')
const ep3 = document.querySelector('.ep3')




const fetchStar = async(filme) => {
    const APIresponse = await fetch(`https://swapi.dev/api/films/${filme}/`)
    if(APIresponse.status == 200){
        const data = await APIresponse.json()
        return data
    }
}


const mainStar = async(filme) =>{
    Starid.innerHTML = 'Carregando...'

    const data = await fetchStar(filme)
    

    if(data){
        Startitle.innerHTML = data.title
        Starid.innerHTML = data.episode_id
        StarOpen.innerHTML = data.opening_crawl
        StarDir.innerHTML = data.director
        StarProd.innerHTML = data.producer
        StarDate.innerHTML = data.release_date
    }

    




    else{
        StarOpen.innerHTML = 'Desculpe, algo inesperado aconteceu'
        
    }
}

ep4.addEventListener('click', ()=>{
    mainStar(1)
    Startitle.innerHTML = ' '
    StarOpen.innerHTML = ' '
    StarDir.innerHTML = ' '
    StarProd.innerHTML = ' '
    StarDate.innerHTML = ' '

})

ep5.addEventListener('click', ()=>{
    mainStar(2)
    Startitle.innerHTML = ' '
    StarOpen.innerHTML = ' '
    StarDir.innerHTML = ' '
    StarProd.innerHTML = ' '
    StarDate.innerHTML = ' '
})

ep6.addEventListener('click', ()=>{
    mainStar(3)
    Startitle.innerHTML = ' '
    StarOpen.innerHTML = ' '
    StarDir.innerHTML = ' '
    StarProd.innerHTML = ' '
    StarDate.innerHTML = ' '
})

ep1.addEventListener('click', ()=>{
    mainStar(4)
    Startitle.innerHTML = ' '
    StarOpen.innerHTML = ' '
    StarDir.innerHTML = ' '
    StarProd.innerHTML = ' '
    StarDate.innerHTML = ' '
})  

ep2.addEventListener('click', ()=>{
    mainStar(5)
    Startitle.innerHTML = ' '
    StarOpen.innerHTML = ' '
    StarDir.innerHTML = ' '
    StarProd.innerHTML = ' '
    StarDate.innerHTML = ' '
})

ep3.addEventListener('click', ()=>{
    mainStar(6)
    Startitle.innerHTML = ' '
    StarOpen.innerHTML = ' '
    StarDir.innerHTML = ' '
    StarProd.innerHTML = ' '
    StarDate.innerHTML = ' '
})








