

const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')


// CLick en títulos
 // quita la clase activo de TODOS los bloques para luego añadir la clase activo al bloque con la posicion del h2

h2.forEach((h2, i) => {
    h2[i].addEventListener('click', ()=> {
        bloque.forEach(( bloque, i) => {
            bloque[i].classList.remove('activo');
        })
        bloque[i].classList.add('activo')
    })    
})

console.log(document.querySelectorAll('.h2'));
