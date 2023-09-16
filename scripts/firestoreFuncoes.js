const firestoreCollection ={
    buscarCompraUsuario: user =>{
        return firebase.firestore()
            .collection('comprasProduto')
            .where('user.uid', '==', user.uid)
            .get()
            
            .then(snapshot => {
                hideLoading();
                return snapshot.docs.map(doc =>
                     doc.data())
            })
    },
    buscarCatalogo: produtos =>{
        return firebase.firestore()
            .collection('produtos')
            .orderBy('type', 'asc')
            .get()
            .then(snapshot =>{
                hideLoading();
                return prodTela = snapshot.docs.map(doc => doc.data())
            })
    
    }

}

