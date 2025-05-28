const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i=0; i < botoes.length; i++){
    botoes [i].onclick = function(){
        for (let j=0; j < botoes.length; j++){
            botoes [j].classList.remove("ativo");
            textos [j].classList.remove("ativo");
        }
        botoes [i].classList.add ("ativo");
        textos [i].classList.add ("ativo");
    }
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivol = new Date ("2026-01-01T00:00:00");
const tempoObjetivo2 = new Date ("2027-03-06T00:00:00");
const tempoObjetivo3 = new date  ("2028-07-06T00:00:00");
const tempoObjetivo4 = new Date ("2030-09-01T00:00:00");
const tempos = [tempoObjetivol, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]
function atualizaCronometro (){
    for (let i =0; < contadores.length; i++){
        document.getElementById ("dias"+i).textContent = calculatempo(tempos {i}){0};
        document.getElementById ("horas"+i).textContent = calculatempo(tempos {i}){1};
        document.getElementById ("min"+i).textContent = calculatempo(tempos {i}){2};
        document.getElementById ("seg"+i).textContent = calculatempo(tempos {i}){3};  
    }
    for(let i = 0; i < contadores.length; i++){
        //contadores[i].textcontent = calculaTempo (tempos[i]);
    }
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
comecaCronometro();