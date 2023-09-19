
function idImg(id){
    if(id == 1){
        return '../src/img/cafe.jpg';
    }
    if(id == 2){
        return '../src/img/vinho_domaine.jpeg'
    }
    if(id == 3){
        return '../src/img/vinho_garibalde.jpg';
    }
    if(id == 4){
        return '../src/img/picanha.jpg'
    }if(id == 5){
        return '../src/img/carne_moida.jpeg';
    }
    if(id == 6){
        return '../src/img/frango.jpg'
    }
    if(id == 7){
        return '../src/img/arroz.jpeg';
    }
    if(id == 8){
        return '../src/img/feijao.jpg'
    }if(id == 9){
        return '../src/img/rabanete.jpeg';
    }
    if(id == 10){
        return '../src/img/alface.jpeg'
    }
    if(id == 11){
        return '../src/img/espinafre.jpg';
    }
    if(id == 12){
        return '../src/img/repolho.jpg'
    }
}

let carrinho;
const catalogo = [
    {
        id: "1",
        idBtn:"20",
        idBtnOk:"300",
        type: "oferta centralizar bebida",
        nome: 'Café',
        botao: ()=> document.getElementById('20'),
        comprandoProd: ()=> document.getElementById("Café"),
        confirmar: ()=> document.getElementById("300"),
        input: ()=> document.getElementById("120300"),
        preco:{
            moeda: "R$",
            custo: 58.99
        },
        medida: "Kg",
        promo: true
    },
    { 
        id: "2",
        idBtn:"30",
        idBtnOk:"400",
        type: "oferta centralizar bebida",
        nome: "Vinho Domanine",
        botao: ()=> document.getElementById("30"),
        comprandoProd: ()=> document.getElementById("Vinho Domanine"),
        confirmar: ()=> document.getElementById("400"),
        input: ()=> document.getElementById("230400"),
        preco:{
            moeda: "R$",
            custo: 72.99
        },
        medida: "Lt",
        promo: false
    },
    {
        id: "3",
        idBtn:"40",
        idBtnOk:"500",
        type: "oferta centralizar bebida",
        nome: "Vinho Garibalde",
        botao: ()=> document.getElementById("40"),
        comprandoProd: ()=> document.getElementById("Vinho Garibalde"),
        confirmar: ()=> document.getElementById("500"),
        input: ()=> document.getElementById("340500"),
        preco:{
            moeda: "R$",
            custo: 182.99
        },
        medida: "Lt",
        promo: false
        
    },
    {
        id: "4",
        idBtn:"50",
        idBtnOk:"600",
        nome: 'Picanha',
        type: "oferta centralizar carne",
        botao: ()=> document.getElementById('50'),
        comprandoProd: ()=> document.getElementById("Picanha"),
        confirmar: ()=> document.getElementById("600"),
        input: ()=> document.getElementById("450600"),
        preco:{
            moeda: "R$",
            custo: 98.99
        },
        medida: "Kg",
        promo: true
    },
    {
        id: "5",
        idBtn:"60",
        idBtnOk:"700",
        type: "oferta centralizar carne",
        nome: "Carne Moida",
        botao: ()=> document.getElementById('60'),
        comprandoProd: ()=> document.getElementById("Carne Moida"),
        confirmar: ()=> document.getElementById("700"),
        input: ()=> document.getElementById("560700"),
        preco:{
            moeda: "R$",
            custo: 38.99
        },
        medida: "Kg",
        promo: false
    },
    {
        id: "6",
        idBtn:"70",
        idBtnOk:"800",
        type: "oferta centralizar carne",
        nome: 'Frango',
        botao: ()=> document.getElementById('70'),
        comprandoProd: ()=> document.getElementById('Frango'),
        confirmar: ()=> document.getElementById("800"),
        input: ()=> document.getElementById("670800"),
        preco:{
            moeda: "R$",
            custo: 55.99
        },
        medida: "Kg",
        promo: false
    },
    { 
        id: "7",
        idBtn:"80",
        idBtnOk:"900",
        type: "oferta centralizar grao",
        nome: "Arroz Organico",
        botao: ()=> document.getElementById('80'),
        comprandoProd: ()=> document.getElementById("Arroz Organico"),
        confirmar: ()=> document.getElementById("900"),
        input: ()=> document.getElementById("780900"),
        preco:{
            moeda: "R$",
            custo: 32.99
        },
        medida: "Kg",
        promo: true
    },
    {
        id: "8",
        idBtn:"90",
        idBtnOk:"1000",
        type: "oferta centralizar grao",
        nome: "Feijão Organico",
        botao: ()=> document.getElementById('90'),
        comprandoProd: ()=> document.getElementById("Feijão Organico"),
        confirmar: ()=> document.getElementById("1000"),
        input: ()=> document.getElementById("8901000"),
        preco:{
            moeda: "R$",
            custo: 34.99
        },
        medida: "Lt",
        promo: false
        
    },
    {
        id: "9",
        idBtn:"100",
        idBtnOk:"1100",
        nome: 'Rabanete Organico',
        type: "oferta centralizar legumes",
        botao: ()=> document.getElementById('100'),
        comprandoProd: ()=> document.getElementById("Rabanete Organico"),
        confirmar: ()=> document.getElementById("1100"),
        input: ()=> document.getElementById("91001100"),
        preco:{
            moeda: "R$",
            custo: 28.99
        },
        medida: "Kg",
        promo: false
    },
    { 
        id: "10",
        idBtn:"110",
        idBtnOk:"1200",
        type: "oferta centralizar legumes",
        nome: "Alface Organico",
        botao: ()=> document.getElementById('110'),
        comprandoProd: ()=> document.getElementById("Alface Organico"),
        confirmar: ()=> document.getElementById("1200"),
        input: ()=> document.getElementById("101101200"),
        preco:{
            moeda: "R$",
            custo: 18.99
        },
        medida: "Kg",
        promo: false
    },
    {
        id: "11",
        idBtn:"120",
        idBtnOk:"1300",
        type: "oferta centralizar legumes",
        nome: "Espinafre Organico",
        botao: ()=> document.getElementById('120'),
        comprandoProd: ()=> document.getElementById("Espinafre Organico"),
        confirmar: ()=> document.getElementById("1300"),
        input: ()=> document.getElementById("111201300"),
        preco:{
            moeda: "R$",
            custo: 8.99
        },
        medida: "Kg",
        promo: false
    },
    {
        id: "12",
        idBtn:"130",
        idBtnOk:"1400",
        type: "oferta centralizar legumes",
        nome: "Repolho Organico",
        botao: ()=> document.getElementById('130'),
        comprandoProd: ()=> document.getElementById("Repolho Organico"),
        confirmar: ()=> document.getElementById("1400"),
        input: ()=> document.getElementById("121301400"),
        preco:{
            moeda: "R$",
            custo: 12.99
        },
        medida: "Kg",
        promo: false
    },
    {
        
        id: "13",
        idBtn:"140",
        idBtnOk:"1500",
        type: "none",
        nome: "teste",
        botao: ()=> document.getElementById('140'),
        comprandoProd: ()=> document.getElementById("teste"),
        confirmar: ()=> document.getElementById("1500"),
        input: ()=> document.getElementById("131401500"),
        preco:{
            moeda: "",
            custo: 0
        },
        medida: "",
        promo: false
    }
]

