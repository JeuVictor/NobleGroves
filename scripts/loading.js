function showLoading(){
    const div = document.createElement("div");
    div.classList.add("loading", "centralizar");
    const label = document.createElement("label");
    label.innerText = "CARREGANDO...";
    div.appendChild(label);
    document.body.appendChild(div);
    setTimeout(() => hideLoading(), 2000);
}
function hideLoading(){
    const loading = document.getElementsByClassName("loading");
    if (loading.length){
        loading[0].remove();
    }

}