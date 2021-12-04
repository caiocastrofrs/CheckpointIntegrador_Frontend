import './style.scss';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import React from 'react'

const CardProduto = ({ produto }) => {

    const parcela = 12;
    function calcParcela() {
        console.log(produto.preco / parcela);
        return (produto.preco / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <Card style={{ width: '18rem', margin: '1rem', padding:'0.7rem' }}>
            <Card.Img variant="top" src={produto.imagem} />
            <Card.Body>
                <Card.Title>{(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Card.Title>
                <spam className="desconto-produto">20% off</spam>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{fontSize: '14px'}}>
                <ListGroupItem>{parcela}x {calcParcela()} sem juros</ListGroupItem>
                <ListGroupItem>Frete grátis</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default CardProduto;