const produtos = document.getElementById('produtos');
const promoCatalogo = document.getElementById('promoCatalogo');

function addCatalogoTela(prod, produtos, promoProduto){ 
    
    prod.forEach(produto => {
        const oferta = document.createElement('div')
        oferta.className = produto.type;

        const produtoImg = document.createElement('div')
        produtoImg.className = 'produtoImg centralizar';
        

        const img = document.createElement('img');
        img.alt = produto.nome;
        img.src = idImg(produto.id);
        produtoImg.appendChild(img);
        oferta.appendChild(produtoImg);

        const descricao = document.createElement('div');
        descricao.className = 'descricao centralizar';

        const h3 = document.createElement('h3');
        h3.innerHTML = produto.nome;
        descricao.appendChild(h3);

        const h4 = document.createElement('h4');
        h4.innerHTML = ` ${produto.preco.moeda} ${produto.preco.custo}`;
        descricao.appendChild(h4);

        const btn = document.createElement('button');
        btn.className = "compras";
        btn.id = produto.idBtn;
        btn.innerHTML = 'Comprar';
        btn.onclick = clickCompra();
        descricao.appendChild(btn);

        const comprando = document.createElement('div');
        comprando.className = "comprando";
        comprando.id = produto.nome;

        const label = document.createElement('p');
        label.innerHTML = "Qtd:"
        
        const medida = document.createElement("label");
        medida.innerHTML = produto.medida;

        const input = document.createElement('input');
        input.type = 'number';
        input.className ='quantidadeProd';
        input.id = `${produto.id}${produto.idBtn}${produto.idBtnOk}`;

        const confQtd = document.createElement('button');
        confQtd.innerHTML = "Ok";
        confQtd.id = produto.idBtnOk;
        confQtd.className = "confirmar";
        confQtd.onclick = 'clickCompra()';

        comprando.appendChild(label);
        medida.appendChild(input);
        comprando.appendChild(medida);
        
        comprando.appendChild(confQtd);

        oferta.appendChild(descricao);
        oferta.appendChild(comprando);

        if (produto.promo == false){
            produtos.appendChild(oferta);
        } 
        else{
            promoProduto.appendChild(oferta);
        } 
        carrinho = 1; 
    });
}
getCatalogo();
function getCatalogo(){
    showLoading();
    firestoreCollection.buscarCatalogo()
        .then(prodTela =>{
            addCatalogoTela(prodTela, produtos, promoCatalogo)
        })
        .catch(error =>{
            hideLoading();
            alert(`${error}... Erro na pagina`);
        })
}

function clickCompra(){
    catalogo.forEach(produto =>{
        const botao = produto.botao();
        const comprandoProd = produto.comprandoProd();  
        const ok = produto.confirmar();
        
            
            if (botao){
                botao.addEventListener("click", ()=>{
                    console.log("clicou no botao");
                    botao.classList.add('active');
                    comprandoProd.classList.add('active');
                    if (ok){
                        ok.addEventListener("click", ()=>{
                            console.log("ok");
                            if (carrinho == 1) {
                                carrinho = produto;
                                carrinhoCliente(produto)
                                carrinho++
                            }
                            botao.classList.remove('active');
                            comprandoProd.classList.remove('active');                            
                            location.href = "index.html#catalogo"
                        })
                    }
                });
            }    
        
    })
    
}

function carrinhoCliente(p){
            const pro = {
                id : p.id,
                medida : p.medida,
                nome : p.nome,
                type : p.type ,
                preco: {
                    custo : p.preco.custo,
                    moeda : p.preco.moeda
                },
                quantidade: parseFloat(p.input().value),
                user: {
                    uid: firebase.auth().currentUser.uid
                }
                
            }
            console.log(pro.quantidade)
            if (pro.quantidade){
                firebase.firestore()
                    .collection('comprasProduto')
                    .add(pro)
                    .then( ()=>{
                        showLoading();
                        alert("Enviando ao carrinho");
                        hideLoading();
                    })
                    .catch(()=>{
                        alert("Erro ao criar catalogo na firestore")
                    })
                } 
            else{
                location.reload()
            }           
}

