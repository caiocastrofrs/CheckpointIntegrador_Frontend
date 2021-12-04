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
        <Card style={{ width: '25rem', margin: '1rem', padding:'0.7rem' }}>
            <Card.Img variant="top" src={produto.imagem} />
            <Card.Body>
                <Card.Title style={{ fontSize: '25px'}}>{(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Card.Title>
                <spam className="desconto-produto">20% off</spam>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{fontSize: '14px'}}>
                <ListGroupItem style={{ fontSize: '16px'}}>{parcela}x {calcParcela()} sem juros</ListGroupItem>
                <ListGroupItem style={{ fontSize: '14px'}}>Frete grátis</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default CardProduto;