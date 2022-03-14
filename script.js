function bin2dec() {
    let resultado = []
    let regex = /[a-z]/gi
    let campoBinario = document.getElementById('campo-binario')
    let mensagem = document.getElementById('validacao')
    document.getElementById('formulario').onsubmit = e => {
        e.preventDefault()
    }
    campoBinario.onkeydown = (e) => {
        if (e.key == "Enter") {
            resultado = []
            if (campoBinario.value.length > 8) {
                mensagem.innerText = 'Excedeu o limite de caracters'
            } else if (regex.test(campoBinario.value)) {
                mensagem.innerText = 'Apenas 0 e 1 são aceitos'
            } else {
                campoBinario.value
                    .split('')
                    .reverse()
                    .forEach((el, i) => {
                        if (el != 0)
                            resultado
                            .push(
                                Math.pow(2, i)
                            )
                    })
            }
            mensagem.innerText =`(${
                resultado.reduce((soma, n) => {
                    return soma + n
                })})10`
            
        }


    }
}
bin2dec()