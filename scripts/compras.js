
function idImg(id){
    if(id == 1){
        return 'src/img/cafe.jpg';
    }
    if(id == 2){
        return 'src/img/vinho_domaine.jpeg'
    }
    if(id == 3){
        return 'src/img/vinho_garibalde.jpg';
    }
    if(id == 4){
        return 'src/img/picanha.jpg'
    }if(id == 5){
        return 'src/img/carne_moida.jpeg';
    }
    if(id == 6){
        return 'src/img/frango.webp'
    }
    if(id == 7){
        return 'src/img/arroz.jpeg';
    }
    if(id == 8){
        return 'src/img/feijao.jpg'
    }if(id == 9){
        return 'src/img/rabanete.jpeg';
    }
    if(id == 10){
        return 'src/img/alface.jpeg'
    }
    if(id == 11){
        return 'src/img/espinafre.jpg';
    }
    if(id == 12){
        return 'src/img/repolho.jpg'
    }
}   

firebase.auth().onAuthStateChanged(user =>{
    if (user){
        findCompra(user);
    }
});

function findCompra(user){
    showLoading();
    firestoreCollection.buscarCompraUsuario(user)
        .then(carrinho =>{
            const contador = carrinho.length - 1;
            addCompraTela(carrinho, contador, user)
           
            })
        .catch(error =>{
            hideLoading();
            console.log(error);
            alert(`${error}...  Erro ao encontrar as compras`);
        })
}

let totalCompra = 0;
function addCompraTela(comprasProdutos, contador, user){
    const lista = document.getElementById('listaCompras');
    let indice = 0;
    showLoading();
    comprasProdutos.forEach(compras =>{

        const pId = document.createElement('p')
        let variavel;

        console.log(variavel)    
        indice++;
        const li = document.createElement('li');
        const div = document.createElement('div');
        li.id = compras.uid;
        
        li.className = compras.type;

        const imagem = document.createElement('img');
        imagem.src= idImg(compras.id);
        li.appendChild(imagem);

        const nome = document.createElement('h4');
        nome.innerHTML = compras.nome;
        div.appendChild(nome);
        
        const preco = document.createElement('p');
        preco.innerHTML = ` ${compras.preco.moeda} ${compras.preco.custo}` ;
        div.appendChild(preco);

        const txtQtd =document.createElement('p');
        txtQtd.innerHTML = `Qtd: ${compras.medida} ${parseFloat(compras.quantidade)}`;
        div.appendChild(txtQtd);

        
        const total = document.createElement('h4');
        let valorTotal = (parseFloat(compras.quantidade) * parseFloat(compras.preco.custo)).toFixed(2)
        total.innerHTML = `Total: ${valorTotal}`;
        div.appendChild(total);
       
        li.appendChild(div);
        const divCheck = document.createElement('div');
        const btnEdit = document.createElement('button');
        btnEdit.innerHTML = "Editar";
        btnEdit.classList = "edit";
        btnEdit.addEventListener('click', () =>{
            event.stopPropagation();
            editarProduto(compras);
        })
        divCheck.appendChild(btnEdit);

        const btnDel = document.createElement('button');
        btnDel.innerHTML = "Excluir";
        btnDel.classList = "delete";
        btnDel.addEventListener('click', () =>{
            event.stopPropagation();
            deletarProduto(compras, valorTotal);
        })
        divCheck.appendChild(btnDel);

        const comprando = document.createElement('div');
        comprando.className = "comprando";
        comprando.id = compras.nome;

        const label = document.createElement('p');
        label.innerHTML = " Qtd: "
        
        const medida = document.createElement("label");
        medida.innerHTML = ` ${compras.medida} `;

        const input = document.createElement('input');
        input.type = 'number';
        input.className ='quantidadeProd';
        input.id = `input${compras.id}`;

        const confQtd = document.createElement('button');
        confQtd.innerHTML = "Ok";
        confQtd.id = compras.idBtnOk;
        confQtd.className = "confirmar";
        confQtd.addEventListener('click',() =>{
            event.stopPropagation(),
            confEditProduto(compras)
        })

        medida.appendChild(input);

        const divQtd = document.createElement('div');
        divQtd.className = "divQtd"
        divQtd.appendChild(label)
        divQtd.appendChild(medida)
        comprando.appendChild(divQtd)
        comprando.appendChild(confQtd);

    

        divCheck.classList = 'check';
        li.appendChild(divCheck);
        li.appendChild(comprando);
        li.appendChild(pId);
        totalCompra = totalCompra + (compras.quantidade * compras.preco.custo) ;
        
        
        lista.appendChild(li);
        if ( indice > contador){
            divTotal = document.createElement('div');
            divTotal.classList = "totalCompra";
            h4Total = document.createElement('h4');
            h4Total.id = 'totalH4'
            h4Total.innerHTML = `Total: R$ ${(totalCompra).toFixed(2)}`;
            divTotal.appendChild(h4Total);
            lista.appendChild(divTotal);
        }
        
    })
    hideLoading();
}
function FormatDinheiro(preco){
    return `${preco.moeda}: ${preco.custo.toFixed(2)}`
}

function deletarProduto(produto, valor) {
    const confirmBtn = confirm("Deseja deletar o produto?");
    if(confirmBtn){
        deletando(produto, valor);
    }
}

function prodEditando(p){
    const qtd = document.getElementById(`input${p.id}`).value
    return{
        id : p.id,
        medida : p.medida,
        nome : p.nome,
        type : p.type ,
        preco: {
            custo : p.preco.custo,
            moeda : p.preco.moeda
        },
        quantidade: parseFloat(qtd),
        user: p.user,
        uid: p.uid
        
    }

}

function deletando(produto, valor){
showLoading();

    firestoreCollection.removerItem(produto)
        .then(() => {
            hideLoading();
            document.getElementById(produto.uid).remove();
            totalCompra = (totalCompra - valor).toFixed(2)
           totalCompraH4 =  document.getElementById("totalH4");
           totalCompraH4.innerHTML = `Total: R$ ${(totalCompra)}`;
        }).catch(error =>{
            console.log(error)
            alert('Error ao remover a transação');
        })
    
}


function returnarUid() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('uid');
}

function atualizando(produto){
    showLoading();
    /*
    firebase.firestore()
        .collection("comprasProduto")
        .doc(produto.uid)
        .update(produto)*/
    firestoreCollection.atualizar(produto)
        .then(()=>{
            hideLoading();
            window.location.reload();

        }).catch(error =>{
            console.log(error)
        })

}

function editarProduto(produto){
    let btn = document.getElementById(produto.nome)
    btn.classList.add("active");
 }
 function confEditProduto(produto){
     let btn = document.getElementById(produto.nome)
     const compra = prodEditando(produto)
     atualizando(compra);
     btn.classList.remove("active");
 }