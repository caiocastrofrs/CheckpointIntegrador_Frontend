import './style.scss';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react'

const CardProduto = ({ produto }) => {

    const parcela = 12;
    function calcParcela() {
        return (produto.preco / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <Card as={Link} to={`/produtos/${produto.id}`} style={{
            width: '250px',
            height: '350px',
            margin: '1rem',
            padding: '0.7rem',
            textDecoration: 'none',
            color: '#000'
        }}
        className="card-produto"
        >
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
                <Card.Text style={{ fontSize: '16px' }}>{parcela}x {calcParcela()} sem juros</Card.Text>
                <Card.Text style={{ fontSize: '14px' }}>Frete grátis</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardProduto;