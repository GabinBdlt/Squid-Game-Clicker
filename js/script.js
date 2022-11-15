let score = 0
let mate = 10
let cpc = 1
let triche = 426
let cps = 0
let vip = 4260
let tu = 107000
let vie = 426



function clickfunction(){
    score += cpc
    document.getElementById('score_total').innerHTML = Math.round(score)
    // console.log('cookie')
    // let score = document.getElementById('score')
    // score.innerHTML ++ ; 
}

function mateclick(){
    if(score >= mate) {
        cpc = cpc*2;
        score = score - mate;
        mate = mate*3.1
        score += cpc
        document.getElementById('score_total').innerHTML = Math.round(score)
        document.getElementById('cout').innerHTML = Math.round(mate) + ' WON'
    }
}

function tricheclick(){
   if (score >= triche) {
    score = score + cps;
    score = score - triche;
    triche = triche*4.2
    setInterval(clickfunction,1000)
    document.getElementById('tri').innerHTML = Math.round(triche) + ' WON'
   }
}

function vipclick(){
    if (score >= vip) {
     score = score + cps;
     score = score - vip;
     vip = vip*6.3
     setInterval(clickfunction,100)
     document.getElementById('vi').innerHTML = Math.round(vip) + ' WON'
    }
 }

function tueclick(){
    if (score >= tu) {
        vie = vie - 1;
        score = score - tu;
        document.getElementById('vie').innerHTML = vie
       }
}
function phrase (){
    if (score > 0) {
        document.getElementById('aleatoire').innerHTML = "Squid game"
    }
    if (score > 200) {
        document.getElementById('aleatoire').innerHTML = "Survivre"
    }
    if (score > 500) {
        document.getElementById('aleatoire').innerHTML = "Quoi"
    }
    if (score > 1000) {
        document.getElementById('aleatoire').innerHTML = "Feur"
    }
    if (score > 5000) {
        document.getElementById('aleatoire').innerHTML = "Le massacre"
    }
}

let phrases = ['oui', 'squid game']
var aleatoire = Math.floor(Math.random * phrases.length);
var final = phrases[aleatoire];
console.log(final);
document.getElementById('aleatoire').innerHTML = final;

// const NB_SANG = 10;
// for (let index = 0; index < NB_SANG; index++) {
//     const element = document.createElement('img');
//     element.src = 'images/sang.png'
//     element.className = 'sang'
//     x = Math.round(Math.random() * 100)
//     y = Math.round(Math.random() * 10)
//     element.style.left = x + 'vw';
//     element.style.top = y + 'vh';
//     document.querySelector('body').appendChild(element)
// }