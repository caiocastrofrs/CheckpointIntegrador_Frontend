import './style.scss';
import { Helmet } from 'react-helmet'
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar'
import { Row, Col, PageItem } from 'react-bootstrap';
import CardProduto from '../../components/CardProduto';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/index'

const Produtos = () => {

    const produtos = [
        {
            "id": 26,
            "titulo": "SSD Crucial BX500, 480GB, SATA, Leitura 540MB/s",
            "preco": 350.0,
            "descricao": "SSD Crucial BX500 480GB Sata Melhore o desempenho Inicialização super-rápida . Carregamento de arquivos a jato. Melhore a responsividade geral do sistema para todas as suas necessidades de computação.",
            "imagem": "https://images.kabum.com.br/produtos/fotos/98545/ssd-crucial-bx500-480gb-sata-leitura-540mb-s-gravacao-500mb-s-ct480bx500ssd1_1629125425_gg.jpg",
            "categoria": {
                "id": 6,
                "nomeCategoria": "INFORMATICA"
            }
        },
        {
            "id": 27,
            "titulo": "MacBook Air Apple 13 M1 (16GB 1TB Mac OS X)",
            "preco": 14499.99,
            "descricao": "O MacBook Air oferece todos os recursos necessários para garantir uma excelente experiência do usuário. Com design refinado, possui tela de 13 polegadas com maior resolução.",
            "imagem": "https://images.kabum.com.br/produtos/fotos/153439/macbook-air-apple-13-3-processador-m1-16gb-ssd-1tb-space-grey-mgqn3bz-a_1616420548_gg.jpg",
            "categoria": {
                "id": 6,
                "nomeCategoria": "INFORMATICA"
            }
        },
        {
            "id": 28,
            "titulo": "PC Gamer PCMIX Intel Pentium Gold G5400",
            "preco": 2799.9,
            "descricao": "PC Gamer PCMIX Intel Pentium Gold G5400, 8GB DDR4, SSD 240GB, Fonte 500W 80 Plus, MB Asus H310M-E PRIME, Linux - CPU L3500.",
            "imagem": "https://images.kabum.com.br/produtos/fotos/158043/computador-gamer-pcmix-intel-pentium-gold-8gb-ddr4-ssd-240gb-linux-cpu-l3500_1622579839_gg.jpg",
            "categoria": {
                "id": 6,
                "nomeCategoria": "INFORMATICA"
            }
        },
        {
            "id": 29,
            "titulo": "Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz",
            "preco": 259.0,
            "descricao": "Módulo de memória SPECTRIX D45G DDR4 RGB O SPECTRIX D45G parece e é robusto com um exterior sólido de alumínio semelhante a uma armadura com cumes robustos. Defina a iluminação RGB da maneira que você desejar.",
            "imagem": "https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_gg.jpg",
            "categoria": {
                "id": 6,
                "nomeCategoria": "INFORMATICA"
            }
        },
        {
            "id": 30,
            "titulo": "HD WD Blue, 2TB, 3.5´, SATA 6.0Gb/s",
            "preco": 304.9,
            "descricao": "O WD Blue WD20EZAZ é caracterizado pela sua eficiência e bom funcionamento, que juntamente com o seu baixo consumo de energia o tornam um disco indispensável para funções padrão.",
            "imagem": "https://images.kabum.com.br/produtos/fotos/115063/hd-western-digital-blue-2tb-3-5-sata-6-0gb-s-wd20ezaz-_1594748888_gg.jpg",
            "categoria": {
                "id": 6,
                "nomeCategoria": "INFORMATICA"
            }
        }
    ]

    return (
        <>
            <Helmet>
                <title>Bodega | Produtos</title>
            </Helmet>
            <Header />
            <SearchBar />
            <main>
                <h2 style={{ width: '100%', textAlign: 'center'}}>Produtos</h2>
                <Container fluid={true} className="container-produtos">
                    <Row className="linha-produtos">
                        {
                        produtos && produtos.map(item => {
                            return (
                                <CardProduto key={item.id} produto={item} />
                            )}
                        )}
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );

}

export default Produtos;