import React, { Component } from "react";
import { MDBIcon  } from 'mdbreact';

class Lateral extends Component {

render() {
  return (
        <div className="menuLateral">
            <div className="conteudo">
                <h2>Navegação</h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="md-v-line"></div><img src="https://img.icons8.com/cute-clipart/26/000000/shopping-cart.png" className="ml-n1 mr-5" />Compras
                    </li>
                    <li class="list-group-item">
                        <div class="md-v-line"></div><img src="https://img.icons8.com/cute-clipart/25/000000/list.png" className="ml-n1 mr-5" />Listas
                    </li>
                    <li class="list-group-item">
                        <div class="md-v-line"></div><img src="https://img.icons8.com/cute-clipart/25/000000/shop.png" className="ml-n1 mr-5" />Mercados
                    </li>
                    <li class="list-group-item">
                        <div class="md-v-line"></div><img src="https://img.icons8.com/color/25/000000/grocery-bag.png" className="ml-n1 mr-5" />Itens
                    </li>
                </ul>
            {/* <ul>
                <li>Compras</li>
                <li>Listas</li>
                <li>Mercados</li>
                <li>Itens</li>
                </ul>*/}
            </div> 
        </div>
    );
  }
}

export default Lateral;
