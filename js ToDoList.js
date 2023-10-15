document.addEventListener('DOMContentLoaded', function() {
    /* 
    Cuando tengo una clase en HTML, en js tengo que declararla con querySelector
    y si tengo un Id lo puedo hacer directamente con getElementById
    */

    /* en querySelector no van puntos cuando "declaro" el elemento de HTMl */

    const input = document.querySelector("input"); 
    const addBtn = document.querySelector(".btn-add"); 
    const ul = document.querySelector("ul"); 
    const empty = document.querySelector(".empty");

    addBtn.addEventListener("click",(e) => {

        /*  
        basicamente lo que hace el codigo es, crear un evento de click al boton, una vez que se crea el evento ponemos una propiedad en el cual lo que hace es no permitir que se recargue la pagina, 
        creamos una constante de text. 
        Despues creamos una condicion de que si el text es distinto al espacio vacio, se van a crear dos constantes nuevas, li y p y p se convertira en text, Despues a li le vamos  a crear un hijo de p, y otro con la funcion de addDeleteBtn(),
        despues al input le vamos a asignar vacio "" y por ultimo cambiamos el estilo del display a none  
        */
        e.preventDefault(); /* lo que hace esto es no recargar la pagina */

        const text = input.value;

        if (text !== "") {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.textContent = text;
            
            li.appendChild(p);
            li.appendChild(addDeleteBtn());
            ul.appendChild(li);

            input.value = "";

            empty.style.display = "none"; /* esta linea cambia de estilo de visualizacion el elemento empty del HTML */
        } 
    });

    function addDeleteBtn() {
        const deleteBtn = document.createElement('button');
        /*
        se encarga de crear un botón de eliminación con el texto "X" y una clase "btn-delete", y luego asigna un evento de clic a ese botón. Cuando se hace clic en el botón, se elimina el elemento de lista correspondiente y se verifica
        si no quedan más elementos en la lista para mostrar un mensaje de "lista vacía" si es necesario. 
        */
        deleteBtn.textContent = 'X';
        deleteBtn.className = "btn-delete" /* className quita el nombre de la clase anterior y pone el nuevo */
        
        deleteBtn.addEventListener("click", (e) =>{
            const item = e.target.parentElement; /* target se refiere al button y parentElement sirve para acceder al elemento padre de la variable */
            ul.removeChild(item);

            const items = document.querySelectorAll('li');

            if (items.length === 0 ) {
                empty.style.display = 'block';
            }
        });
        /* el localStorage sirve para guardar datos en el navegador web  */
        return deleteBtn;

    }

});