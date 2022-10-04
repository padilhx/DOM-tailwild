//              getElementById (element)

//const element = document.getElementById('one')
//console.log(element)

//              getElementByClassName (HTMLcollection)

//const element = document.getElementsByClassName('one');
//console.log(element)

//             getElementByTagName (HTMLCollection)

//const element = document.getElementsByTagName('meta');
//console.log(element);

//              querySelector() (element)

//const element = document.querySelector('.one');
//console.log(element);

//              querySelectorAll() (nodelist)

//const elements = document.querySelectorAll('meta');

//elements.forEach(el => console.log(el));

//################################################################
//                  textContent

//const element = document.querySelector('h1')

//element.textContent += ' Olá Vagabundo';

//console.log(element.textContent);

//                  innerText

//const element = document.querySelector('h1')

//element.innerText = "oi noia"

//                  innerHTML

//const element = document.querySelector('h1')

//element.innerHTML = "Olá Vagabundo! <strong>super noias</strong>"

//                  value

//const element = document.querySelector('input')

//console.log(element.value);

//element.value = "mudou o valor"

//              Manipulando atributos
//const header = document.querySelector('header')
//header.setAttribute('id', 'header')

//const headerID = document.querySelector('#header')

//console.log(headerID.getAttribute('class'))

//header.removeAttribute('id')

//header.setAttribute('class', 'bg header')


//              Alterando estilos com style

//const element = document.querySelector('body')

//element.style.backgroundColor = 'orange'

//console.log(element.style.backgroundColor)

//                  classList

//const element = document.querySelector('body')

//element.classList.add('active', 'orange')
//console.log(element.classList);

//element.classList.remove('active')
//element.classList.toggle('active')
//          toggle serve como um interruptor, onde se existir a tag, ele tira, mas se ela não estiver ativa, ele a coloca

//              navegando pelos elementos
//              parentElement  parentNode

//const body = document.querySelector('body');

//console.log(body.parentNode);

//const element = document.querySelector('h1')

//console.log(element.parentElement)

//              pegando elementos filhos
//              childNodes e children

//const el = document.querySelector('body');
//console.log(el.children);

// firstChild e firstElementChild
//console.log(el.firstChild);

// lastChild e lastElementChild
//console.log(el.lastChild);


//               navegando peles elementos irmãos
//const el = document.querySelector('body script');

//          nextSibling e nextElementSibling
//console.log(el.nextElementSibling);

// previousSibling e previousElementSibling
//console.log(el.previousElementSibling);




//            criando e adicionando elementos na pagina

//         createElement

//const div = document.createElement('div');

//div.innerText = "pão com ovo"

//     append (para criar por ultimo) prepend (para criar por primeiro que as outras tags)

//const body = document.querySelector('body');

//body.prepend(div)

// insertBefore (para adicionar antes de algum elemento)

//const header = body.querySelector('header');
//body.insertBefore(div, header.nextSibling) //nextSibling pode ser usado para criar um insertAfter, já que não existe no JS


//            adicionando eventos via html
// Existe diversas funções, sempre pesquisar

//function print() {
//    console.log('print');
//}


//            Eventos para teclado
// existe diversas funções, sempre pesquisar

//const input = document.querySelector('input');

//input.onkeyup = function () {
//    console.log('cliclou')
//}


//          Adicionando eventos via JS
// adicionando eventos usando o addEventListener

//const h1 = document.querySelector('h1');

//h1.addEventListener('mouseover', print)


//        Outro metodo via JS
// Não recomendado, mas pode ser usado a função direta com o On

//const h1 = document.querySelector('h1');

//h1.onclick = print;

//function print() {
//console.log('print');
//}


//            argumento event
// Eventos Dom (Dom Events) são utilizados para notificar o código de novidades durante a navegação do usuário. Cada evento é representado por um objeto que é baseado na interface Event, e pode ter campos customizados adicionados e/ou funções usadas para obter informações adicionais sobre o que aconteceu. Eventos podem representar desde interações básicas do usuário (cliques, rolagem da página...) até notificações automáticas de novidades no DOM.

//const input = document.querySelector('input');

//input.onclick = function (event) {
//    console.log(event.currentTarget.value);
//}

