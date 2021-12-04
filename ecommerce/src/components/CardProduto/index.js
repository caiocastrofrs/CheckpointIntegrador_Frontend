import './style.scss';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import React from 'react'

const CardProduto = ({ produto }) => {

    const parcela = 12;
    function calcParcela() {
        return (produto.preco / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <Card style={{
            width: '25rem',
            height: '35rem',
            margin: '1rem',
            padding: '0.7rem',
            backgroundColor: 'rgb(236, 227, 220)',
        }}
            className="card-produto">
            <div className="imagem-box-card">
                <Card.Img style={{
                    maxWidth: '210px',
                    maxHeight: '210px',
                    width: 'auto',
                    height: 'auto',
                }} variant="top" src={produto.imagem} />
            </div>
            <Card.Body style={{ height: '20%', }}>
                <Card.Title style={{ fontSize: '25px' }}>{(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Card.Title>
                <spam className="desconto-produto">20% off</spam>
                {/* <ListGroup className="list-group-flush" style={{ fontSize: '14px' }}> */}
                <Card.Text style={{ fontSize: '16px' }}>{parcela}x {calcParcela()} sem juros</Card.Text>
                <Card.Text style={{ fontSize: '14px' }}>Frete grátis</Card.Text>
                {/* </ListGroup> */}
            </Card.Body>
        </Card>
    )
}

export default CardProduto;