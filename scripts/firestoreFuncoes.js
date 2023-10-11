
const firestoreCollection ={
    buscarCompraUsuario: () => {
      return callApi({
          method: "GET",
          url: "https://nodenoblegroves-api.onrender.com/compras.html"


          //url: "http://localhost:3001/compras.html"
      })
      
            
    },
    criandoCompra: produtos =>{
        return callApi({
            method: 'POST',
            url: "https://nodenoblegroves-api.onrender.com/compras.html",
            params: produtos
        })
        
        
        /*firebase.firestore()
                .collection('comprasProduto')
                .add(produtos);*/
    }
    ,

    buscarIdCompraUsuario: uid =>{
        return callApi({
          method: "GET",
          //url: `http://localhost:3001/compras.html/${uid}`
          url: `https://nodenoblegroves-api.onrender.com/${uid}`
        })
    },
    buscarCatalogo: produtos =>{
        return firebase.firestore()
            .collection('produtos')
            .orderBy('type', 'asc')
            .get()
            .then(snapshot =>{
                return prodTela = snapshot.docs.map(doc => doc.data())
            })
    
    },
    atualizar: produto =>{
      return callApi({
        method: "PATCH",
       // url: `http://localhost:3001/compras.html/${produto.uid}`,
       url: `https://nodenoblegroves-api.onrender.com/compras.html/${produto.uid}`,
       params: produto
      })
    },
    removerItem: produto =>{
        return callApi({
          method: "DELETE",
         // url: `http://localhost:3001/compras.html/${produto.uid}`
         url: `https://nodenoblegroves-api.onrender.com/compras.html/${produto.uid}`
        })
        
        /*firebase.firestore()
        .collection('comprasProduto')
        .doc(produto.uid)
        .delete()*/
    }

}

function callApi({method, url, params}) {
  return new Promise(async (resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url, true);     
      xhr.setRequestHeader('Authorization', await firebase.auth().currentUser.getIdToken())
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

     xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            const json = JSON.parse(this.responseText);
            if (this.status != 200) {
                reject(json);
            } else {
                resolve(json);
            }
        }
    };
    xhr.send(JSON.stringify(params));
  })
}

