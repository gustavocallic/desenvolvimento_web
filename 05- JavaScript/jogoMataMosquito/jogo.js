var altura = 0;
var largura = 0;
var contador = 0;
function tamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura + ' ' + largura);
}
var clicou = false;
function criarMosca(){
    var mosca = document.createElement('img');
    mosca.className = 'mosca' +' '+ alteraLadoMosquito();
    mosca.src = './imagens/mosca.png'
    mosca.id = 'mosca'
    mosca.style.position = 'absolute'
    document.body.appendChild(mosca)
    var posicao = calculoPosicaoMosca();
    mosca.style.top = posicao.altura + 'px';
    mosca.style.left = posicao.largura + 'px';
    return mosca;
}
function moscaRandom() {
    var mosca = criarMosca();
    var i = setInterval(function () {
        if (mosca == undefined) {
            console.log('testando o clickRemove');
            
            mosca = criarMosca();
        }
        //mosca.className += alteraLadoMosquito();
        posicao = calculoPosicaoMosca();
        mosca.style.top = posicao.altura + 'px';
        mosca.style.left = posicao.largura + 'px';
        mosca.onclick = function () {
            this.remove();
            clicou = true;
        }
        console.log(mosca);
        
        if (clicou == false) {
            contador++;
            switch (contador) {
                case 1:
                    document.getElementById('v1').src = 'imagens/coracao_vazio.png';
                    break;
                case 2:
                    document.getElementById('v2').src = 'imagens/coracao_vazio.png';
                    break;
                case 3:
                    document.getElementById('v3').src = 'imagens/coracao_vazio.png';
                    clearInterval(i);
                    break;
            }
        }
    }, 2000)
}
function calculoPosicaoMosca() {

    var x = Math.round(Math.random() * (largura - 52));
    var y = Math.round(Math.random() * (altura - 52));
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    return {
        largura: x,
        altura: y
    };
}
function alteraLadoMosquito() {
    var x = Math.floor(Math.random() * 2)//floor arredonda pra baixo
    switch (x) {
        case 1:
            return ' espelhoMosca';
    }
}


tamanhoTela();//pra chamar a função quando a tela é aberta;

