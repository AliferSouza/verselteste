
export default function Render(paginaASerRenderizada) {
    console.log(paginaASerRenderizada)
    window.document.querySelector("#app").innerHTML = paginaASerRenderizada()
}