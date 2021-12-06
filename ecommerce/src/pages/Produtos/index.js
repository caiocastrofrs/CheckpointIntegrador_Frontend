import './style.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../service/api'
import Header from '../../components/Header';
// import Pesquisar from '../../components/Pesquisar';
import { BoxFilterCategoria } from '../../components/BoxFilterCategoria';
import { Row } from 'react-bootstrap';
import CardProduto from '../../components/CardProduto';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/index';
import { Paginacao } from '../../components/Paginacao';
import { useParams } from 'react-router';


const Produtos = () => {
  const { categoria } = useParams();

  // const produtos = [
  //   {
  //     "id": 1,
  //     "titulo": "Ventilador de mesa Mondial",
  //     "preco": 186.0,
  //     "descricao": "VTX-40-8P turbo preto com 8 pás cor prata, 40cm de diâmetro 127V",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_619657-MLA43249276651_082020-O.webp",
  //     "categoria": {
  //       "id": 1,
  //       "nomeCategoria": "ELETRODOMESTICOS"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "titulo": "Máquina de lavar automática Electrolux",
  //     "preco": 1524.0,
  //     "descricao": "Essencial Care LES11 branca 11kg 127V",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_798413-MLA43117842453_082020-O.webp",
  //     "categoria": {
  //       "id": 1,
  //       "nomeCategoria": "ELETRODOMESTICOS"
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "titulo": "Fogão de piso Brastemp",
  //     "preco": 1399.0,
  //     "descricao": "BFO4N gás engarrafado 4 queimadores inox 127V/220V porta com visor 61.5L",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_933744-MLA40243078530_122019-O.webp",
  //     "categoria": {
  //       "id": 1,
  //       "nomeCategoria": "ELETRODOMESTICOS"
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "titulo": "Geladeira Frost Free Brastremp",
  //     "preco": 3034.0,
  //     "descricao": "BRM44H Inox com freezer 375L 127V",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_746986-MLA40411785738_012020-O.webp",
  //     "categoria": {
  //       "id": 1,
  //       "nomeCategoria": "ELETRODOMESTICOS"
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "titulo": "Robô Aspirador passa pano",
  //     "preco": 2557.0,
  //     "descricao": "Xiaomi Mi Robot Vacuum-Mop P preto 100V/240V",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_644877-MLA46033029103_052021-O.webp",
  //     "categoria": {
  //       "id": 1,
  //       "nomeCategoria": "ELETRODOMESTICOS"
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "titulo": "iPhone 12 Apple (128GB) Preto",
  //     "preco": 5199.0,
  //     "descricao": "Sistema Operacional OS, 5G, Tela de 6,1 5G e Câmera Dupla de 12 MP.",
  //     "imagem": "https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMGJA3BRAPTO/AEMGJA3BRAPTO_PRD_1500_1.jpg",
  //     "categoria": {
  //       "id": 2,
  //       "nomeCategoria": "ELETRONICOS"
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "titulo": "Samsung Galaxy S21 Cinza",
  //     "preco": 3699.0,
  //     "descricao": "Samsung Galaxy S21 Cinza, com Tela Infinita de 6,2”, 5G, 128GB, Câmera Tripla de 12MP+64MP+12MP",
  //     "imagem": "https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_CL_Celular/SGSMG991ZACNZ/SGSMG991ZACNZ_PRD_1500_1.jpg",
  //     "categoria": {
  //       "id": 2,
  //       "nomeCategoria": "ELETRONICOS"
  //     }
  //   },
  //   {
  //     "id": 8,
  //     "titulo": "Smartphone Moto G100 ",
  //     "preco": 3499.0,
  //     "descricao": "Smartphone Moto G100 Luminous Ocean, com Tela 6,7 5G, 256GB e Câmera Quádrupla de 64 MP+16 MP+2 MP",
  //     "imagem": "https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_CL_Celular/MRXT21254OCE/MRXT21254OCE_PRD_1500_1.jpg",
  //     "categoria": {
  //       "id": 2,
  //       "nomeCategoria": "ELETRONICOS"
  //     }
  //   },
  //   {
  //     "id": 9,
  //     "titulo": "Smartphone ASUS Zenfone Max Pro",
  //     "preco": 1699.0,
  //     "descricao": "Smartphone ASUS Zenfone Max Pro (M2) Snapdragon SDM660 6GB 64GB 6,26 Titanium",
  //     "imagem": "https://images.kabum.com.br/produtos/fotos/158869/smartphone-asus-zenfone-max-pro-m2-64gb-6gb-ram-snapdragon-camera-12mp-black-saphire-zb631kl-4d094br_1627562523_gg.jpg",
  //     "categoria": {
  //       "id": 2,
  //       "nomeCategoria": "ELETRONICOS"
  //     }
  //   },
  //   {
  //     "id": 10,
  //     "titulo": "SMARTPHONE XIAOMI REDMI 9A",
  //     "preco": 1299.0,
  //     "descricao": "SMARTPHONE XIAOMI REDMI 9A TELA 6,53 2GB/32GB 4G",
  //     "imagem": "https://www.fastshop.com.br/wcsstore/FastShopCAS/Marketplace/o2%20planilha/6869198362/6869198362_PRD_1500_1.jpg",
  //     "categoria": {
  //       "id": 2,
  //       "nomeCategoria": "ELETRONICOS"
  //     }
  //   },
  //   {
  //     "id": 11,
  //     "titulo": "Carrinho estilo guarda chuva",
  //     "preco": 336.0,
  //     "descricao": "Carrinho estilo guarda chuva Multikids Baby Pocket cinza com chassi de cor prateado",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_804047-MLA46076253588_052021-W.webp",
  //     "categoria": {
  //       "id": 3,
  //       "nomeCategoria": "BEBE"
  //     }
  //   },
  //   {
  //     "id": 12,
  //     "titulo": "Macacao Infantil",
  //     "preco": 94.9,
  //     "descricao": "Macacão Infantil Bebê 100% Algodão Liso - 1 Ao 3 - Kit Com 6",
  //     "imagem": "https://http2.mlstatic.com/D_Q_NP_840594-MLB43624022844_092020-R.webp",
  //     "categoria": {
  //       "id": 3,
  //       "nomeCategoria": "BEBE"
  //     }
  //   },
  //   {
  //     "id": 13,
  //     "titulo": "Triciclo",
  //     "preco": 139.0,
  //     "descricao": "Totoka Triciclo Infantil Bebe Carrinho Totokinha Menino Azul",
  //     "imagem": "https://http2.mlstatic.com/D_Q_NP_989573-MLB45841101632_052021-R.webp",
  //     "categoria": {
  //       "id": 3,
  //       "nomeCategoria": "BEBE"
  //     }
  //   },
  //   {
  //     "id": 14,
  //     "titulo": "Bomba Tira Leite",
  //     "preco": 129.0,
  //     "descricao": "Bomba Tira-leite Materno Elétrica Compact Automática G-tech",
  //     "imagem": "https://http2.mlstatic.com/D_Q_NP_790277-MLA43001525325_082020-P.webp",
  //     "categoria": {
  //       "id": 3,
  //       "nomeCategoria": "BEBE"
  //     }
  //   },
  //   {
  //     "id": 15,
  //     "titulo": "Cadeira Infantil",
  //     "preco": 923.0,
  //     "descricao": "Cadeira infantil para carro Fisher-Price All-Stages Fix 2.0 cinza.",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_890208-MLA43425526686_092020-W.webp",
  //     "categoria": {
  //       "id": 3,
  //       "nomeCategoria": "BEBE"
  //     }
  //   },
  //   {
  //     "id": 16,
  //     "titulo": "Mountain bike Sutton New aro 29 19 24v",
  //     "preco": 2140.0,
  //     "descricao": "Possui freios de disco hidráulico, câmbio Shimano y Shimano Altus, cor preto/vermelho",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_816555-MLA46868309993_072021-O.webp",
  //     "categoria": {
  //       "id": 4,
  //       "nomeCategoria": "ESPORTE"
  //     }
  //   },
  //   {
  //     "id": 17,
  //     "titulo": "Estação De Musculação",
  //     "preco": 2150.0,
  //     "descricao": "Melhor custo x benefício do mercado! Exercita e tonifica seus músculos com o peso de até 45kg.",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_998434-MLB44642179199_012021-O.webp",
  //     "categoria": {
  //       "id": 4,
  //       "nomeCategoria": "ESPORTE"
  //     }
  //   },
  //   {
  //     "id": 18,
  //     "titulo": "Corda para treino - Fit Bulldozer",
  //     "preco": 30.0,
  //     "descricao": "Corda ajustável de 3m para treino, material PVC",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_762029-MLB44786452434_022021-O.webp",
  //     "categoria": {
  //       "id": 4,
  //       "nomeCategoria": "ESPORTE"
  //     }
  //   },
  //   {
  //     "id": 19,
  //     "titulo": "Whey Protein Concentrado Growth",
  //     "preco": 150.0,
  //     "descricao": "O Whey Protein Growth ajuda na recuperação da fibra muscular depois do seu treino. Rico em aminoácidos essenciais e vitaminas.",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_640330-MLB48293758543_112021-O.webp",
  //     "categoria": {
  //       "id": 4,
  //       "nomeCategoria": "ESPORTE"
  //     }
  //   },
  //   {
  //     "id": 20,
  //     "titulo": "Whey Grego Bar Cx 12un (480g)",
  //     "preco": 55.0,
  //     "descricao": "Grego Bar é prática, nutricionalmente balanceada e pode ser usada como lanches intermediários.",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_898426-MLB41374089836_042020-O.webp",
  //     "categoria": {
  //       "id": 4,
  //       "nomeCategoria": "ESPORTE"
  //     }
  //   },
  //   {
  //     "id": 21,
  //     "titulo": "Sony PlayStation 4 500GB",
  //     "preco": 4490.0,
  //     "descricao": "Com seu console PlayStation 4 você terá entretenimento garantido todos os dias",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_2X_999927-MLA40671537353_022020-F.webp",
  //     "categoria": {
  //       "id": 5,
  //       "nomeCategoria": "GAMES"
  //     }
  //   },
  //   {
  //     "id": 22,
  //     "titulo": "Controle PlayStation 4",
  //     "preco": 200.0,
  //     "descricao": "Controle Compatível Com Ps4 Manete Sem Fio",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_674054-MLB46976103294_082021-O.webp",
  //     "categoria": {
  //       "id": 5,
  //       "nomeCategoria": "GAMES"
  //     }
  //   },
  //   {
  //     "id": 23,
  //     "titulo": "GTA V para PS4",
  //     "preco": 169.0,
  //     "descricao": "Grand Theft Auto V Incluso Mapa Mídia Física",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_2X_688944-MLB43960644148_102020-F.webp",
  //     "categoria": {
  //       "id": 5,
  //       "nomeCategoria": "GAMES"
  //     }
  //   },
  //   {
  //     "id": 24,
  //     "titulo": "The Last of Us Part II PS4",
  //     "preco": 129.0,
  //     "descricao": "Com este jogo The Last of Us, você desfrutará de horas de diversão e novos desafios que lhe permitirão melhorar como jogador.",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_780373-MLA43441025403_092020-O.webp",
  //     "categoria": {
  //       "id": 5,
  //       "nomeCategoria": "GAMES"
  //     }
  //   },
  //   {
  //     "id": 25,
  //     "titulo": "Marvel Spider-Man PS4",
  //     "preco": 135.0,
  //     "descricao": "Com este jogo Homem-Aranha, você desfrutará de horas de diversão e novos desafios que lhe permitirão melhorar como jogador.",
  //     "imagem": "https://http2.mlstatic.com/D_NQ_NP_2X_663372-MLA43440081326_092020-F.webp",
  //     "categoria": {
  //       "id": 5,
  //       "nomeCategoria": "GAMES"
  //     }
  //   },
  //   {
  //     "id": 26,
  //     "titulo": "SSD Crucial BX500, 480GB, SATA, Leitura 540MB/s",
  //     "preco": 350.0,
  //     "descricao": "SSD Crucial BX500 480GB Sata Melhore o desempenho Inicialização super-rápida . Carregamento de arquivos a jato. Melhore a responsividade geral do sistema para todas as suas necessidades de computação.",
  //     "imagem": "https://images.kabum.com.br/produtos/fotos/98545/ssd-crucial-bx500-480gb-sata-leitura-540mb-s-gravacao-500mb-s-ct480bx500ssd1_1629125425_gg.jpg",
  //     "categoria": {
  //       "id": 6,
  //       "nomeCategoria": "INFORMATICA"
  //     }
  //   },
  //   {
  //     "id": 27,
  //     "titulo": "MacBook Air Apple 13 M1 (16GB 1TB Mac OS X)",
  //     "preco": 14499.99,
  //     "descricao": "O MacBook Air oferece todos os recursos necessários para garantir uma excelente experiência do usuário. Com design refinado, possui tela de 13 polegadas com maior resolução.",
  //     "imagem": "https://images.kabum.com.br/produtos/fotos/153439/macbook-air-apple-13-3-processador-m1-16gb-ssd-1tb-space-grey-mgqn3bz-a_1616420548_gg.jpg",
  //     "categoria": {
  //       "id": 6,
  //       "nomeCategoria": "INFORMATICA"
  //     }
  //   },
  //   {
  //     "id": 28,
  //     "titulo": "PC Gamer PCMIX Intel Pentium Gold G5400",
  //     "preco": 2799.9,
  //     "descricao": "PC Gamer PCMIX Intel Pentium Gold G5400, 8GB DDR4, SSD 240GB, Fonte 500W 80 Plus, MB Asus H310M-E PRIME, Linux - CPU L3500.",
  //     "imagem": "https://images.kabum.com.br/produtos/fotos/158043/computador-gamer-pcmix-intel-pentium-gold-8gb-ddr4-ssd-240gb-linux-cpu-l3500_1622579839_gg.jpg",
  //     "categoria": {
  //       "id": 6,
  //       "nomeCategoria": "INFORMATICA"
  //     }
  //   },
  //   {
  //     "id": 29,
  //     "titulo": "Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz",
  //     "preco": 259.0,
  //     "descricao": "Módulo de memória SPECTRIX D45G DDR4 RGB O SPECTRIX D45G parece e é robusto com um exterior sólido de alumínio semelhante a uma armadura com cumes robustos. Defina a iluminação RGB da maneira que você desejar.",
  //     "imagem": "https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_gg.jpg",
  //     "categoria": {
  //       "id": 6,
  //       "nomeCategoria": "INFORMATICA"
  //     }
  //   },
  //   {
  //     "id": 30,
  //     "titulo": "HD WD Blue, 2TB, 3.5´, SATA 6.0Gb/s",
  //     "preco": 304.9,
  //     "descricao": "O WD Blue WD20EZAZ é caracterizado pela sua eficiência e bom funcionamento, que juntamente com o seu baixo consumo de energia o tornam um disco indispensável para funções padrão.",
  //     "imagem": "https://images.kabum.com.br/produtos/fotos/115063/hd-western-digital-blue-2tb-3-5-sata-6-0gb-s-wd20ezaz-_1594748888_gg.jpg",
  //     "categoria": {
  //       "id": 6,
  //       "nomeCategoria": "INFORMATICA"
  //     }
  //   }
  // ]

  const [itensPorPagina, setitensPorPagina] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [produtos, setProdutos] = useState([]);
  const [checkd, setCecked] = useState('');

  const indexInicial = paginaAtual * itensPorPagina;
  const indexFinal = indexInicial + itensPorPagina;
  const qttExibir = produtos.slice(indexInicial, indexFinal);

  const loadData = useCallback(() => {
    (async function loadDataa() {
      try {
        const response = await api.get( categoria === '' ?  categoria : `/produtos${checkd}`);
        setProdutos(response.data);
      } catch (error) {
        alert("Veridique sua conexão com a internet");
      }
    })()
  }, [checkd]);

  useEffect(() => {
    loadData();
  }, [loadData])


  useEffect(() => {
    setPaginaAtual(0)
  }, [itensPorPagina])

  useEffect(() => {
    console.log(checkd)
  }, [checkd])

  console.log("categoria")
  console.log(categoria)

  return (
    <>
      <Helmet>
        <title>Bodega | {checkd === '' ? 'Produtos' 
            : (produtos[0].categoria.nomeCategoria)}

        </title>
      </Helmet>
      <Header />
      <main className="container-produtos m-auto col-xl-9">

        <BoxFilterCategoria
          setCecked={setCecked}
        />

        <h2 style={{ width: '100%', textAlign: 'center' }}>Produtos</h2>
        <Container fluid={true}>
          <Row className="linha-produtos">
            {
              qttExibir.map(item => {
                return (
                  <CardProduto key={item.id} produto={item} />
                )
              }
              )}
          </Row>
        </Container>
        <Paginacao
          qtdItens={itensPorPagina}
          setPaginaAtual={setPaginaAtual}
          setitensPorPagina={setitensPorPagina}
          numPaginas={Math.ceil(produtos.length / itensPorPagina)}
        />
      </main>
      <Footer />
    </>
  );

}

export default Produtos;