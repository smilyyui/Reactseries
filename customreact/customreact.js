const reactElement={
    type:'a',
    props:{
        href:'https://goggle.com',
        target:'_blank'
    },
    children:'click me to visit google'
} //react ke through essa milta h 
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerText = reactElement.children;

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

const maincontainer=document.querySelector('#root')
//iss reactElement ko render kar de root ke anadar
customRender(reactElement,maincontainer)