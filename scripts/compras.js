
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
        return '../src/img/frango.webp'
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
            addCompraTela(carrinho, contador)
           
            })
        .catch(error =>{
            hideLoading();
            console.log(error);
            alert(`${error}...  Erro ao encontrar as compras`);
        })
}

function addCompraTela(compras, contador){
    const lista = document.getElementById('listaCompras');
    let i =0;
    let totalCompra =0;
    showLoading();
    compras.forEach(compras =>{
        i ++;
        const li = document.createElement('li');
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        li.className = compras.type;

        const imagem = document.createElement('img');
        imagem.src= idImg(compras.id);
        checkbox.name = compras.id;
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
        total.innerHTML = `Total: ${(parseFloat(compras.quantidade) * parseFloat(compras.preco.custo)).toFixed(2)}`;
        div.appendChild(total);
       
        li.appendChild(div);
        const divCheck = document.createElement('div');
        divCheck.appendChild(checkbox);
        divCheck.classList = 'check';
        li.appendChild(divCheck);
        totalCompra = totalCompra+ (compras.quantidade * compras.preco.custo) ;
        
        
        lista.appendChild(li);
        if ( i > contador){
            divTotal = document.createElement('div');
            divTotal.classList = "totalCompra";
            h4Total = document.createElement('h4');
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