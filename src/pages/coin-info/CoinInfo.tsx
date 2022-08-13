import React, {useEffect, useState} from "react";
import {CoinInfoS} from "./CoinInfo.Style";
import {useParams} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {PuffLoader} from "react-spinners";
import PageTitle from "../../components/page-title/PageTitle";
import {getCoinData, getHistoricalData} from "../../apis/ApiServices";
import {useDispatch, useSelector} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {favoritesActions} from "../../store/slices/favorites";

// const data: any = {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "asset_platform_id": null,
//     "platforms": {
//         "": ""
//     },
//     "block_time_in_minutes": 10,
//     "hashing_algorithm": "SHA-256",
//     "categories": [
//         "Cryptocurrency"
//     ],
//     "public_notice": null,
//     "additional_notices": [],
//     "localization": {
//         "en": "Bitcoin",
//         "de": "Bitcoin",
//         "es": "Bitcoin",
//         "fr": "Bitcoin",
//         "it": "Bitcoin",
//         "pl": "Bitcoin",
//         "ro": "Bitcoin",
//         "hu": "Bitcoin",
//         "nl": "Bitcoin",
//         "pt": "Bitcoin",
//         "sv": "Bitcoin",
//         "vi": "Bitcoin",
//         "tr": "Bitcoin",
//         "ru": "Биткоин",
//         "ja": "ビットコイン",
//         "zh": "比特币",
//         "zh-tw": "比特幣",
//         "ko": "비트코인",
//         "ar": "بيتكوين",
//         "th": "บิตคอยน์",
//         "id": "Bitcoin",
//         "cs": "Bitcoin",
//         "da": "Bitcoin",
//         "el": "Bitcoin",
//         "hi": "Bitcoin",
//         "no": "Bitcoin",
//         "sk": "Bitcoin",
//         "uk": "Bitcoin",
//         "he": "Bitcoin",
//         "fi": "Bitcoin",
//         "bg": "Bitcoin",
//         "hr": "Bitcoin",
//         "lt": "Bitcoin",
//         "sl": "Bitcoin"
//     },
//     "description": {
//         "en": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "de": "",
//         "es": "",
//         "fr": "",
//         "it": "",
//         "pl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "ro": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "hu": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "nl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "pt": "",
//         "sv": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "vi": "",
//         "tr": "",
//         "ru": "",
//         "ja": "",
//         "zh": "",
//         "zh-tw": "",
//         "ko": "비트코인은 2009년 나카모토 사토시가 만든 디지털 통화로, 통화를 발행하고 관리하는 중앙 장치가 존재하지 않는 구조를 가지고 있다. 대신, 비트코인의 거래는 P2P 기반 분산 데이터베이스에 의해 이루어지며, 공개 키 암호 방식 기반으로 거래를 수행한다. 비트코인은 공개성을 가지고 있다. 비트코인은 지갑 파일의 형태로 저장되며, 이 지갑에는 각각의 고유 주소가 부여되며, 그 주소를 기반으로 비트코인의 거래가 이루어진다. 비트코인은 1998년 웨이따이가 사이버펑크 메일링 리스트에 올린 암호통화란 구상을 최초로 구현한 것 중의 하나이다.\r\n\r\n비트코인은 최초로 구현된 가상화폐입니다. 발행 및 유통을 관리하는 중앙권력이나 중간상인 없이, P2P 네트워크 기술을 이용하여 네트워크에 참여하는 사용자들이 주체적으로 화폐를 발행하고 이체내용을 공동으로 관리합니다. 이를 가능하게 한 블록체인 기술을 처음으로 코인에 도입한 것이 바로 비트코인입니다.\r\n\r\n비트코인을 사용하는 개인과 사업자의 수는 꾸준히 증가하고 있으며, 여기에는 식당, 아파트, 법률사무소, 온라인 서비스를 비롯한 소매상들이 포함됩니다. 비트코인은 새로운 사회 현상이지만 아주 빠르게 성장하고 있습니다. 이를 바탕으로 가치 증대는 물론, 매일 수백만 달러의 비트코인이 교환되고 있습니다. \r\n\r\n비트코인은 가상화폐 시장에서 현재 유통시가총액과 코인의 가치가 가장 크고, 거래량 또한 안정적입니다. 이더리움이 빠르게 추격하고 있지만 아직은 가장 견고한 가상화폐라고 볼 수 있습니다. \r\n\r\n코인 특징\r\n1. 중앙주체 없이 사용자들에 의해 거래내용이 관리될 수 있는 비트코인의 운영 시스템은 블록체인 기술에서 기인합니다. 블록체인은 쉽게 말해 다 같이 장부를 공유하고, 항상 서로의 컴퓨터에 있는 장부 파일을 비교함으로써 같은 내용만 인정하는 방식으로 운영됩니다. 따라서 전통적인 금융기관에서 장부에 대한 접근을 튼튼하게 방어하던 것과는 정반대의 작업을 통해 보안을 달성합니다. 장부를 해킹하려면 51%의 장부를 동시에 조작해야 하는데, 이는 사실상 불가능합니다. 왜냐하면, 이를 실행하기 위해서는 컴퓨팅 파워가 어마어마하게 소요되고, 이것이 가능한 슈퍼컴퓨터는 세상에 존재하지 않기 때문입니다. 또한, 장부의 자료들은 줄글로 기록되는 것이 아니라 암호화 해시 함수형태로 블록에 저장되고, 이 블록들은 서로 연결되어 있어서 더 강력한 보안을 제공합니다. \r\n\r\n2. 비트코인은 블록발행보상을 채굴자에게 지급하는 방식으로 신규 코인을 발행합니다. 블록발행보상은 매 21만 블록(약 4년)을 기준으로 발행량이 절반으로 줄어듭니다. 처음에는 50비트코인씩 발행이 되었고, 4년마다 계속 반으로 감소하고 있습니다. 코인의 총량이 2,100만 개에 도달하면 신규 발행은 종료되고, 이후에는 거래 수수료만을 통해 시스템이 지탱될 것입니다. \r\n\r\n핵심 가치\r\n(키워드: 통화로 사용될 수 있는 보편성 및 편의성)\r\n\r\n1. 다양한 알트코인들의 등장에 앞서 비트코인은 가상화폐 시장에서 독보적이었기 때문에, 현재 가장 보편적인 결제수단으로 사용됩니다. 실생활에서 이를 활용할 수 있는 가맹점이 알트코인들보다 압도적으로 많을 뿐만 아니라, 이 또한 증가하고 있습니다. 일례로 일본 업체들이 비트코인 결제 시스템을 도입하면서 곧 비트코인을 오프라인 점포 26만 곳에서 이용할 수 있게 될 것입니다. \r\n\r\n2. 여러 나라에서 비트코인을 정식 결제 수단으로 인정하면서, 실물화폐와 가상화폐를 거래할 때 더는 부가가치세가 부과되지 않게 된다고 합니다. 실제로 일본과 호주에서는 이미 비트코인을 합법적 결제 수단으로 인정하면서 제도권 안으로 들여오고 있고, 미국에서는 비트코인 ETF 승인 노력도 진행되고 있습니다. 각국에 비트코인을 기반으로 한 ATM 기계도 설치되었다고 합니다. ",
//         "ar": "",
//         "th": "",
//         "id": "",
//         "cs": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "da": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "el": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "hi": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "no": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "sk": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "uk": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "he": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "fi": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "bg": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "hr": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "lt": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
//         "sl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>."
//     },
//     "links": {
//         "homepage": [
//             "http://www.bitcoin.org",
//             "",
//             ""
//         ],
//         "blockchain_site": [
//             "https://blockchair.com/bitcoin/",
//             "https://btc.com/",
//             "https://btc.tokenview.com/",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             ""
//         ],
//         "official_forum_url": [
//             "https://bitcointalk.org/",
//             "",
//             ""
//         ],
//         "chat_url": [
//             "",
//             "",
//             ""
//         ],
//         "announcement_url": [
//             "",
//             ""
//         ],
//         "twitter_screen_name": "bitcoin",
//         "facebook_username": "bitcoins",
//         "bitcointalk_thread_identifier": null,
//         "telegram_channel_identifier": "",
//         "subreddit_url": "https://www.reddit.com/r/Bitcoin/",
//         "repos_url": {
//             "github": [
//                 "https://github.com/bitcoin/bitcoin",
//                 "https://github.com/bitcoin/bips"
//             ],
//             "bitbucket": []
//         }
//     },
//     "image": {
//         "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
//         "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
//         "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
//     },
//     "country_origin": "",
//     "genesis_date": "2009-01-03",
//     "sentiment_votes_up_percentage": 70.03,
//     "sentiment_votes_down_percentage": 29.97,
//     "market_cap_rank": 1,
//     "coingecko_rank": 1,
//     "coingecko_score": 82.948,
//     "developer_score": 98.98,
//     "community_score": 83.011,
//     "liquidity_score": 99.677,
//     "public_interest_score": 0.098,
//     "market_data": {
//         "current_price": {
//             "aed": 84662,
//             "ars": 3063383,
//             "aud": 33394,
//             "bch": 167.306,
//             "bdt": 2183447,
//             "bhd": 8689.23,
//             "bmd": 23050,
//             "bnb": 73.5,
//             "brl": 119760,
//             "btc": 1,
//             "cad": 29817,
//             "chf": 22201,
//             "clp": 21145902,
//             "cny": 155872,
//             "czk": 555027,
//             "dkk": 168574,
//             "dot": 2746,
//             "eos": 18747,
//             "eth": 13.759324,
//             "eur": 22657,
//             "gbp": 19106.11,
//             "hkd": 180939,
//             "huf": 8920638,
//             "idr": 344716443,
//             "ils": 77139,
//             "inr": 1830956,
//             "jpy": 3119725,
//             "krw": 30086982,
//             "kwd": 7071.04,
//             "lkr": 8301674,
//             "ltc": 377.746,
//             "mmk": 42701310,
//             "mxn": 469604,
//             "myr": 102756,
//             "ngn": 9624912,
//             "nok": 226062,
//             "nzd": 36935,
//             "php": 1280175,
//             "pkr": 5172379,
//             "pln": 106705,
//             "rub": 1395090,
//             "sar": 86611,
//             "sek": 235156,
//             "sgd": 31850,
//             "thb": 824261,
//             "try": 413447,
//             "twd": 691518,
//             "uah": 851786,
//             "usd": 23050,
//             "vef": 2307.98,
//             "vnd": 539177028,
//             "xag": 1160.24,
//             "xau": 13,
//             "xdr": 16937.37,
//             "xlm": 197471,
//             "xrp": 62045,
//             "yfi": 2.070386,
//             "zar": 386819,
//             "bits": 999963,
//             "link": 2974,
//             "sats": 99996262
//         },
//         "total_value_locked": null,
//         "mcap_to_tvl_ratio": null,
//         "fdv_to_tvl_ratio": null,
//         "roi": null,
//         "ath": {
//             "aed": 253608,
//             "ars": 6913791,
//             "aud": 93482,
//             "bch": 202.283,
//             "bdt": 5922005,
//             "bhd": 26031,
//             "bmd": 69045,
//             "bnb": 143062,
//             "brl": 380542,
//             "btc": 1.003301,
//             "cad": 85656,
//             "chf": 62992,
//             "clp": 55165171,
//             "cny": 440948,
//             "czk": 1505245,
//             "dkk": 444134,
//             "dot": 5526,
//             "eos": 26798,
//             "eth": 624.203,
//             "eur": 59717,
//             "gbp": 51032,
//             "hkd": 537865,
//             "huf": 21673371,
//             "idr": 984115318,
//             "ils": 216131,
//             "inr": 5128383,
//             "jpy": 7828814,
//             "krw": 81339064,
//             "kwd": 20832,
//             "lkr": 14190616,
//             "ltc": 578.455,
//             "mmk": 126473151,
//             "mxn": 1409247,
//             "myr": 286777,
//             "ngn": 28379648,
//             "nok": 591777,
//             "nzd": 97030,
//             "php": 3454759,
//             "pkr": 11814869,
//             "pln": 275506,
//             "rub": 6075508,
//             "sar": 258938,
//             "sek": 596346,
//             "sgd": 91123,
//             "thb": 2258593,
//             "try": 850326,
//             "twd": 1914232,
//             "uah": 1815814,
//             "usd": 69045,
//             "vef": 8618768857,
//             "vnd": 1563347910,
//             "xag": 2815.08,
//             "xau": 37.72,
//             "xdr": 48913,
//             "xlm": 275874,
//             "xrp": 159288,
//             "yfi": 11.593182,
//             "zar": 1057029,
//             "bits": 1058236,
//             "link": 74906,
//             "sats": 105823579
//         },
//         "ath_change_percentage": {
//             "aed": -66.62551,
//             "ars": -55.69904,
//             "aud": -64.26643,
//             "bch": -17.31277,
//             "bdt": -63.1393,
//             "bhd": -66.62938,
//             "bmd": -66.6246,
//             "bnb": -99.94866,
//             "brl": -68.48442,
//             "btc": -0.32896,
//             "cad": -65.19608,
//             "chf": -64.73894,
//             "clp": -61.64433,
//             "cny": -64.65962,
//             "czk": -63.09973,
//             "dkk": -62.01654,
//             "dot": -50.37431,
//             "eos": -30.03852,
//             "eth": -97.79915,
//             "eur": -62.03189,
//             "gbp": -62.5449,
//             "hkd": -66.36819,
//             "huf": -58.80302,
//             "idr": -64.98043,
//             "ils": -64.31817,
//             "inr": -64.30155,
//             "jpy": -60.16151,
//             "krw": -63.01928,
//             "kwd": -66.06984,
//             "lkr": -41.51369,
//             "ltc": -34.8108,
//             "mmk": -66.24543,
//             "mxn": -66.63831,
//             "myr": -64.1778,
//             "ngn": -66.09377,
//             "nok": -61.77915,
//             "nzd": -61.91856,
//             "php": -62.88362,
//             "pkr": -56.23255,
//             "pln": -61.24384,
//             "rub": -77.0433,
//             "sar": -66.55995,
//             "sek": -60.56156,
//             "sgd": -65.04146,
//             "thb": -63.48214,
//             "try": -51.36418,
//             "twd": -63.87724,
//             "uah": -53.10255,
//             "usd": -66.6246,
//             "vef": -99.99997,
//             "vnd": -65.52014,
//             "xag": -58.79238,
//             "xau": -65.53978,
//             "xdr": -65.38156,
//             "xlm": -28.36547,
//             "xrp": -61.05524,
//             "yfi": -82.08102,
//             "zar": -63.38065,
//             "bits": -5.53381,
//             "link": -96.03365,
//             "sats": -5.53381
//         },
//         "ath_date": {
//             "aed": "2021-11-10T14:24:11.849Z",
//             "ars": "2021-11-10T14:24:11.849Z",
//             "aud": "2021-11-10T14:24:11.849Z",
//             "bch": "2022-07-15T08:07:35.321Z",
//             "bdt": "2021-11-10T14:24:11.849Z",
//             "bhd": "2021-11-10T14:24:11.849Z",
//             "bmd": "2021-11-10T14:24:11.849Z",
//             "bnb": "2017-10-19T00:00:00.000Z",
//             "brl": "2021-11-09T04:09:45.771Z",
//             "btc": "2019-10-15T16:00:56.136Z",
//             "cad": "2021-11-10T14:24:11.849Z",
//             "chf": "2021-11-10T17:30:22.767Z",
//             "clp": "2021-11-09T04:09:45.771Z",
//             "cny": "2021-11-10T14:24:11.849Z",
//             "czk": "2021-11-10T14:24:11.849Z",
//             "dkk": "2021-11-10T14:24:11.849Z",
//             "dot": "2020-12-27T11:42:47.567Z",
//             "eos": "2022-06-13T09:14:54.961Z",
//             "eth": "2015-10-20T00:00:00.000Z",
//             "eur": "2021-11-10T14:24:11.849Z",
//             "gbp": "2021-11-10T14:24:11.849Z",
//             "hkd": "2021-11-10T14:24:11.849Z",
//             "huf": "2021-11-10T16:54:53.781Z",
//             "idr": "2021-11-10T14:24:11.849Z",
//             "ils": "2021-10-20T14:54:17.702Z",
//             "inr": "2021-11-10T14:24:11.849Z",
//             "jpy": "2021-11-10T14:24:11.849Z",
//             "krw": "2021-11-10T14:24:11.849Z",
//             "kwd": "2021-11-10T14:24:11.849Z",
//             "lkr": "2022-03-29T12:14:23.745Z",
//             "ltc": "2022-06-13T07:48:18.897Z",
//             "mmk": "2021-10-20T14:54:17.702Z",
//             "mxn": "2021-11-10T17:30:22.767Z",
//             "myr": "2021-11-10T14:24:11.849Z",
//             "ngn": "2021-11-09T04:09:45.771Z",
//             "nok": "2021-11-10T17:30:22.767Z",
//             "nzd": "2021-11-10T14:24:11.849Z",
//             "php": "2021-11-10T14:24:11.849Z",
//             "pkr": "2021-11-10T14:24:11.849Z",
//             "pln": "2021-11-10T14:24:11.849Z",
//             "rub": "2022-03-07T16:43:46.826Z",
//             "sar": "2021-11-10T14:24:11.849Z",
//             "sek": "2021-11-10T17:30:22.767Z",
//             "sgd": "2021-11-09T00:00:00.000Z",
//             "thb": "2021-11-10T14:24:11.849Z",
//             "try": "2021-12-20T16:44:25.022Z",
//             "twd": "2021-11-10T14:24:11.849Z",
//             "uah": "2021-04-14T06:52:46.198Z",
//             "usd": "2021-11-10T14:24:11.849Z",
//             "vef": "2021-01-03T12:04:17.372Z",
//             "vnd": "2021-11-10T14:24:11.849Z",
//             "xag": "2021-11-09T04:09:45.771Z",
//             "xau": "2021-10-20T14:54:17.702Z",
//             "xdr": "2021-11-10T14:24:11.849Z",
//             "xlm": "2021-01-03T07:50:39.913Z",
//             "xrp": "2021-01-03T07:54:40.240Z",
//             "yfi": "2020-07-18T00:00:00.000Z",
//             "zar": "2021-11-10T17:49:04.400Z",
//             "bits": "2021-05-19T16:00:11.072Z",
//             "link": "2017-12-12T00:00:00.000Z",
//             "sats": "2021-05-19T16:00:11.072Z"
//         },
//         "atl": {
//             "aed": 632.31,
//             "ars": 1478.98,
//             "aud": 72.61,
//             "bch": 3.513889,
//             "bdt": 9390.25,
//             "bhd": 45.91,
//             "bmd": 121.77,
//             "bnb": 72.098,
//             "brl": 149.66,
//             "btc": 0.99895134,
//             "cad": 69.81,
//             "chf": 63.26,
//             "clp": 107408,
//             "cny": 407.23,
//             "czk": 4101.56,
//             "dkk": 382.47,
//             "dot": 991.882,
//             "eos": 908.141,
//             "eth": 6.779735,
//             "eur": 51.3,
//             "gbp": 43.9,
//             "hkd": 514.37,
//             "huf": 46598,
//             "idr": 658780,
//             "ils": 672.18,
//             "inr": 3993.42,
//             "jpy": 6641.83,
//             "krw": 75594,
//             "kwd": 50.61,
//             "lkr": 22646,
//             "ltc": 20.707835,
//             "mmk": 117588,
//             "mxn": 859.32,
//             "myr": 211.18,
//             "ngn": 10932.64,
//             "nok": 1316.03,
//             "nzd": 84.85,
//             "php": 2880.5,
//             "pkr": 17315.84,
//             "pln": 220.11,
//             "rub": 2206.43,
//             "sar": 646.04,
//             "sek": 443.81,
//             "sgd": 84.47,
//             "thb": 5644.35,
//             "try": 392.91,
//             "twd": 1998.66,
//             "uah": 553.37,
//             "usd": 67.81,
//             "vef": 766.19,
//             "vnd": 3672339,
//             "xag": 3.37,
//             "xau": 0.0531,
//             "xdr": 44.39,
//             "xlm": 21608,
//             "xrp": 9908,
//             "yfi": 0.23958075,
//             "zar": 666.26,
//             "bits": 950993,
//             "link": 598.477,
//             "sats": 95099268
//         },
//         "atl_change_percentage": {
//             "aed": 13285.83141,
//             "ars": 206994.18083,
//             "aud": 45905.86283,
//             "bch": 4660.03558,
//             "bdt": 23146.36216,
//             "bhd": 18819.65732,
//             "bmd": 18824.17444,
//             "bnb": 1.87173,
//             "brl": 80035.79113,
//             "btc": 0.10498,
//             "cad": 42606.13449,
//             "chf": 35011.15096,
//             "clp": 19599.58527,
//             "cny": 38166.90628,
//             "czk": 13442.15671,
//             "dkk": 44007.64725,
//             "dot": 176.47767,
//             "eos": 1964.50059,
//             "eth": 102.6294,
//             "eur": 44098.944,
//             "gbp": 43437.89818,
//             "hkd": 35067.68352,
//             "huf": 19061.26342,
//             "idr": 52213.82336,
//             "ils": 11372.97696,
//             "inr": 45744.25549,
//             "jpy": 46858.14398,
//             "krw": 39691.32399,
//             "kwd": 13865.76171,
//             "lkr": 36548.67374,
//             "ltc": 1721.00365,
//             "mmk": 36205.14042,
//             "mxn": 54611.80533,
//             "myr": 48546.62928,
//             "ngn": 87915.95248,
//             "nok": 17086.75932,
//             "nzd": 43445.56819,
//             "php": 44415.89638,
//             "pkr": 29763.20601,
//             "pln": 48409.73717,
//             "rub": 63112.25283,
//             "sar": 13303.05224,
//             "sek": 52893.81791,
//             "sgd": 37613.73911,
//             "thb": 14512.66654,
//             "try": 105156.60561,
//             "twd": 34496.92891,
//             "uah": 153788.64315,
//             "usd": 33883.64113,
//             "vef": 201.15166,
//             "vnd": 14578.3875,
//             "xag": 34325.28121,
//             "xau": 24376.07817,
//             "xdr": 38044.94657,
//             "xlm": 814.56146,
//             "xrp": 526.10479,
//             "yfi": 767.08967,
//             "zar": 57996.63235,
//             "bits": 5.11911,
//             "link": 396.43444,
//             "sats": 5.11911
//         },
//         "atl_date": {
//             "aed": "2015-01-14T00:00:00.000Z",
//             "ars": "2015-01-14T00:00:00.000Z",
//             "aud": "2013-07-05T00:00:00.000Z",
//             "bch": "2017-08-02T00:00:00.000Z",
//             "bdt": "2013-09-08T00:00:00.000Z",
//             "bhd": "2013-09-08T00:00:00.000Z",
//             "bmd": "2013-09-08T00:00:00.000Z",
//             "bnb": "2022-08-05T09:17:36.941Z",
//             "brl": "2013-07-05T00:00:00.000Z",
//             "btc": "2019-10-21T00:00:00.000Z",
//             "cad": "2013-07-05T00:00:00.000Z",
//             "chf": "2013-07-05T00:00:00.000Z",
//             "clp": "2015-01-14T00:00:00.000Z",
//             "cny": "2013-07-05T00:00:00.000Z",
//             "czk": "2015-01-14T00:00:00.000Z",
//             "dkk": "2013-07-05T00:00:00.000Z",
//             "dot": "2021-05-19T11:04:48.978Z",
//             "eos": "2019-04-11T00:00:00.000Z",
//             "eth": "2017-06-12T00:00:00.000Z",
//             "eur": "2013-07-05T00:00:00.000Z",
//             "gbp": "2013-07-05T00:00:00.000Z",
//             "hkd": "2013-07-05T00:00:00.000Z",
//             "huf": "2015-01-14T00:00:00.000Z",
//             "idr": "2013-07-05T00:00:00.000Z",
//             "ils": "2015-01-14T00:00:00.000Z",
//             "inr": "2013-07-05T00:00:00.000Z",
//             "jpy": "2013-07-05T00:00:00.000Z",
//             "krw": "2013-07-05T00:00:00.000Z",
//             "kwd": "2015-01-14T00:00:00.000Z",
//             "lkr": "2015-01-14T00:00:00.000Z",
//             "ltc": "2013-11-28T00:00:00.000Z",
//             "mmk": "2013-09-08T00:00:00.000Z",
//             "mxn": "2013-07-05T00:00:00.000Z",
//             "myr": "2013-07-05T00:00:00.000Z",
//             "ngn": "2013-07-06T00:00:00.000Z",
//             "nok": "2015-01-14T00:00:00.000Z",
//             "nzd": "2013-07-05T00:00:00.000Z",
//             "php": "2013-07-05T00:00:00.000Z",
//             "pkr": "2015-01-14T00:00:00.000Z",
//             "pln": "2013-07-05T00:00:00.000Z",
//             "rub": "2013-07-05T00:00:00.000Z",
//             "sar": "2015-01-14T00:00:00.000Z",
//             "sek": "2013-07-05T00:00:00.000Z",
//             "sgd": "2013-07-05T00:00:00.000Z",
//             "thb": "2015-01-14T00:00:00.000Z",
//             "try": "2015-01-14T00:00:00.000Z",
//             "twd": "2013-07-05T00:00:00.000Z",
//             "uah": "2013-07-06T00:00:00.000Z",
//             "usd": "2013-07-06T00:00:00.000Z",
//             "vef": "2013-09-08T00:00:00.000Z",
//             "vnd": "2015-01-14T00:00:00.000Z",
//             "xag": "2013-07-05T00:00:00.000Z",
//             "xau": "2013-07-05T00:00:00.000Z",
//             "xdr": "2013-07-05T00:00:00.000Z",
//             "xlm": "2018-11-20T00:00:00.000Z",
//             "xrp": "2018-12-25T00:00:00.000Z",
//             "yfi": "2020-09-12T20:09:36.122Z",
//             "zar": "2013-07-05T00:00:00.000Z",
//             "bits": "2021-05-19T13:14:13.071Z",
//             "link": "2020-08-16T08:13:13.338Z",
//             "sats": "2021-05-19T13:14:13.071Z"
//         },
//         "market_cap": {
//             "aed": 1617613940441,
//             "ars": 58536408489880,
//             "aud": 638414484969,
//             "bch": 3196912117,
//             "bdt": 41718537016559,
//             "bhd": 166015282705,
//             "bmd": 440406735759,
//             "bnb": 1403809951,
//             "brl": 2292052815582,
//             "btc": 19113131,
//             "cad": 569748028357,
//             "chf": 424500125276,
//             "clp": 404381464773489,
//             "cny": 2978206509894,
//             "czk": 10615327460307,
//             "dkk": 3224074139892,
//             "dot": 52435807723,
//             "eos": 358399597217,
//             "eth": 262644178,
//             "eur": 433323674227,
//             "gbp": 365300651856,
//             "hkd": 3457166010894,
//             "huf": 170643021633311,
//             "idr": 6586482703910947,
//             "ils": 1473876192058,
//             "inr": 34988598010153,
//             "jpy": 59606758751289,
//             "krw": 574872139147140,
//             "kwd": 135084636839,
//             "lkr": 158617891876119,
//             "ltc": 7210482230,
//             "mmk": 815882603411346,
//             "mxn": 8985286122596,
//             "myr": 1963333228012,
//             "ngn": 183900640650692,
//             "nok": 4322702213154,
//             "nzd": 706178548180,
//             "php": 24506431049657,
//             "pkr": 98827271504216,
//             "pln": 2040650153728,
//             "rub": 26655616800972,
//             "sar": 1654851210763,
//             "sek": 4494842672740,
//             "sgd": 608802857277,
//             "thb": 15763037886270,
//             "try": 7903844922197,
//             "twd": 13215152357479,
//             "uah": 16274858776265,
//             "usd": 440406735759,
//             "vef": 44097926452,
//             "vnd": 10301912511069832,
//             "xag": 22169986997,
//             "xau": 248389399,
//             "xdr": 323617915943,
//             "xlm": 3777031617203,
//             "xrp": 1185672135649,
//             "yfi": 39627087,
//             "zar": 7397659476793,
//             "bits": 19106944116504,
//             "link": 56786564760,
//             "sats": 1910694411650402
//         },
//         "market_cap_rank": 1,
//         "fully_diluted_valuation": {
//             "aed": 1777306541208,
//             "ars": 64315186155919,
//             "aud": 701439454601,
//             "bch": 3512514744,
//             "bdt": 45837036189818,
//             "bhd": 182404491279,
//             "bmd": 483884165861,
//             "bnb": 1542395591,
//             "brl": 2518326752808,
//             "btc": 21000000,
//             "cad": 625994170996,
//             "chf": 466407237559,
//             "clp": 444302441093679,
//             "cny": 3272218283219,
//             "czk": 11663284088119,
//             "dkk": 3542358232031,
//             "dot": 57612327472,
//             "eos": 393781193754,
//             "eth": 288572696,
//             "eur": 476101856822,
//             "gbp": 401363527983,
//             "hkd": 3798461185076,
//             "huf": 187489085608189,
//             "idr": 7236707412413480,
//             "ils": 1619378846575,
//             "inr": 38442710313303,
//             "jpy": 65491202554781,
//             "krw": 631624139555677,
//             "kwd": 148420338542,
//             "lkr": 174276822013018,
//             "ltc": 7922308848,
//             "mmk": 896427417969263,
//             "mxn": 9872323303519,
//             "myr": 2157155611409,
//             "ngn": 202055511138627,
//             "nok": 4749444058968,
//             "nzd": 775893259549,
//             "php": 26925732473805,
//             "pkr": 108583606819235,
//             "pln": 2242105347799,
//             "rub": 29287088170976,
//             "sar": 1818219915200,
//             "sek": 4938578411226,
//             "sgd": 668904534941,
//             "thb": 17319182064501,
//             "try": 8684121056155,
//             "twd": 14519766515861,
//             "uah": 17881530467277,
//             "usd": 483884165861,
//             "vef": 48451321528,
//             "vnd": 11318928475531638,
//             "xag": 24358632133,
//             "xau": 272910670,
//             "xdr": 355565827221,
//             "xlm": 4149904270591,
//             "xrp": 1302722973469,
//             "yfi": 43539116,
//             "zar": 8127964435165,
//             "bits": 20993202340662,
//             "link": 62392595957,
//             "sats": 2099320234066226
//         },
//         "total_volume": {
//             "aed": 98297244175,
//             "ars": 3556757322332,
//             "aud": 38772602640,
//             "bch": 194251990,
//             "bdt": 2535102546551,
//             "bhd": 10088674631,
//             "bmd": 26762113851,
//             "bnb": 85337135,
//             "brl": 139047914936,
//             "btc": 1161012,
//             "cad": 34619256381,
//             "chf": 25777161013,
//             "clp": 24551563247022,
//             "cny": 180976118707,
//             "czk": 644416982372,
//             "dkk": 195724264694,
//             "dot": 3187744455,
//             "eos": 21766807680,
//             "eth": 15975337,
//             "eur": 26305712762,
//             "gbp": 22183249982,
//             "hkd": 210080720383,
//             "huf": 10357354585925,
//             "idr": 400234883100321,
//             "ils": 89562759267,
//             "inr": 2125841716187,
//             "jpy": 3622173780254,
//             "krw": 34932652295334,
//             "kwd": 8209867190,
//             "lkr": 9638703808430,
//             "ltc": 438583559,
//             "mmk": 49578585768084,
//             "mxn": 545236534916,
//             "myr": 119305503548,
//             "ngn": 11175055880814,
//             "nok": 262470421793,
//             "nzd": 42883878856,
//             "php": 1486354502521,
//             "pkr": 6005418348192,
//             "pln": 123890201558,
//             "rub": 1619776887315,
//             "sar": 100560462619,
//             "sek": 273028691236,
//             "sgd": 36979353677,
//             "thb": 957013191316,
//             "try": 480034685597,
//             "twd": 802890150885,
//             "uah": 988971303382,
//             "usd": 26762113851,
//             "vef": 2679690460,
//             "vnd": 626014393332845,
//             "xag": 1347097495,
//             "xau": 15089283,
//             "xdr": 19665229452,
//             "xlm": 229275299714,
//             "xrp": 72037661251,
//             "yfi": 2403833,
//             "zar": 449118047954,
//             "bits": 1161011985634,
//             "link": 3453372783,
//             "sats": 116101198563400
//         },
//         "high_24h": {
//             "aed": 86071,
//             "ars": 3108499,
//             "aud": 33748,
//             "bch": 169.375,
//             "bdt": 2219781,
//             "bhd": 8835.02,
//             "bmd": 23433,
//             "bnb": 75.779,
//             "brl": 122518,
//             "btc": 1,
//             "cad": 30198,
//             "chf": 22409,
//             "clp": 21259389,
//             "cny": 158173,
//             "czk": 562987,
//             "dkk": 170424,
//             "dot": 2856,
//             "eos": 19296,
//             "eth": 14.244188,
//             "eur": 22900,
//             "gbp": 19330.82,
//             "hkd": 183949,
//             "huf": 9033680,
//             "idr": 349074716,
//             "ils": 78002,
//             "inr": 1856315,
//             "jpy": 3149997,
//             "krw": 30369979,
//             "kwd": 7183.81,
//             "lkr": 8439819,
//             "ltc": 385.746,
//             "mmk": 43411885,
//             "mxn": 477539,
//             "myr": 104419,
//             "ngn": 9729497,
//             "nok": 228501,
//             "nzd": 37324,
//             "php": 1295436,
//             "pkr": 5257125,
//             "pln": 107893,
//             "rub": 1426056,
//             "sar": 88057,
//             "sek": 237327,
//             "sgd": 32241,
//             "thb": 834138,
//             "try": 421028,
//             "twd": 701858,
//             "uah": 865961,
//             "usd": 23433,
//             "vef": 2346.38,
//             "vnd": 548149260,
//             "xag": 1173.73,
//             "xau": 13.11,
//             "xdr": 17196.58,
//             "xlm": 200119,
//             "xrp": 62137,
//             "yfi": 2.159051,
//             "zar": 391675,
//             "bits": 1001588,
//             "link": 3135,
//             "sats": 100158846
//         },
//         "low_24h": {
//             "aed": 82699,
//             "ars": 2986434,
//             "aud": 32275,
//             "bch": 166.583,
//             "bdt": 2135671,
//             "bhd": 8489.17,
//             "bmd": 22515,
//             "bnb": 72.098,
//             "brl": 117369,
//             "btc": 1,
//             "cad": 28948,
//             "chf": 21501,
//             "clp": 20265228,
//             "cny": 151962,
//             "czk": 539912,
//             "dkk": 163493,
//             "dot": 2740,
//             "eos": 18649,
//             "eth": 13.604413,
//             "eur": 21972,
//             "gbp": 18497.3,
//             "hkd": 176744,
//             "huf": 8680106,
//             "idr": 335148261,
//             "ils": 75320,
//             "inr": 1782056,
//             "jpy": 2990346,
//             "krw": 29339076,
//             "kwd": 6906.78,
//             "lkr": 8116888,
//             "ltc": 375.489,
//             "mmk": 41746094,
//             "mxn": 457961,
//             "myr": 100373,
//             "ngn": 9371323,
//             "nok": 218922,
//             "nzd": 35700,
//             "php": 1250149,
//             "pkr": 5056144,
//             "pln": 103470,
//             "rub": 1384126,
//             "sar": 84601,
//             "sek": 227633,
//             "sgd": 30977,
//             "thb": 806845,
//             "try": 403666,
//             "twd": 674577,
//             "uah": 828551,
//             "usd": 22515,
//             "vef": 2254.45,
//             "vnd": 526795960,
//             "xag": 1113.97,
//             "xau": 12.55,
//             "xdr": 16546.26,
//             "xlm": 197278,
//             "xrp": 60685,
//             "yfi": 2.071056,
//             "zar": 373925,
//             "bits": 999140,
//             "link": 2958,
//             "sats": 99913963
//         },
//         "price_change_24h": 89.788,
//         "price_change_percentage_24h": 0.39106,
//         "price_change_percentage_7d": -3.24175,
//         "price_change_percentage_14d": -0.45515,
//         "price_change_percentage_30d": 14.17142,
//         "price_change_percentage_60d": -22.95609,
//         "price_change_percentage_200d": -46.54469,
//         "price_change_percentage_1y": -42.01535,
//         "market_cap_change_24h": 3009953772,
//         "market_cap_change_percentage_24h": 0.68815,
//         "price_change_24h_in_currency": {
//             "aed": 329.79,
//             "ars": 17861.83,
//             "aud": 431.73,
//             "bch": -0.21018323846669773,
//             "bdt": 5587.12,
//             "bhd": 33.11,
//             "bmd": 89.79,
//             "bnb": -2.0861145810317936,
//             "brl": 14.2,
//             "btc": 0,
//             "cad": 299.81,
//             "chf": 239.74,
//             "clp": 493356,
//             "cny": 907.96,
//             "czk": 2452.5,
//             "dkk": 1415.84,
//             "dot": -68.04409665578078,
//             "eos": -474.76852738505113,
//             "eth": -0.4318066574696786,
//             "eur": 197.09,
//             "gbp": 197.15,
//             "hkd": 702.08,
//             "huf": 45850,
//             "idr": 2595842,
//             "ils": 331.48,
//             "inr": 13257.09,
//             "jpy": 60276,
//             "krw": 116776,
//             "kwd": 29.73,
//             "lkr": 24444,
//             "ltc": -6.669576888094241,
//             "mmk": 130556,
//             "mxn": 3017.04,
//             "myr": 400.28,
//             "ngn": 46218,
//             "nok": 2284.59,
//             "nzd": 470.51,
//             "php": 5331.11,
//             "pkr": 16354.6,
//             "pln": 556.77,
//             "rub": -13507.788266824558,
//             "sar": 344.48,
//             "sek": 2534.11,
//             "sgd": 229.22,
//             "thb": 995.19,
//             "try": 1500.31,
//             "twd": 3270.01,
//             "uah": 6868.34,
//             "usd": 89.79,
//             "vef": 8.99,
//             "vnd": 1974652,
//             "xag": 19.13,
//             "xau": 0.154175,
//             "xdr": 64.26,
//             "xlm": -1996.5710730371356,
//             "xrp": 21.831499,
//             "yfi": -0.06253649016007712,
//             "zar": 4114.16,
//             "bits": -588.9324353468837,
//             "link": -142.56832051968013,
//             "sats": -58893.24353468418
//         },
//         "price_change_percentage_1h_in_currency": {
//             "aed": -0.63316,
//             "ars": -0.61061,
//             "aud": -0.52811,
//             "bch": -0.09452,
//             "bdt": -0.63316,
//             "bhd": -0.64687,
//             "bmd": -0.63316,
//             "bnb": 0.34364,
//             "brl": -0.51828,
//             "btc": 0,
//             "cad": -0.56137,
//             "chf": -0.61139,
//             "clp": 0.18038,
//             "cny": -0.59494,
//             "czk": -0.86434,
//             "dkk": -0.73154,
//             "dot": 0.1585,
//             "eos": 0.0716,
//             "eth": 0.51863,
//             "eur": -0.73213,
//             "gbp": -0.68983,
//             "hkd": -0.63342,
//             "huf": -0.82516,
//             "idr": -0.55206,
//             "ils": -0.63316,
//             "inr": -0.56011,
//             "jpy": -0.55192,
//             "krw": -0.3883,
//             "kwd": -0.61534,
//             "lkr": -0.63316,
//             "ltc": -0.05865,
//             "mmk": -0.63316,
//             "mxn": -0.54936,
//             "myr": -0.63316,
//             "ngn": -0.63316,
//             "nok": -0.59887,
//             "nzd": -0.54397,
//             "php": -0.64121,
//             "pkr": -1.17266,
//             "pln": -0.69136,
//             "rub": -0.63316,
//             "sar": -0.63943,
//             "sek": -0.6715,
//             "sgd": -0.61417,
//             "thb": -0.65955,
//             "try": -0.72093,
//             "twd": -0.59241,
//             "uah": -0.63316,
//             "usd": -0.63316,
//             "vef": -0.63316,
//             "vnd": -0.63316,
//             "xag": -0.25553,
//             "xau": -0.49197,
//             "xdr": -0.63316,
//             "xlm": -0.44169,
//             "xrp": -0.1168,
//             "yfi": -0.32131,
//             "zar": -0.53652,
//             "bits": 0.00857,
//             "link": 0.22035,
//             "sats": 0.00857
//         },
//         "price_change_percentage_24h_in_currency": {
//             "aed": 0.39106,
//             "ars": 0.5865,
//             "aud": 1.30977,
//             "bch": -0.12547,
//             "bdt": 0.25654,
//             "bhd": 0.38254,
//             "bmd": 0.39106,
//             "bnb": -2.75993,
//             "brl": 0.01186,
//             "btc": 0,
//             "cad": 1.0157,
//             "chf": 1.09163,
//             "clp": 2.38884,
//             "cny": 0.58592,
//             "czk": 0.44383,
//             "dkk": 0.847,
//             "dot": -2.4184,
//             "eos": -2.4699,
//             "eth": -3.04279,
//             "eur": 0.87752,
//             "gbp": 1.04261,
//             "hkd": 0.38953,
//             "huf": 0.51663,
//             "idr": 0.75875,
//             "ils": 0.43158,
//             "inr": 0.72933,
//             "jpy": 1.97016,
//             "krw": 0.38964,
//             "kwd": 0.42216,
//             "lkr": 0.29532,
//             "ltc": -1.73499,
//             "mmk": 0.30668,
//             "mxn": 0.64662,
//             "myr": 0.39106,
//             "ngn": 0.48251,
//             "nok": 1.02092,
//             "nzd": 1.29031,
//             "php": 0.41818,
//             "pkr": 0.31719,
//             "pln": 0.52452,
//             "rub": -0.95895,
//             "sar": 0.39932,
//             "sek": 1.08937,
//             "sgd": 0.72492,
//             "thb": 0.12088,
//             "try": 0.3642,
//             "twd": 0.47512,
//             "uah": 0.8129,
//             "usd": 0.39106,
//             "vef": 0.39106,
//             "vnd": 0.36758,
//             "xag": 1.67626,
//             "xau": 1.20055,
//             "xdr": 0.38082,
//             "xlm": -1.00095,
//             "xrp": 0.0352,
//             "yfi": -2.93196,
//             "zar": 1.07502,
//             "bits": -0.05886,
//             "link": -4.57403,
//             "sats": -0.05886
//         },
//         "price_change_percentage_7d_in_currency": {
//             "aed": -3.24188,
//             "ars": -1.9189,
//             "aud": -1.88225,
//             "bch": 8.72813,
//             "bdt": -3.26235,
//             "bhd": -3.24765,
//             "bmd": -3.24175,
//             "bnb": -14.69353,
//             "brl": -3.02711,
//             "btc": 0,
//             "cad": -2.26568,
//             "chf": -2.40859,
//             "clp": -2.70984,
//             "cny": -3.02521,
//             "czk": -3.34932,
//             "dkk": -3.09362,
//             "dot": -9.44284,
//             "eos": 3.65144,
//             "eth": -0.46574,
//             "eur": -3.05524,
//             "gbp": -2.35899,
//             "hkd": -3.23847,
//             "huf": -5.72334,
//             "idr": -2.62135,
//             "ils": -5.25408,
//             "inr": -3.40828,
//             "jpy": -2.62308,
//             "krw": -2.50962,
//             "kwd": -3.35138,
//             "lkr": -2.86595,
//             "ltc": 0.5926,
//             "mmk": -3.2098,
//             "mxn": -2.86223,
//             "myr": -3.12222,
//             "ngn": -4.18921,
//             "nok": -2.49725,
//             "nzd": -2.39287,
//             "php": -3.90871,
//             "pkr": -9.24946,
//             "pln": -4.12451,
//             "rub": -6.29929,
//             "sar": -3.20478,
//             "sek": -3.33031,
//             "sgd": -3.09356,
//             "thb": -5.01357,
//             "try": -3.30374,
//             "twd": -2.96521,
//             "uah": -3.0714,
//             "usd": -3.24175,
//             "vef": -3.24175,
//             "vnd": -3.12858,
//             "xag": -2.98141,
//             "xau": -4.28575,
//             "xdr": -3.3521,
//             "xlm": -3.48018,
//             "xrp": -3.0094,
//             "yfi": -20.82796,
//             "zar": -1.81667,
//             "bits": -0.01818,
//             "link": -9.85561,
//             "sats": -0.01818
//         },
//         "price_change_percentage_14d_in_currency": {
//             "aed": -0.4561,
//             "ars": 2.07408,
//             "aud": -0.13421,
//             "bch": -10.80865,
//             "bdt": -0.12375,
//             "bhd": -0.46307,
//             "bmd": -0.45515,
//             "bnb": -15.80917,
//             "brl": -5.95244,
//             "btc": 0,
//             "cad": -0.00977,
//             "chf": -0.77892,
//             "clp": -1.70274,
//             "cny": -0.51694,
//             "czk": -0.09689,
//             "dkk": -0.04537,
//             "dot": -10.80429,
//             "eos": -14.76675,
//             "eth": -6.3806,
//             "eur": 0.018,
//             "gbp": -1.02709,
//             "hkd": -0.44272,
//             "huf": -1.25802,
//             "idr": -0.85735,
//             "ils": -3.43075,
//             "inr": -0.88115,
//             "jpy": -1.77173,
//             "krw": -0.58444,
//             "kwd": -0.74408,
//             "lkr": -0.50022,
//             "ltc": -5.32714,
//             "mmk": -0.35547,
//             "mxn": -1.84437,
//             "myr": -0.43282,
//             "ngn": -1.3853,
//             "nok": -1.87675,
//             "nzd": -0.3966,
//             "php": -2.05206,
//             "pkr": -1.44479,
//             "pln": -1.0997,
//             "rub": 3.87848,
//             "sar": -0.46776,
//             "sek": -0.38541,
//             "sgd": -1.04034,
//             "thb": -3.19418,
//             "try": 0.72294,
//             "twd": -0.15796,
//             "uah": 24.62401,
//             "usd": -0.45515,
//             "vef": -0.45515,
//             "vnd": -0.54829,
//             "xag": -5.71388,
//             "xau": -3.54305,
//             "xdr": -0.55651,
//             "xlm": -3.2516,
//             "xrp": -1.83317,
//             "yfi": -39.88327,
//             "zar": -2.04873,
//             "bits": 0.00341,
//             "link": -10.25501,
//             "sats": 0.00341
//         },
//         "price_change_percentage_30d_in_currency": {
//             "aed": 14.16831,
//             "ars": 20.23897,
//             "aud": 12.377,
//             "bch": -13.34256,
//             "bdt": 15.72345,
//             "bhd": 14.15961,
//             "bmd": 14.17142,
//             "bnb": -15.9375,
//             "brl": 10.11499,
//             "btc": 0,
//             "cad": 13.31611,
//             "chf": 13.58357,
//             "clp": 10.18461,
//             "cny": 14.8935,
//             "czk": 13.99697,
//             "dkk": 15.17932,
//             "dot": -6.9075,
//             "eos": -9.73969,
//             "eth": -22.63419,
//             "eur": 15.17832,
//             "gbp": 13.11046,
//             "hkd": 14.21852,
//             "huf": 11.26685,
//             "idr": 13.50188,
//             "ils": 8.35422,
//             "inr": 14.26664,
//             "jpy": 14.04509,
//             "krw": 13.84911,
//             "kwd": 14.01421,
//             "lkr": 14.72302,
//             "ltc": -6.67357,
//             "mmk": 14.25941,
//             "mxn": 13.26936,
//             "myr": 15.16601,
//             "ngn": 14.06587,
//             "nok": 11.26984,
//             "nzd": 12.84098,
//             "php": 14.14985,
//             "pkr": 24.16739,
//             "pln": 14.34375,
//             "rub": 16.08926,
//             "sar": 14.29242,
//             "sek": 10.82002,
//             "sgd": 12.26593,
//             "thb": 13.59171,
//             "try": 20.40262,
//             "twd": 14.96078,
//             "uah": 42.81823,
//             "usd": 14.17142,
//             "vef": 14.17142,
//             "vnd": 14.30496,
//             "xag": 10.55946,
//             "xau": 13.9229,
//             "xdr": 14.53459,
//             "xlm": 5.94275,
//             "xrp": 0.06945,
//             "yfi": -36.74359,
//             "zar": 15.96713,
//             "bits": 0.03008,
//             "link": -6.69775,
//             "sats": 0.03008
//         },
//         "price_change_percentage_60d_in_currency": {
//             "aed": -22.9565,
//             "ars": -15.10353,
//             "aud": -19.54917,
//             "bch": 0.59311,
//             "bdt": -18.19033,
//             "bhd": -23.07729,
//             "bmd": -22.95609,
//             "bnb": -26.62426,
//             "brl": -16.19448,
//             "btc": 0,
//             "cad": -20.81723,
//             "chf": -22.90037,
//             "clp": -12.93518,
//             "cny": -21.77503,
//             "czk": -19.3614,
//             "dkk": -18.75487,
//             "dot": -14.34141,
//             "eos": -20.27357,
//             "eth": -16.96866,
//             "eur": -18.774,
//             "gbp": -20.22026,
//             "hkd": -22.91607,
//             "huf": -18.67381,
//             "idr": -20.19388,
//             "ils": -22.6809,
//             "inr": -21.23037,
//             "jpy": -20.26313,
//             "krw": -19.64599,
//             "kwd": -22.82199,
//             "lkr": -23.17841,
//             "ltc": -20.22009,
//             "mmk": -23.0621,
//             "mxn": -19.70281,
//             "myr": -21.78051,
//             "ngn": -22.50138,
//             "nok": -19.90215,
//             "nzd": -19.61787,
//             "php": -19.15621,
//             "pkr": -12.69645,
//             "pln": -16.63245,
//             "rub": -26.27537,
//             "sar": -22.81912,
//             "sek": -19.50423,
//             "sgd": -22.57827,
//             "thb": -19.81693,
//             "try": -16.31528,
//             "twd": -21.31691,
//             "uah": -3.34897,
//             "usd": -22.95609,
//             "vef": -22.95609,
//             "vnd": -22.28927,
//             "xag": -14.95756,
//             "xau": -19.55468,
//             "xdr": -22.18077,
//             "xlm": -5.22177,
//             "xrp": -17.89047,
//             "yfi": -48.56901,
//             "zar": -16.85807,
//             "bits": 0.02716,
//             "link": -23.99109,
//             "sats": 0.02716
//         },
//         "price_change_percentage_200d_in_currency": {
//             "aed": -46.54456,
//             "ars": -31.62921,
//             "aud": -44.1197,
//             "bch": 50.79076,
//             "bdt": -41.04611,
//             "bhd": -46.55221,
//             "bmd": -46.54469,
//             "bnb": -15.00707,
//             "brl": -49.82101,
//             "btc": 0,
//             "cad": -44.89397,
//             "chf": -43.70424,
//             "clp": -40.00576,
//             "cny": -43.09754,
//             "czk": -40.05307,
//             "dkk": -40.06391,
//             "dot": 76.48555,
//             "eos": 26.42874,
//             "eth": 7.04046,
//             "eur": -40.0508,
//             "gbp": -39.41659,
//             "hkd": -46.0931,
//             "huf": -33.78149,
//             "idr": -44.16081,
//             "ils": -42.42607,
//             "inr": -42.83574,
//             "jpy": -36.71285,
//             "krw": -41.37508,
//             "kwd": -45.67629,
//             "lkr": -5.07434,
//             "ltc": 28.45788,
//             "mmk": -44.28768,
//             "mxn": -46.36715,
//             "myr": -42.96907,
//             "ngn": -45.89386,
//             "nok": -40.26901,
//             "nzd": -41.69334,
//             "php": -42.19453,
//             "pkr": -31.82128,
//             "pln": -37.78713,
//             "rub": -57.58937,
//             "sar": -46.4725,
//             "sek": -39.58648,
//             "sgd": -45.23151,
//             "thb": -42.42389,
//             "try": -29.13453,
//             "twd": -41.76284,
//             "uah": -29.35509,
//             "usd": -46.54469,
//             "vef": -46.54469,
//             "vnd": -44.95667,
//             "xag": -38.26131,
//             "xau": -45.25329,
//             "xdr": -44.75856,
//             "xlm": 18.79853,
//             "xrp": 12.14895,
//             "yfi": 61.59208,
//             "zar": -41.53854,
//             "bits": 0.03301,
//             "link": 76.68065,
//             "sats": 0.03301
//         },
//         "price_change_percentage_1y_in_currency": {
//             "aed": -42.01535,
//             "ars": -20.41805,
//             "aud": -38.00004,
//             "bch": 130.66942,
//             "bdt": -35.25125,
//             "bhd": -42.0192,
//             "bmd": -42.01535,
//             "bnb": -38.06693,
//             "brl": -41.72373,
//             "btc": 0,
//             "cad": -40.22119,
//             "chf": -38.40236,
//             "clp": -31.30264,
//             "cny": -39.36016,
//             "czk": -35.05505,
//             "dkk": -32.49877,
//             "dot": 32.41431,
//             "eos": 93.98479,
//             "eth": -5.67332,
//             "eur": -32.52206,
//             "gbp": -33.24625,
//             "hkd": -41.46105,
//             "huf": -25.12691,
//             "idr": -39.52469,
//             "ils": -39.60327,
//             "inr": -37.92672,
//             "jpy": -28.32992,
//             "krw": -33.89845,
//             "kwd": -40.74062,
//             "lkr": 4.66702,
//             "ltc": 35.69492,
//             "mmk": -34.74726,
//             "mxn": -40.86492,
//             "myr": -38.77414,
//             "ngn": -41.12868,
//             "nok": -35.70602,
//             "nzd": -34.56636,
//             "php": -35.26258,
//             "pkr": -20.27516,
//             "pln": -30.08583,
//             "rub": -52.0649,
//             "sar": -41.90087,
//             "sek": -31.29467,
//             "sgd": -40.71951,
//             "thb": -37.44015,
//             "try": 22.62926,
//             "twd": -37.26592,
//             "uah": -20.44491,
//             "usd": -42.01535,
//             "vef": -42.01535,
//             "vnd": -40.98371,
//             "xag": -25.94641,
//             "xau": -40.76516,
//             "xdr": -39.16942,
//             "xlm": 39.48699,
//             "xrp": 14.15637,
//             "yfi": 72.3941,
//             "zar": -32.25304,
//             "bits": 0.0298,
//             "link": 81.03785,
//             "sats": 0.0298
//         },
//         "market_cap_change_24h_in_currency": {
//             "aed": 11055560204,
//             "ars": 520099327174,
//             "aud": 10178862621,
//             "bch": -3836313.858414173,
//             "bdt": 229530323668,
//             "bhd": 1113196722,
//             "bmd": 3009953772,
//             "bnb": -31085752.859199762,
//             "brl": 9891365888,
//             "btc": 944,
//             "cad": 7504208094,
//             "chf": 5805554894,
//             "clp": 10680621307328,
//             "cny": 26084409231,
//             "czk": 80188569377,
//             "dkk": 36987736708,
//             "dot": -1380125792.3513641,
//             "eos": -9742237358.12378,
//             "eth": -8576413.454511821,
//             "eur": 5110912472,
//             "gbp": 4884391308,
//             "hkd": 23666881816,
//             "huf": 1430105618314,
//             "idr": 68172793385783,
//             "ils": 10663672198,
//             "inr": 363657704787,
//             "jpy": 1273440514696,
//             "krw": 3757931828674,
//             "kwd": 945103930,
//             "lkr": 933689098331,
//             "ltc": -141997114.929574,
//             "mmk": 4894469531709,
//             "mxn": 92576959390,
//             "myr": 13418373915,
//             "ngn": 1423077173692,
//             "nok": 58212183438,
//             "nzd": 11083765928,
//             "php": 220190366463,
//             "pkr": 603158182161,
//             "pln": 17092553036,
//             "rub": -178678835684.85156,
//             "sar": 11399286759,
//             "sek": 61464997563,
//             "sgd": 6266045458,
//             "thb": 70116142153,
//             "try": 52743270282,
//             "twd": 104096338073,
//             "uah": 178864525232,
//             "usd": 3009953772,
//             "vef": 301386671,
//             "vnd": 68014384322560,
//             "xag": 430535878,
//             "xau": 3731509,
//             "xdr": 2178957432,
//             "xlm": -38423713182.82422,
//             "xrp": 348672070,
//             "yfi": -1223582.6897089928,
//             "zar": 101815543738,
//             "bits": -10521760963.734375,
//             "link": -2767668425.560753,
//             "sats": -1052176096373.25
//         },
//         "market_cap_change_percentage_24h_in_currency": {
//             "aed": 0.68815,
//             "ars": 0.89647,
//             "aud": 1.62023,
//             "bch": -0.11986,
//             "bdt": 0.55323,
//             "bhd": 0.67507,
//             "bmd": 0.68815,
//             "bnb": -2.16641,
//             "brl": 0.43342,
//             "btc": 0.00494,
//             "cad": 1.33469,
//             "chf": 1.38658,
//             "clp": 2.71288,
//             "cny": 0.88358,
//             "czk": 0.76115,
//             "dkk": 1.16055,
//             "dot": -2.56453,
//             "eos": -2.64633,
//             "eth": -3.16215,
//             "eur": 1.19355,
//             "gbp": 1.35521,
//             "hkd": 0.68929,
//             "huf": 0.84515,
//             "idr": 1.04587,
//             "ils": 0.72878,
//             "inr": 1.05028,
//             "jpy": 2.18304,
//             "krw": 0.658,
//             "kwd": 0.70457,
//             "lkr": 0.59213,
//             "ltc": -1.93128,
//             "mmk": 0.60352,
//             "mxn": 1.04104,
//             "myr": 0.68815,
//             "ngn": 0.77986,
//             "nok": 1.36504,
//             "nzd": 1.59457,
//             "php": 0.90665,
//             "pkr": 0.61406,
//             "pln": 0.84468,
//             "rub": -0.66586,
//             "sar": 0.69362,
//             "sek": 1.38641,
//             "sgd": 1.03994,
//             "thb": 0.4468,
//             "try": 0.67179,
//             "twd": 0.79396,
//             "uah": 1.11124,
//             "usd": 0.68815,
//             "vef": 0.68815,
//             "vnd": 0.6646,
//             "xag": 1.98044,
//             "xau": 1.52519,
//             "xdr": 0.67788,
//             "xlm": -1.00705,
//             "xrp": 0.02942,
//             "yfi": -2.99526,
//             "zar": 1.39553,
//             "bits": -0.05504,
//             "link": -4.64731,
//             "sats": -0.05504
//         },
//         "total_supply": 21000000,
//         "max_supply": 21000000,
//         "circulating_supply": 19113131,
//         "last_updated": "2022-08-05T16:06:26.255Z"
//     },
//     "community_data": {
//         "facebook_likes": null,
//         "twitter_followers": 5443690,
//         "reddit_average_posts_48h": 6.6,
//         "reddit_average_comments_48h": 469,
//         "reddit_subscribers": 4457908,
//         "reddit_accounts_active_48h": 10605,
//         "telegram_channel_user_count": null
//     },
//     "developer_data": {
//         "forks": 32792,
//         "stars": 65519,
//         "subscribers": 3922,
//         "total_issues": 7000,
//         "closed_issues": 6430,
//         "pull_requests_merged": 10000,
//         "pull_request_contributors": 799,
//         "code_additions_deletions_4_weeks": {
//             "additions": 1729,
//             "deletions": -1430
//         },
//         "commit_count_4_weeks": 303,
//         "last_4_weeks_commit_activity_series": [
//             1,
//             7,
//             8,
//             8,
//             9,
//             2,
//             8,
//             0,
//             2,
//             11,
//             4,
//             11,
//             0,
//             2,
//             1,
//             11,
//             5,
//             2,
//             0,
//             3,
//             1,
//             0,
//             1,
//             2,
//             1,
//             0,
//             0,
//             0
//         ]
//     },
//     "public_interest_stats": {
//         "alexa_rank": 9440,
//         "bing_matches": null
//     },
//     "status_updates": [],
//     "last_updated": "2022-08-05T16:06:26.255Z",
//     "tickers": [
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Binance",
//                 "identifier": "binance",
//                 "has_trading_incentive": false
//             },
//             "last": 23042.38,
//             "volume": 176768.10085062537,
//             "converted_last": {
//                 "btc": 1.000208,
//                 "eth": 13.746013,
//                 "usd": 23061
//             },
//             "converted_volume": {
//                 "btc": 176805,
//                 "eth": 2429857,
//                 "usd": 4076461885
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.018421,
//             "timestamp": "2022-08-05T15:55:46+00:00",
//             "last_traded_at": "2022-08-05T15:55:46+00:00",
//             "last_fetch_at": "2022-08-05T15:55:46+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.com/en/trade/BTC_USDT?ref=37754157",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Digifinex",
//                 "identifier": "digifinex",
//                 "has_trading_incentive": false
//             },
//             "last": 23028.78,
//             "volume": 27252.95025776,
//             "converted_last": {
//                 "btc": 1.001132,
//                 "eth": 13.775415,
//                 "usd": 23077
//             },
//             "converted_volume": {
//                 "btc": 27284,
//                 "eth": 375421,
//                 "usd": 628910137
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016279,
//             "timestamp": "2022-08-05T16:06:07+00:00",
//             "last_traded_at": "2022-08-05T16:06:07+00:00",
//             "last_fetch_at": "2022-08-05T16:06:07+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.digifinex.com/en-ww/trade/USDT/BTC",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Currency.com",
//                 "identifier": "currency",
//                 "has_trading_incentive": false
//             },
//             "last": 23022.8,
//             "volume": 9807.8678,
//             "converted_last": {
//                 "btc": 0.99897082,
//                 "eth": 13.744643,
//                 "usd": 23023
//             },
//             "converted_volume": {
//                 "btc": 9798,
//                 "eth": 134806,
//                 "usd": 225804579
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010434,
//             "timestamp": "2022-08-05T16:04:43+00:00",
//             "last_traded_at": "2022-08-05T16:04:43+00:00",
//             "last_fetch_at": "2022-08-05T16:04:43+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://exchange.currency.com/btc-to-usd",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Dcoin",
//                 "identifier": "dcoin",
//                 "has_trading_incentive": false
//             },
//             "last": 23001.38,
//             "volume": 7804,
//             "converted_last": {
//                 "btc": 0.9991473,
//                 "eth": 13.740331,
//                 "usd": 23028
//             },
//             "converted_volume": {
//                 "btc": 7797,
//                 "eth": 107230,
//                 "usd": 179708169
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.047505,
//             "timestamp": "2022-08-05T16:03:28+00:00",
//             "last_traded_at": "2022-08-05T16:03:28+00:00",
//             "last_fetch_at": "2022-08-05T16:03:28+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.dcoin.com/currencyTrading/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "BUSD",
//             "market": {
//                 "name": "Binance",
//                 "identifier": "binance",
//                 "has_trading_incentive": false
//             },
//             "last": 22993.56,
//             "volume": 54417.81524728734,
//             "converted_last": {
//                 "btc": 0.99916611,
//                 "eth": 13.723591,
//                 "usd": 22985
//             },
//             "converted_volume": {
//                 "btc": 54372,
//                 "eth": 746808,
//                 "usd": 1250789704
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.018607,
//             "timestamp": "2022-08-05T15:43:56+00:00",
//             "last_traded_at": "2022-08-05T15:43:56+00:00",
//             "last_fetch_at": "2022-08-05T15:43:56+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.com/en/trade/BTC_BUSD?ref=37754157",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "binance-usd"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "WhiteBIT",
//                 "identifier": "whitebit",
//                 "has_trading_incentive": false
//             },
//             "last": 23004.84,
//             "volume": 12010.444602,
//             "converted_last": {
//                 "btc": 0.9992976,
//                 "eth": 13.742398,
//                 "usd": 23031
//             },
//             "converted_volume": {
//                 "btc": 12002,
//                 "eth": 165052,
//                 "usd": 276614515
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.015036,
//             "timestamp": "2022-08-05T16:03:36+00:00",
//             "last_traded_at": "2022-08-05T16:03:36+00:00",
//             "last_fetch_at": "2022-08-05T16:03:36+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://whitebit.com/trade/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "XT.COM",
//                 "identifier": "xt",
//                 "has_trading_incentive": false
//             },
//             "last": 23019.97,
//             "volume": 81905.317633,
//             "converted_last": {
//                 "btc": 1.000749,
//                 "eth": 13.769109,
//                 "usd": 23064
//             },
//             "converted_volume": {
//                 "btc": 81967,
//                 "eth": 1127763,
//                 "usd": 1889046375
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.018465,
//             "timestamp": "2022-08-05T16:04:14+00:00",
//             "last_traded_at": "2022-08-05T16:04:14+00:00",
//             "last_fetch_at": "2022-08-05T16:04:14+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.xt.com/trade/btc_usdt",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "OKX",
//                 "identifier": "okex",
//                 "has_trading_incentive": false
//             },
//             "last": 23021.6,
//             "volume": 26603.36862723,
//             "converted_last": {
//                 "btc": 1.00082,
//                 "eth": 13.770084,
//                 "usd": 23065
//             },
//             "converted_volume": {
//                 "btc": 26540,
//                 "eth": 365163,
//                 "usd": 611662575
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010434,
//             "timestamp": "2022-08-05T16:04:44+00:00",
//             "last_traded_at": "2022-08-05T16:04:44+00:00",
//             "last_fetch_at": "2022-08-05T16:04:44+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.okex.com/trade-spot/btc-usdt",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Bitfinex",
//                 "identifier": "bitfinex",
//                 "has_trading_incentive": false
//             },
//             "last": 23009,
//             "volume": 7587.55677736,
//             "converted_last": {
//                 "btc": 0.99833533,
//                 "eth": 13.726146,
//                 "usd": 23009
//             },
//             "converted_volume": {
//                 "btc": 7575,
//                 "eth": 104148,
//                 "usd": 174582094
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.043478,
//             "timestamp": "2022-08-05T16:03:00+00:00",
//             "last_traded_at": "2022-08-05T16:03:00+00:00",
//             "last_fetch_at": "2022-08-05T16:03:00+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitfinex.com/t/BTCUSD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "WhiteBIT",
//                 "identifier": "whitebit",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072655,
//             "volume": 24250.726,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.752057,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 1762,
//                 "eth": 24230,
//                 "usd": 40607971
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016885,
//             "timestamp": "2022-08-05T16:03:36+00:00",
//             "last_traded_at": "2022-08-05T16:03:36+00:00",
//             "last_fetch_at": "2022-08-05T16:03:36+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://whitebit.com/trade/ETH_BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Bitfinex",
//                 "identifier": "bitfinex",
//                 "has_trading_incentive": false
//             },
//             "last": 22620,
//             "volume": 1423.95735482,
//             "converted_last": {
//                 "btc": 0.99806038,
//                 "eth": 13.725383,
//                 "usd": 23003
//             },
//             "converted_volume": {
//                 "btc": 1421,
//                 "eth": 19544,
//                 "usd": 32754791
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.044189,
//             "timestamp": "2022-08-05T16:03:00+00:00",
//             "last_traded_at": "2022-08-05T16:03:00+00:00",
//             "last_fetch_at": "2022-08-05T16:03:00+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitfinex.com/t/BTCEUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "FTX.US",
//                 "identifier": "ftx_us",
//                 "has_trading_incentive": false
//             },
//             "last": 23040,
//             "volume": 2116.220612152778,
//             "converted_last": {
//                 "btc": 0.99971575,
//                 "eth": 13.755927,
//                 "usd": 23040
//             },
//             "converted_volume": {
//                 "btc": 2116,
//                 "eth": 29111,
//                 "usd": 48757723
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.014341,
//             "timestamp": "2022-08-05T16:05:50+00:00",
//             "last_traded_at": "2022-08-05T16:05:50+00:00",
//             "last_fetch_at": "2022-08-05T16:05:50+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.us/trade/BTC/USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "JPY",
//             "market": {
//                 "name": "Bitfinex",
//                 "identifier": "bitfinex",
//                 "has_trading_incentive": false
//             },
//             "last": 3111699.99999994,
//             "volume": 675.6456876,
//             "converted_last": {
//                 "btc": 0.99781577,
//                 "eth": 13.722019,
//                 "usd": 22997
//             },
//             "converted_volume": {
//                 "btc": 674.17,
//                 "eth": 9271,
//                 "usd": 15537832
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.032123,
//             "timestamp": "2022-08-05T16:03:01+00:00",
//             "last_traded_at": "2022-08-05T16:03:01+00:00",
//             "last_fetch_at": "2022-08-05T16:03:01+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitfinex.com/t/BTCJPY",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "GBP",
//             "market": {
//                 "name": "Bitfinex",
//                 "identifier": "bitfinex",
//                 "has_trading_incentive": false
//             },
//             "last": 19074,
//             "volume": 731.1921959,
//             "converted_last": {
//                 "btc": 0.99814384,
//                 "eth": 13.723513,
//                 "usd": 23005
//             },
//             "converted_volume": {
//                 "btc": 729.835,
//                 "eth": 10035,
//                 "usd": 16820774
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.104822,
//             "timestamp": "2022-08-05T16:02:59+00:00",
//             "last_traded_at": "2022-08-05T16:02:59+00:00",
//             "last_fetch_at": "2022-08-05T16:02:59+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitfinex.com/t/BTCGBP",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Coinbase Exchange",
//                 "identifier": "gdax",
//                 "has_trading_incentive": false
//             },
//             "last": 23038.98,
//             "volume": 24315.50296211,
//             "converted_last": {
//                 "btc": 0.99949249,
//                 "eth": 13.752855,
//                 "usd": 23039
//             },
//             "converted_volume": {
//                 "btc": 24303,
//                 "eth": 334408,
//                 "usd": 560204386
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.014106,
//             "timestamp": "2022-08-05T16:05:36+00:00",
//             "last_traded_at": "2022-08-05T16:05:36+00:00",
//             "last_fetch_at": "2022-08-05T16:06:16+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://pro.coinbase.com/trade/BTC-USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "FTX.US",
//                 "identifier": "ftx_us",
//                 "has_trading_incentive": false
//             },
//             "last": 23038,
//             "volume": 380.6480423257227,
//             "converted_last": {
//                 "btc": 1.001533,
//                 "eth": 13.78093,
//                 "usd": 23082
//             },
//             "converted_volume": {
//                 "btc": 381.232,
//                 "eth": 5246,
//                 "usd": 8786072
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.018681,
//             "timestamp": "2022-08-05T16:05:50+00:00",
//             "last_traded_at": "2022-08-05T16:05:50+00:00",
//             "last_fetch_at": "2022-08-05T16:05:50+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.us/trade/BTC/USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "WhiteBIT",
//                 "identifier": "whitebit",
//                 "has_trading_incentive": false
//             },
//             "last": 23002.69,
//             "volume": 276.616726,
//             "converted_last": {
//                 "btc": 0.99806216,
//                 "eth": 13.725408,
//                 "usd": 23003
//             },
//             "converted_volume": {
//                 "btc": 276.081,
//                 "eth": 3797,
//                 "usd": 6362929
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.035071,
//             "timestamp": "2022-08-05T16:03:36+00:00",
//             "last_traded_at": "2022-08-05T16:03:36+00:00",
//             "last_fetch_at": "2022-08-05T16:03:36+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://whitebit.com/trade/BTC_USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "WBTC",
//             "target": "BTC",
//             "market": {
//                 "name": "Binance",
//                 "identifier": "binance",
//                 "has_trading_incentive": false
//             },
//             "last": 1.0005,
//             "volume": 500.84958150924535,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.742202,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 501.1,
//                 "eth": 6886,
//                 "usd": 11551086
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.019994,
//             "timestamp": "2022-08-05T15:59:05+00:00",
//             "last_traded_at": "2022-08-05T15:59:05+00:00",
//             "last_fetch_at": "2022-08-05T15:59:05+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.com/en/trade/WBTC_BTC?ref=37754157",
//             "token_info_url": null,
//             "coin_id": "wrapped-bitcoin",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "WOO Network",
//                 "identifier": "wootrade",
//                 "has_trading_incentive": false
//             },
//             "last": 23018.89,
//             "volume": 2713.42960306,
//             "converted_last": {
//                 "btc": 1.000702,
//                 "eth": 13.769499,
//                 "usd": 23063
//             },
//             "converted_volume": {
//                 "btc": 2715,
//                 "eth": 37363,
//                 "usd": 62579099
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016495,
//             "timestamp": "2022-08-05T16:05:19+00:00",
//             "last_traded_at": "2022-08-05T16:05:19+00:00",
//             "last_fetch_at": "2022-08-05T16:05:19+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://x.woo.network/spot",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Bitforex",
//                 "identifier": "bitforex",
//                 "has_trading_incentive": false
//             },
//             "last": 23029.94,
//             "volume": 1962.1956,
//             "converted_last": {
//                 "btc": 1.001182,
//                 "eth": 13.776109,
//                 "usd": 23078
//             },
//             "converted_volume": {
//                 "btc": 1965,
//                 "eth": 27031,
//                 "usd": 45283423
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016058,
//             "timestamp": "2022-08-05T16:06:06+00:00",
//             "last_traded_at": "2022-08-05T16:06:06+00:00",
//             "last_fetch_at": "2022-08-05T16:06:06+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitforex.com/en/spot/btc_usdt",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "FTX",
//                 "identifier": "ftx_spot",
//                 "has_trading_incentive": false
//             },
//             "last": 23004,
//             "volume": 29967.559404447053,
//             "converted_last": {
//                 "btc": 0.99811839,
//                 "eth": 13.723163,
//                 "usd": 23004
//             },
//             "converted_volume": {
//                 "btc": 29911,
//                 "eth": 411250,
//                 "usd": 689373737
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.014347,
//             "timestamp": "2022-08-05T16:02:45+00:00",
//             "last_traded_at": "2022-08-05T16:02:45+00:00",
//             "last_fetch_at": "2022-08-05T16:02:45+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.com/trade/BTC/USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "BingX",
//                 "identifier": "bingx",
//                 "has_trading_incentive": false
//             },
//             "last": 23034.77,
//             "volume": 8590.406877,
//             "converted_last": {
//                 "btc": 1.001392,
//                 "eth": 13.778998,
//                 "usd": 23083
//             },
//             "converted_volume": {
//                 "btc": 8584,
//                 "eth": 118108,
//                 "usd": 197855642
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.012779,
//             "timestamp": "2022-08-05T16:06:25+00:00",
//             "last_traded_at": "2022-08-05T16:06:25+00:00",
//             "last_fetch_at": "2022-08-05T16:06:25+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://bingx.com/en-us/spot/BTCUSDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "LTC",
//             "target": "BTC",
//             "market": {
//                 "name": "Digifinex",
//                 "identifier": "digifinex",
//                 "has_trading_incentive": false
//             },
//             "last": 0.002649,
//             "volume": 20422.951,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 54.1,
//                 "eth": 744.413,
//                 "usd": 1247051
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.264051,
//             "timestamp": "2022-08-05T16:06:07+00:00",
//             "last_traded_at": "2022-08-05T16:06:07+00:00",
//             "last_fetch_at": "2022-08-05T16:06:07+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.digifinex.com/en-ww/trade/BTC/LTC",
//             "token_info_url": null,
//             "coin_id": "litecoin",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "Bitforex",
//                 "identifier": "bitforex",
//                 "has_trading_incentive": false
//             },
//             "last": 23042.08,
//             "volume": 1479.7254,
//             "converted_last": {
//                 "btc": 1.001489,
//                 "eth": 13.780327,
//                 "usd": 23085
//             },
//             "converted_volume": {
//                 "btc": 1482,
//                 "eth": 20391,
//                 "usd": 34159464
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.022435,
//             "timestamp": "2022-08-05T16:06:06+00:00",
//             "last_traded_at": "2022-08-05T16:06:06+00:00",
//             "last_fetch_at": "2022-08-05T16:06:06+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitforex.com/en/spot/btc_usdc",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "HitBTC",
//                 "identifier": "hitbtc",
//                 "has_trading_incentive": false
//             },
//             "last": 23013.63671,
//             "volume": 1442.20095,
//             "converted_last": {
//                 "btc": 1.000368,
//                 "eth": 13.757118,
//                 "usd": 23056
//             },
//             "converted_volume": {
//                 "btc": 1443,
//                 "eth": 19841,
//                 "usd": 33251146
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.026764,
//             "timestamp": "2022-08-05T16:03:51+00:00",
//             "last_traded_at": "2022-08-05T16:03:51+00:00",
//             "last_fetch_at": "2022-08-05T16:03:51+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://hitbtc.com/BTC-to-USDC",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "LTC",
//             "target": "BTC",
//             "market": {
//                 "name": "OKX",
//                 "identifier": "okex",
//                 "has_trading_incentive": false
//             },
//             "last": 0.002647,
//             "volume": 67719.660878,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.758803,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 179.985,
//                 "eth": 2476,
//                 "usd": 4148020
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.075529,
//             "timestamp": "2022-08-05T16:04:47+00:00",
//             "last_traded_at": "2022-08-05T16:04:47+00:00",
//             "last_fetch_at": "2022-08-05T16:04:47+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.okex.com/trade-spot/ltc-btc",
//             "token_info_url": null,
//             "coin_id": "litecoin",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Bitstamp",
//                 "identifier": "bitstamp",
//                 "has_trading_incentive": false
//             },
//             "last": 23017.64,
//             "volume": 2053.94821031,
//             "converted_last": {
//                 "btc": 1.000346,
//                 "eth": 13.751873,
//                 "usd": 23018
//             },
//             "converted_volume": {
//                 "btc": 2055,
//                 "eth": 28246,
//                 "usd": 47277040
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.050363,
//             "timestamp": "2022-08-05T15:49:16+00:00",
//             "last_traded_at": "2022-08-05T15:49:16+00:00",
//             "last_fetch_at": "2022-08-05T15:49:16+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Crypto.com Exchange",
//                 "identifier": "crypto_com",
//                 "has_trading_incentive": false
//             },
//             "last": 23023.31,
//             "volume": 10711.702267,
//             "converted_last": {
//                 "btc": 1.000894,
//                 "eth": 13.772143,
//                 "usd": 23067
//             },
//             "converted_volume": {
//                 "btc": 10721,
//                 "eth": 147523,
//                 "usd": 247088553
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.012952,
//             "timestamp": "2022-08-05T16:05:55+00:00",
//             "last_traded_at": "2022-08-05T16:05:55+00:00",
//             "last_fetch_at": "2022-08-05T16:05:55+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://crypto.com/exchange/trade/spot/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Kraken",
//                 "identifier": "kraken",
//                 "has_trading_incentive": false
//             },
//             "last": 23027.6,
//             "volume": 5152.26048288,
//             "converted_last": {
//                 "btc": 0.99917909,
//                 "eth": 13.747508,
//                 "usd": 23028
//             },
//             "converted_volume": {
//                 "btc": 5148,
//                 "eth": 70831,
//                 "usd": 118644193
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.014777,
//             "timestamp": "2022-08-05T16:04:39+00:00",
//             "last_traded_at": "2022-08-05T16:04:39+00:00",
//             "last_fetch_at": "2022-08-05T16:04:39+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://trade.kraken.com/markets/kraken/btc/usd",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Dcoin",
//                 "identifier": "dcoin",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072656,
//             "volume": 55911,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.752057,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 4062,
//                 "eth": 55865,
//                 "usd": 93624558
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.050928,
//             "timestamp": "2022-08-05T16:03:28+00:00",
//             "last_traded_at": "2022-08-05T16:03:28+00:00",
//             "last_fetch_at": "2022-08-05T16:03:28+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.dcoin.com/currencyTrading/ETH_BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "AAX",
//                 "identifier": "aax",
//                 "has_trading_incentive": false
//             },
//             "last": 23021.24,
//             "volume": 37063.94782101668,
//             "converted_last": {
//                 "btc": 1.000804,
//                 "eth": 13.769868,
//                 "usd": 23065
//             },
//             "converted_volume": {
//                 "btc": 37094,
//                 "eth": 510366,
//                 "usd": 854881966
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016823,
//             "timestamp": "2022-08-05T16:04:40+00:00",
//             "last_traded_at": "2022-08-05T16:04:40+00:00",
//             "last_fetch_at": "2022-08-05T16:04:40+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.aax.com/spot/trade/BTC:USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "FTX",
//                 "identifier": "ftx_spot",
//                 "has_trading_incentive": false
//             },
//             "last": 23006,
//             "volume": 2821.9070652612363,
//             "converted_last": {
//                 "btc": 0.99934799,
//                 "eth": 13.740069,
//                 "usd": 23032
//             },
//             "converted_volume": {
//                 "btc": 2820,
//                 "eth": 38773,
//                 "usd": 64995120
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.014346,
//             "timestamp": "2022-08-05T16:02:47+00:00",
//             "last_traded_at": "2022-08-05T16:02:47+00:00",
//             "last_fetch_at": "2022-08-05T16:02:47+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.com/trade/BTC/USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "HitBTC",
//                 "identifier": "hitbtc",
//                 "has_trading_incentive": false
//             },
//             "last": 23010.92,
//             "volume": 34918.46651,
//             "converted_last": {
//                 "btc": 1.000356,
//                 "eth": 13.763696,
//                 "usd": 23055
//             },
//             "converted_volume": {
//                 "btc": 34931,
//                 "eth": 480607,
//                 "usd": 805035279
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010209,
//             "timestamp": "2022-08-05T16:04:04+00:00",
//             "last_traded_at": "2022-08-05T16:04:04+00:00",
//             "last_fetch_at": "2022-08-05T16:04:04+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://hitbtc.com/BTC-to-USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "WhiteBIT",
//                 "identifier": "whitebit",
//                 "has_trading_incentive": false
//             },
//             "last": 22621.62,
//             "volume": 42.03208265,
//             "converted_last": {
//                 "btc": 0.99813186,
//                 "eth": 13.726366,
//                 "usd": 23004
//             },
//             "converted_volume": {
//                 "btc": 41.953561,
//                 "eth": 576.948,
//                 "usd": 966918
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.011712,
//             "timestamp": "2022-08-05T16:03:36+00:00",
//             "last_traded_at": "2022-08-05T16:03:36+00:00",
//             "last_fetch_at": "2022-08-05T16:03:36+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://whitebit.com/trade/BTC_EUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Kraken",
//                 "identifier": "kraken",
//                 "has_trading_incentive": false
//             },
//             "last": 22634.2,
//             "volume": 1423.08511754,
//             "converted_last": {
//                 "btc": 0.99872303,
//                 "eth": 13.741233,
//                 "usd": 23017
//             },
//             "converted_volume": {
//                 "btc": 1421,
//                 "eth": 19555,
//                 "usd": 32755277
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010442,
//             "timestamp": "2022-08-05T16:04:39+00:00",
//             "last_traded_at": "2022-08-05T16:04:39+00:00",
//             "last_fetch_at": "2022-08-05T16:04:39+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://trade.kraken.com/markets/kraken/btc/eur",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Bitstamp",
//                 "identifier": "bitstamp",
//                 "has_trading_incentive": false
//             },
//             "last": 22642.58,
//             "volume": 627.36194517,
//             "converted_last": {
//                 "btc": 1.000043,
//                 "eth": 13.747701,
//                 "usd": 23011
//             },
//             "converted_volume": {
//                 "btc": 627.389,
//                 "eth": 8625,
//                 "usd": 14436011
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.067198,
//             "timestamp": "2022-08-05T15:49:16+00:00",
//             "last_traded_at": "2022-08-05T15:49:16+00:00",
//             "last_fetch_at": "2022-08-05T15:49:16+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "BKEX",
//                 "identifier": "bkex",
//                 "has_trading_incentive": false
//             },
//             "last": 23006.63,
//             "volume": 33289.6674,
//             "converted_last": {
//                 "btc": 0.99937535,
//                 "eth": 13.743467,
//                 "usd": 23033
//             },
//             "converted_volume": {
//                 "btc": 33269,
//                 "eth": 457515,
//                 "usd": 766759435
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016431,
//             "timestamp": "2022-08-05T16:03:26+00:00",
//             "last_traded_at": "2022-08-05T16:03:26+00:00",
//             "last_fetch_at": "2022-08-05T16:03:26+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bkex.com/#/trade/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "B2BX",
//                 "identifier": "b2bx",
//                 "has_trading_incentive": false
//             },
//             "last": 23008.1701542,
//             "volume": 144.21073062,
//             "converted_last": {
//                 "btc": 0.99833602,
//                 "eth": 13.735909,
//                 "usd": 23008
//             },
//             "converted_volume": {
//                 "btc": 143.971,
//                 "eth": 1981,
//                 "usd": 3318025
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.011341,
//             "timestamp": "2022-08-05T16:04:54+00:00",
//             "last_traded_at": "2022-08-05T16:04:54+00:00",
//             "last_fetch_at": "2022-08-05T16:04:54+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://advanced.b2bx.exchange/?symbol=BTCUSD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "BTSE",
//                 "identifier": "btse",
//                 "has_trading_incentive": false
//             },
//             "last": 23019,
//             "volume": 4793.566626609102,
//             "converted_last": {
//                 "btc": 0.99880594,
//                 "eth": 13.742374,
//                 "usd": 23019
//             },
//             "converted_volume": {
//                 "btc": 4788,
//                 "eth": 65875,
//                 "usd": 110343110
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.026044,
//             "timestamp": "2022-08-05T16:04:19+00:00",
//             "last_traded_at": "2022-08-05T16:04:19+00:00",
//             "last_fetch_at": "2022-08-05T16:04:19+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.btse.com/en/trading/BTC-USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "BigONE",
//                 "identifier": "bigone",
//                 "has_trading_incentive": false
//             },
//             "last": 23006.19,
//             "volume": 34505.140786,
//             "converted_last": {
//                 "btc": 0.99935624,
//                 "eth": 13.743204,
//                 "usd": 23033
//             },
//             "converted_volume": {
//                 "btc": 34483,
//                 "eth": 474211,
//                 "usd": 794740180
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.022816,
//             "timestamp": "2022-08-05T16:03:05+00:00",
//             "last_traded_at": "2022-08-05T16:03:05+00:00",
//             "last_fetch_at": "2022-08-05T16:03:05+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://big.one/trade/BTC-USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Coinsbit",
//                 "identifier": "coinsbit",
//                 "has_trading_incentive": false
//             },
//             "last": 23007.66099895,
//             "volume": 30038.55761206,
//             "converted_last": {
//                 "btc": 1.000214,
//                 "eth": 13.762782,
//                 "usd": 23056
//             },
//             "converted_volume": {
//                 "btc": 30045,
//                 "eth": 413414,
//                 "usd": 692557258
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.040077,
//             "timestamp": "2022-08-05T16:06:09+00:00",
//             "last_traded_at": "2022-08-05T16:06:09+00:00",
//             "last_fetch_at": "2022-08-05T16:06:09+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://coinsbit.io/trade/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Digifinex",
//                 "identifier": "digifinex",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07269,
//             "volume": 18476.5347,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 1343,
//                 "eth": 18480,
//                 "usd": 30958428
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.019631,
//             "timestamp": "2022-08-05T16:06:07+00:00",
//             "last_traded_at": "2022-08-05T16:06:07+00:00",
//             "last_fetch_at": "2022-08-05T16:06:07+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.digifinex.com/en-ww/trade/BTC/ETH",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Binance US",
//                 "identifier": "binance_us",
//                 "has_trading_incentive": false
//             },
//             "last": 23022.3,
//             "volume": 6622.777575342168,
//             "converted_last": {
//                 "btc": 0.99894912,
//                 "eth": 13.744344,
//                 "usd": 23022
//             },
//             "converted_volume": {
//                 "btc": 6616,
//                 "eth": 91026,
//                 "usd": 152471572
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.027175,
//             "timestamp": "2022-08-05T16:04:30+00:00",
//             "last_traded_at": "2022-08-05T16:04:30+00:00",
//             "last_fetch_at": "2022-08-05T16:04:30+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.us/en/trade/BTC_USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Cryptology",
//                 "identifier": "cryptology",
//                 "has_trading_incentive": false
//             },
//             "last": 23020.34,
//             "volume": 146.29246752529812,
//             "converted_last": {
//                 "btc": 0.99868384,
//                 "eth": 13.741728,
//                 "usd": 23020
//             },
//             "converted_volume": {
//                 "btc": 146.1,
//                 "eth": 2010,
//                 "usd": 3367702
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.040459,
//             "timestamp": "2022-08-05T16:06:09+00:00",
//             "last_traded_at": "2022-08-05T16:06:09+00:00",
//             "last_fetch_at": "2022-08-05T16:06:09+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://cryptology.com/app/next/trading/BTC_USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "Binance",
//                 "identifier": "binance",
//                 "has_trading_incentive": false
//             },
//             "last": 23022.41,
//             "volume": 7478.596224408048,
//             "converted_last": {
//                 "btc": 1.000634,
//                 "eth": 13.768564,
//                 "usd": 23061
//             },
//             "converted_volume": {
//                 "btc": 7483,
//                 "eth": 102970,
//                 "usd": 172465146
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.022362,
//             "timestamp": "2022-08-05T16:05:05+00:00",
//             "last_traded_at": "2022-08-05T16:05:05+00:00",
//             "last_fetch_at": "2022-08-05T16:05:05+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.com/en/trade/BTC_USDC?ref=37754157",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "XBT",
//             "target": "USDT",
//             "market": {
//                 "name": "BitMEX",
//                 "identifier": "bitmex_spot",
//                 "has_trading_incentive": false
//             },
//             "last": 23005,
//             "volume": 153.7392,
//             "converted_last": {
//                 "btc": 1.000098,
//                 "eth": 13.76119,
//                 "usd": 23053
//             },
//             "converted_volume": {
//                 "btc": 153.754,
//                 "eth": 2116,
//                 "usd": 3544141
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.012171,
//             "timestamp": "2022-08-05T16:06:31+00:00",
//             "last_traded_at": "2022-08-05T16:06:31+00:00",
//             "last_fetch_at": "2022-08-05T16:06:31+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitmex.com/spot/XBT_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Binance",
//                 "identifier": "binance",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072711,
//             "volume": 113324.82246936503,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.742502,
//                 "usd": 23002
//             },
//             "converted_volume": {
//                 "btc": 8240,
//                 "eth": 113238,
//                 "usd": 189535111
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.011367,
//             "timestamp": "2022-08-05T15:45:50+00:00",
//             "last_traded_at": "2022-08-05T15:45:50+00:00",
//             "last_fetch_at": "2022-08-05T15:45:50+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.com/en/trade/ETH_BTC?ref=37754157",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Coinbase Exchange",
//                 "identifier": "gdax",
//                 "has_trading_incentive": false
//             },
//             "last": 22643.7,
//             "volume": 633.67905775,
//             "converted_last": {
//                 "btc": 0.99938775,
//                 "eth": 13.751414,
//                 "usd": 23037
//             },
//             "converted_volume": {
//                 "btc": 633.291,
//                 "eth": 8714,
//                 "usd": 14597789
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.02433,
//             "timestamp": "2022-08-05T16:05:34+00:00",
//             "last_traded_at": "2022-08-05T16:05:34+00:00",
//             "last_fetch_at": "2022-08-05T16:06:14+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://pro.coinbase.com/trade/BTC-EUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Binance US",
//                 "identifier": "binance_us",
//                 "has_trading_incentive": false
//             },
//             "last": 23003.7,
//             "volume": 1998.2470309728553,
//             "converted_last": {
//                 "btc": 1.000042,
//                 "eth": 13.759377,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 1998,
//                 "eth": 27495,
//                 "usd": 46054560
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.0303,
//             "timestamp": "2022-08-05T16:04:30+00:00",
//             "last_traded_at": "2022-08-05T16:04:30+00:00",
//             "last_fetch_at": "2022-08-05T16:04:30+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.binance.us/en/trade/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "FTX",
//                 "identifier": "ftx_spot",
//                 "has_trading_incentive": false
//             },
//             "last": 22605,
//             "volume": 23.770249617341296,
//             "converted_last": {
//                 "btc": 0.99739793,
//                 "eth": 13.713258,
//                 "usd": 22987
//             },
//             "converted_volume": {
//                 "btc": 23.708398,
//                 "eth": 325.968,
//                 "usd": 546416
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.137017,
//             "timestamp": "2022-08-05T16:02:53+00:00",
//             "last_traded_at": "2022-08-05T16:02:53+00:00",
//             "last_fetch_at": "2022-08-05T16:02:53+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.com/trade/BTC/EUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "XT.COM",
//                 "identifier": "xt",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07266329,
//             "volume": 31344.3303,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.758803,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 2278,
//                 "eth": 31337,
//                 "usd": 52490341
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.013837,
//             "timestamp": "2022-08-05T16:04:14+00:00",
//             "last_traded_at": "2022-08-05T16:04:14+00:00",
//             "last_fetch_at": "2022-08-05T16:04:14+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.xt.com/trade/eth_btc",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "FTX.US",
//                 "identifier": "ftx_us",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072675,
//             "volume": 512.3681810801513,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 37.236358,
//                 "eth": 512.366,
//                 "usd": 858170
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.048136,
//             "timestamp": "2022-08-05T16:05:50+00:00",
//             "last_traded_at": "2022-08-05T16:05:50+00:00",
//             "last_fetch_at": "2022-08-05T16:05:50+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.us/trade/ETH/BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "WhiteBIT",
//                 "identifier": "whitebit",
//                 "has_trading_incentive": false
//             },
//             "last": 23009,
//             "volume": 1073.646896,
//             "converted_last": {
//                 "btc": 1.000166,
//                 "eth": 13.754347,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 1074,
//                 "eth": 14767,
//                 "usd": 24748838
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.028467,
//             "timestamp": "2022-08-05T16:03:36+00:00",
//             "last_traded_at": "2022-08-05T16:03:36+00:00",
//             "last_fetch_at": "2022-08-05T16:03:36+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://whitebit.com/trade/BTC_USDC",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Txbit",
//                 "identifier": "txbit",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07267199,
//             "volume": 956.3627,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.752057,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 69.501,
//                 "eth": 955.779,
//                 "usd": 1601809
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.011377,
//             "timestamp": "2022-08-05T15:59:46+00:00",
//             "last_traded_at": "2022-08-05T15:59:46+00:00",
//             "last_fetch_at": "2022-08-05T16:03:30+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://txbit.io/Trade/ETH/BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Currency.com",
//                 "identifier": "currency",
//                 "has_trading_incentive": false
//             },
//             "last": 22633.7,
//             "volume": 62.784,
//             "converted_last": {
//                 "btc": 0.99870097,
//                 "eth": 13.74093,
//                 "usd": 23017
//             },
//             "converted_volume": {
//                 "btc": 62.702,
//                 "eth": 862.711,
//                 "usd": 1445073
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010442,
//             "timestamp": "2022-08-05T16:04:43+00:00",
//             "last_traded_at": "2022-08-05T16:04:43+00:00",
//             "last_fetch_at": "2022-08-05T16:04:43+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://exchange.currency.com/btc-to-eur",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "BTCEX",
//                 "identifier": "btcex",
//                 "has_trading_incentive": false
//             },
//             "last": 23022.593,
//             "volume": 5759.86512399,
//             "converted_last": {
//                 "btc": 1.000863,
//                 "eth": 13.771714,
//                 "usd": 23066
//             },
//             "converted_volume": {
//                 "btc": 5737,
//                 "eth": 78940,
//                 "usd": 132217385
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010547,
//             "timestamp": "2022-08-05T16:05:37+00:00",
//             "last_traded_at": "2022-08-05T16:05:37+00:00",
//             "last_fetch_at": "2022-08-05T16:05:37+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.btcex.com/spot?target=BTC-USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Bitget",
//                 "identifier": "bitget",
//                 "has_trading_incentive": false
//             },
//             "last": 23021.74,
//             "volume": 7573.3103,
//             "converted_last": {
//                 "btc": 1.000826,
//                 "eth": 13.770168,
//                 "usd": 23066
//             },
//             "converted_volume": {
//                 "btc": 7546,
//                 "eth": 103820,
//                 "usd": 173903044
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010521,
//             "timestamp": "2022-08-05T16:04:41+00:00",
//             "last_traded_at": "2022-08-05T16:04:41+00:00",
//             "last_fetch_at": "2022-08-05T16:04:41+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitget.com/en/spot/BTCUSDT_SPBL",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Phemex",
//                 "identifier": "phemex",
//                 "has_trading_incentive": false
//             },
//             "last": 23031.96,
//             "volume": 17264.058805,
//             "converted_last": {
//                 "btc": 1.00127,
//                 "eth": 13.777317,
//                 "usd": 23080
//             },
//             "converted_volume": {
//                 "btc": 17286,
//                 "eth": 237852,
//                 "usd": 398453774
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.047277,
//             "timestamp": "2022-08-05T16:06:30+00:00",
//             "last_traded_at": "2022-08-05T16:06:30+00:00",
//             "last_fetch_at": "2022-08-05T16:06:30+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://phemex.com/spot/trade/BTCUSDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Cryptology",
//                 "identifier": "cryptology",
//                 "has_trading_incentive": false
//             },
//             "last": 22621.62,
//             "volume": 56.82201359387142,
//             "converted_last": {
//                 "btc": 0.99841324,
//                 "eth": 13.738005,
//                 "usd": 23014
//             },
//             "converted_volume": {
//                 "btc": 56.732,
//                 "eth": 780.621,
//                 "usd": 1307708
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.060433,
//             "timestamp": "2022-08-05T16:06:09+00:00",
//             "last_traded_at": "2022-08-05T16:06:09+00:00",
//             "last_fetch_at": "2022-08-05T16:06:09+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://cryptology.com/app/next/trading/BTC_EUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Gate.io",
//                 "identifier": "gate",
//                 "has_trading_incentive": false
//             },
//             "last": 23013.88,
//             "volume": 7551.5859666019,
//             "converted_last": {
//                 "btc": 1.000484,
//                 "eth": 13.765466,
//                 "usd": 23058
//             },
//             "converted_volume": {
//                 "btc": 7555,
//                 "eth": 103951,
//                 "usd": 174122054
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010043,
//             "timestamp": "2022-08-05T16:04:56+00:00",
//             "last_traded_at": "2022-08-05T16:04:56+00:00",
//             "last_fetch_at": "2022-08-05T16:04:56+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://gate.io/trade/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "P2PB2B",
//                 "identifier": "p2pb2b",
//                 "has_trading_incentive": false
//             },
//             "last": 23020.16,
//             "volume": 6558.637283,
//             "converted_last": {
//                 "btc": 1.000757,
//                 "eth": 13.770258,
//                 "usd": 23068
//             },
//             "converted_volume": {
//                 "btc": 6564,
//                 "eth": 90314,
//                 "usd": 151295528
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.140656,
//             "timestamp": "2022-08-05T15:47:02+00:00",
//             "last_traded_at": "2022-08-05T15:47:02+00:00",
//             "last_fetch_at": "2022-08-05T16:06:08+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Bitstamp",
//                 "identifier": "bitstamp",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07271117,
//             "volume": 236.88055274,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.747111,
//                 "usd": 23010
//             },
//             "converted_volume": {
//                 "btc": 17.223862,
//                 "eth": 236.778,
//                 "usd": 396315
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.040661,
//             "timestamp": "2022-08-05T15:49:16+00:00",
//             "last_traded_at": "2022-08-05T15:49:16+00:00",
//             "last_fetch_at": "2022-08-05T15:49:16+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Huobi Global",
//                 "identifier": "huobi",
//                 "has_trading_incentive": false
//             },
//             "last": 23010.95,
//             "volume": 10118.485720072393,
//             "converted_last": {
//                 "btc": 1.000357,
//                 "eth": 13.756965,
//                 "usd": 23056
//             },
//             "converted_volume": {
//                 "btc": 10101,
//                 "eth": 138905,
//                 "usd": 232793483
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010043,
//             "timestamp": "2022-08-05T16:03:56+00:00",
//             "last_traded_at": "2022-08-05T16:03:56+00:00",
//             "last_fetch_at": "2022-08-05T16:03:56+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.huobi.com/en-us/exchange/btc_usdt",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Bullish",
//                 "identifier": "bullish_com",
//                 "has_trading_incentive": false
//             },
//             "last": 23034.8105,
//             "volume": 16398.09138897,
//             "converted_last": {
//                 "btc": 0.99931161,
//                 "eth": 13.750366,
//                 "usd": 23035
//             },
//             "converted_volume": {
//                 "btc": 16338,
//                 "eth": 224813,
//                 "usd": 376610468
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.140213,
//             "timestamp": "2022-08-05T16:06:33+00:00",
//             "last_traded_at": "2022-08-05T16:06:33+00:00",
//             "last_fetch_at": "2022-08-05T16:06:33+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://bullish.com/trade/",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "BitMart",
//                 "identifier": "bitmart",
//                 "has_trading_incentive": false
//             },
//             "last": 23033.28,
//             "volume": 13668.42492,
//             "converted_last": {
//                 "btc": 1.001328,
//                 "eth": 13.778107,
//                 "usd": 23077
//             },
//             "converted_volume": {
//                 "btc": 13687,
//                 "eth": 188325,
//                 "usd": 315428282
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010679,
//             "timestamp": "2022-08-05T16:05:21+00:00",
//             "last_traded_at": "2022-08-05T16:05:21+00:00",
//             "last_fetch_at": "2022-08-05T16:05:21+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Coinbase Exchange",
//                 "identifier": "gdax",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07272,
//             "volume": 4875.55143412,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 354.55,
//                 "eth": 4879,
//                 "usd": 8172620
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.041254,
//             "timestamp": "2022-08-05T16:05:36+00:00",
//             "last_traded_at": "2022-08-05T16:05:36+00:00",
//             "last_fetch_at": "2022-08-05T16:06:15+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://pro.coinbase.com/trade/ETH-BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "BingX",
//                 "identifier": "bingx",
//                 "has_trading_incentive": false
//             },
//             "last": 23030.05,
//             "volume": 1059.008874,
//             "converted_last": {
//                 "btc": 1.000966,
//                 "eth": 13.773133,
//                 "usd": 23073
//             },
//             "converted_volume": {
//                 "btc": 1058,
//                 "eth": 14552,
//                 "usd": 24378208
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.026052,
//             "timestamp": "2022-08-05T16:06:28+00:00",
//             "last_traded_at": "2022-08-05T16:06:28+00:00",
//             "last_fetch_at": "2022-08-05T16:06:28+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://bingx.com/en-us/spot/BTCUSDC",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Bitfinex",
//                 "identifier": "bitfinex",
//                 "has_trading_incentive": false
//             },
//             "last": 23003,
//             "volume": 381.48732052,
//             "converted_last": {
//                 "btc": 0.99921767,
//                 "eth": 13.741298,
//                 "usd": 23029
//             },
//             "converted_volume": {
//                 "btc": 381.189,
//                 "eth": 5242,
//                 "usd": 8785394
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.086881,
//             "timestamp": "2022-08-05T16:03:09+00:00",
//             "last_traded_at": "2022-08-05T16:03:09+00:00",
//             "last_fetch_at": "2022-08-05T16:03:09+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitfinex.com/t/BTCUST",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "B2BX",
//                 "identifier": "b2bx",
//                 "has_trading_incentive": false
//             },
//             "last": 22647.9629502,
//             "volume": 189.37176398,
//             "converted_last": {
//                 "btc": 0.99933031,
//                 "eth": 13.749589,
//                 "usd": 23031
//             },
//             "converted_volume": {
//                 "btc": 189.245,
//                 "eth": 2604,
//                 "usd": 4361437
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.021436,
//             "timestamp": "2022-08-05T16:04:54+00:00",
//             "last_traded_at": "2022-08-05T16:04:54+00:00",
//             "last_fetch_at": "2022-08-05T16:04:54+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://advanced.b2bx.exchange/?symbol=BTCEUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Okcoin",
//                 "identifier": "okcoin",
//                 "has_trading_incentive": false
//             },
//             "last": 22995.81,
//             "volume": 945.3162,
//             "converted_last": {
//                 "btc": 0.99776364,
//                 "eth": 13.721302,
//                 "usd": 22996
//             },
//             "converted_volume": {
//                 "btc": 943.202,
//                 "eth": 12971,
//                 "usd": 21738312
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.019907,
//             "timestamp": "2022-08-05T16:03:31+00:00",
//             "last_traded_at": "2022-08-05T16:03:31+00:00",
//             "last_fetch_at": "2022-08-05T16:03:31+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.okcoin.com/market#product=btc_usd",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "WBTC",
//             "target": "BTC",
//             "market": {
//                 "name": "Hotbit",
//                 "identifier": "hotbit",
//                 "has_trading_incentive": false
//             },
//             "last": 0.995259,
//             "volume": 20.593258,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 20.495625,
//                 "eth": 282.016,
//                 "usd": 472353
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.050021,
//             "timestamp": "2022-08-05T16:05:46+00:00",
//             "last_traded_at": "2022-08-05T16:05:46+00:00",
//             "last_fetch_at": "2022-08-05T16:05:46+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.hotbit.io/exchange?symbol=WBTC_BTC",
//             "token_info_url": null,
//             "coin_id": "wrapped-bitcoin",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "BUSD",
//             "market": {
//                 "name": "P2PB2B",
//                 "identifier": "p2pb2b",
//                 "has_trading_incentive": false
//             },
//             "last": 23019.8,
//             "volume": 2011.773975,
//             "converted_last": {
//                 "btc": 1.001141,
//                 "eth": 13.775541,
//                 "usd": 23077
//             },
//             "converted_volume": {
//                 "btc": 2014,
//                 "eth": 27713,
//                 "usd": 46425675
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.159819,
//             "timestamp": "2022-08-05T15:47:02+00:00",
//             "last_traded_at": "2022-08-05T15:47:02+00:00",
//             "last_fetch_at": "2022-08-05T16:06:08+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "binance-usd"
//         },
//         {
//             "base": "BTC",
//             "target": "UAH",
//             "market": {
//                 "name": "WhiteBIT",
//                 "identifier": "whitebit",
//                 "has_trading_incentive": false
//             },
//             "last": 884955.79,
//             "volume": 12.675729,
//             "converted_last": {
//                 "btc": 1.039052,
//                 "eth": 14.289102,
//                 "usd": 23947
//             },
//             "converted_volume": {
//                 "btc": 13.170741,
//                 "eth": 181.125,
//                 "usd": 303551
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.015032,
//             "timestamp": "2022-08-05T16:03:36+00:00",
//             "last_traded_at": "2022-08-05T16:03:36+00:00",
//             "last_fetch_at": "2022-08-05T16:03:36+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://whitebit.com/trade/BTC_UAH",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Kraken",
//                 "identifier": "kraken",
//                 "has_trading_incentive": false
//             },
//             "last": 23028.4,
//             "volume": 297.57952348,
//             "converted_last": {
//                 "btc": 1.001116,
//                 "eth": 13.774151,
//                 "usd": 23072
//             },
//             "converted_volume": {
//                 "btc": 297.911,
//                 "eth": 4099,
//                 "usd": 6865823
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.03083,
//             "timestamp": "2022-08-05T16:04:41+00:00",
//             "last_traded_at": "2022-08-05T16:04:41+00:00",
//             "last_fetch_at": "2022-08-05T16:04:41+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://trade.kraken.com/markets/kraken/btc/usdt",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "BUSD",
//             "market": {
//                 "name": "LBank",
//                 "identifier": "lbank",
//                 "has_trading_incentive": false
//             },
//             "last": 23040.58,
//             "volume": 6999.6931,
//             "converted_last": {
//                 "btc": 1.002045,
//                 "eth": 13.787976,
//                 "usd": 23098
//             },
//             "converted_volume": {
//                 "btc": 7014,
//                 "eth": 96512,
//                 "usd": 161677617
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010043,
//             "timestamp": "2022-08-05T16:06:14+00:00",
//             "last_traded_at": "2022-08-05T16:06:14+00:00",
//             "last_fetch_at": "2022-08-05T16:06:14+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.lbank.info/exchange/btc/busd",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "binance-usd"
//         },
//         {
//             "base": "BTC",
//             "target": "EUR",
//             "market": {
//                 "name": "Bitvavo",
//                 "identifier": "bitvavo",
//                 "has_trading_incentive": false
//             },
//             "last": 22649,
//             "volume": 582.12510963,
//             "converted_last": {
//                 "btc": 0.99937468,
//                 "eth": 13.751234,
//                 "usd": 23032
//             },
//             "converted_volume": {
//                 "btc": 581.761,
//                 "eth": 8005,
//                 "usd": 13407587
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.088281,
//             "timestamp": "2022-08-05T16:05:34+00:00",
//             "last_traded_at": "2022-08-05T16:05:34+00:00",
//             "last_fetch_at": "2022-08-05T16:05:34+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://account.bitvavo.com/markets/BTC-EUR",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Kanga",
//                 "identifier": "kanga",
//                 "has_trading_incentive": false
//             },
//             "last": 23026.502,
//             "volume": 0,
//             "converted_last": {
//                 "btc": 1.001033,
//                 "eth": 13.774052,
//                 "usd": 23074
//             },
//             "converted_volume": {
//                 "btc": 53.774,
//                 "eth": 739.922,
//                 "usd": 1239528
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.321338,
//             "timestamp": "2022-08-05T16:06:34+00:00",
//             "last_traded_at": "2022-08-05T16:06:34+00:00",
//             "last_fetch_at": "2022-08-05T16:06:34+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://trade.kanga.exchange/market/BTC-USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "B2BX",
//                 "identifier": "b2bx",
//                 "has_trading_incentive": false
//             },
//             "last": 23004.2800764,
//             "volume": 115.07851381,
//             "converted_last": {
//                 "btc": 1.000067,
//                 "eth": 13.759724,
//                 "usd": 23048
//             },
//             "converted_volume": {
//                 "btc": 115.086,
//                 "eth": 1583,
//                 "usd": 2652337
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.019037,
//             "timestamp": "2022-08-05T16:04:54+00:00",
//             "last_traded_at": "2022-08-05T16:04:54+00:00",
//             "last_fetch_at": "2022-08-05T16:04:54+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://advanced.b2bx.exchange/?symbol=BTCUSDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BTC",
//             "target": "USD",
//             "market": {
//                 "name": "Coinsbit",
//                 "identifier": "coinsbit",
//                 "has_trading_incentive": false
//             },
//             "last": 23011.84097534,
//             "volume": 12528.90415589,
//             "converted_last": {
//                 "btc": 0.99831513,
//                 "eth": 13.736655,
//                 "usd": 23012
//             },
//             "converted_volume": {
//                 "btc": 12508,
//                 "eth": 172105,
//                 "usd": 288313150
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.041105,
//             "timestamp": "2022-08-05T16:06:09+00:00",
//             "last_traded_at": "2022-08-05T16:06:09+00:00",
//             "last_fetch_at": "2022-08-05T16:06:09+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://coinsbit.io/trade/BTC_USD",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "WOO Network",
//                 "identifier": "wootrade",
//                 "has_trading_incentive": false
//             },
//             "last": 23020,
//             "volume": 12.4799,
//             "converted_last": {
//                 "btc": 1.000529,
//                 "eth": 13.767122,
//                 "usd": 23059
//             },
//             "converted_volume": {
//                 "btc": 12.486507,
//                 "eth": 171.812,
//                 "usd": 287771
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.017363,
//             "timestamp": "2022-08-05T16:05:20+00:00",
//             "last_traded_at": "2022-08-05T16:05:20+00:00",
//             "last_fetch_at": "2022-08-05T16:05:20+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://x.woo.network/spot",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "BTC",
//             "target": "GBP",
//             "market": {
//                 "name": "Bitstamp",
//                 "identifier": "bitstamp",
//                 "has_trading_incentive": false
//             },
//             "last": 19101.23,
//             "volume": 83.7244118,
//             "converted_last": {
//                 "btc": 0.99956879,
//                 "eth": 13.743105,
//                 "usd": 23037
//             },
//             "converted_volume": {
//                 "btc": 83.688,
//                 "eth": 1151,
//                 "usd": 1928795
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.069359,
//             "timestamp": "2022-08-05T16:02:07+00:00",
//             "last_traded_at": "2022-08-05T16:02:07+00:00",
//             "last_fetch_at": "2022-08-05T16:02:07+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "Tidex",
//                 "identifier": "tidex",
//                 "has_trading_incentive": false
//             },
//             "last": 23006.91693002,
//             "volume": 2872.76108473,
//             "converted_last": {
//                 "btc": 0.99888276,
//                 "eth": 13.744465,
//                 "usd": 23025
//             },
//             "converted_volume": {
//                 "btc": 2870,
//                 "eth": 39485,
//                 "usd": 66145109
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.129723,
//             "timestamp": "2022-08-05T16:06:43+00:00",
//             "last_traded_at": "2022-08-05T16:06:43+00:00",
//             "last_fetch_at": "2022-08-05T16:06:43+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": null,
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "BNB",
//             "target": "BTC",
//             "market": {
//                 "name": "HitBTC",
//                 "identifier": "hitbtc",
//                 "has_trading_incentive": false
//             },
//             "last": 0.0135949,
//             "volume": 29236.27,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.758803,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 397.464,
//                 "eth": 5469,
//                 "usd": 9160165
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.030144,
//             "timestamp": "2022-08-05T16:04:04+00:00",
//             "last_traded_at": "2022-08-05T16:04:04+00:00",
//             "last_fetch_at": "2022-08-05T16:04:04+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://hitbtc.com/BNB-to-BTC",
//             "token_info_url": null,
//             "coin_id": "binancecoin",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "GBP",
//             "market": {
//                 "name": "Coinbase Exchange",
//                 "identifier": "gdax",
//                 "has_trading_incentive": false
//             },
//             "last": 19101.7,
//             "volume": 378.90119413,
//             "converted_last": {
//                 "btc": 0.9997319,
//                 "eth": 13.756149,
//                 "usd": 23044
//             },
//             "converted_volume": {
//                 "btc": 378.8,
//                 "eth": 5212,
//                 "usd": 8731588
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.045814,
//             "timestamp": "2022-08-05T16:05:30+00:00",
//             "last_traded_at": "2022-08-05T16:05:30+00:00",
//             "last_fetch_at": "2022-08-05T16:06:10+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://pro.coinbase.com/trade/BTC-GBP",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "KuCoin",
//                 "identifier": "kucoin",
//                 "has_trading_incentive": false
//             },
//             "last": 23005.6,
//             "volume": 9029.32165895,
//             "converted_last": {
//                 "btc": 0.99933061,
//                 "eth": 13.742852,
//                 "usd": 23032
//             },
//             "converted_volume": {
//                 "btc": 9023,
//                 "eth": 124089,
//                 "usd": 207962655
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010435,
//             "timestamp": "2022-08-05T16:03:15+00:00",
//             "last_traded_at": "2022-08-05T16:03:15+00:00",
//             "last_fetch_at": "2022-08-05T16:03:15+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.kucoin.com/trade/BTC-USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Crypto.com Exchange",
//                 "identifier": "crypto_com",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072641,
//             "volume": 3510.25574,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 254.988,
//                 "eth": 3509,
//                 "usd": 5876605
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.01963,
//             "timestamp": "2022-08-05T16:05:55+00:00",
//             "last_traded_at": "2022-08-05T16:05:55+00:00",
//             "last_fetch_at": "2022-08-05T16:05:55+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://crypto.com/exchange/trade/spot/ETH_BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "JPY",
//             "market": {
//                 "name": "GMO Japan",
//                 "identifier": "gmo_japan",
//                 "has_trading_incentive": false
//             },
//             "last": 3112219,
//             "volume": 315.9458,
//             "converted_last": {
//                 "btc": 0.9979822,
//                 "eth": 13.724308,
//                 "usd": 23001
//             },
//             "converted_volume": {
//                 "btc": 315.308,
//                 "eth": 4336,
//                 "usd": 7267021
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.028061,
//             "timestamp": "2022-08-05T16:03:33+00:00",
//             "last_traded_at": "2022-08-05T16:03:33+00:00",
//             "last_fetch_at": "2022-08-05T16:03:33+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://coin.z.com/jp/corp/information/btc-market/",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "XRP",
//             "target": "BTC",
//             "market": {
//                 "name": "HitBTC",
//                 "identifier": "hitbtc",
//                 "has_trading_incentive": false
//             },
//             "last": 0.00001609,
//             "volume": 6673042.4,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.758803,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 107.369,
//                 "eth": 1477,
//                 "usd": 2474488
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.049711,
//             "timestamp": "2022-08-05T16:04:01+00:00",
//             "last_traded_at": "2022-08-05T16:04:01+00:00",
//             "last_fetch_at": "2022-08-05T16:04:01+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://hitbtc.com/XRP-to-BTC",
//             "token_info_url": null,
//             "coin_id": "ripple",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "JPY",
//             "market": {
//                 "name": "bitFlyer",
//                 "identifier": "bitflyer",
//                 "has_trading_incentive": false
//             },
//             "last": 3112683,
//             "volume": 2740.43996272,
//             "converted_last": {
//                 "btc": 0.99770538,
//                 "eth": 13.728264,
//                 "usd": 22998
//             },
//             "converted_volume": {
//                 "btc": 2734,
//                 "eth": 37621,
//                 "usd": 63024051
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.04657,
//             "timestamp": "2022-08-05T16:06:44+00:00",
//             "last_traded_at": "2022-08-05T16:06:44+00:00",
//             "last_fetch_at": "2022-08-05T16:06:44+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://bitflyer.com/en-jp/ex/simpleex",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "ETC",
//             "target": "BTC",
//             "market": {
//                 "name": "MEXC Global",
//                 "identifier": "mxc",
//                 "has_trading_incentive": false
//             },
//             "last": 0.0016011,
//             "volume": 40764.69,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.758803,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 65.268,
//                 "eth": 898.014,
//                 "usd": 1504208
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.056166,
//             "timestamp": "2022-08-05T16:04:04+00:00",
//             "last_traded_at": "2022-08-05T16:04:04+00:00",
//             "last_fetch_at": "2022-08-05T16:04:04+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.mexc.com/exchange/ETC_BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum-classic",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "BitMart",
//                 "identifier": "bitmart",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072666,
//             "volume": 78834.26,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 5729,
//                 "eth": 78824,
//                 "usd": 132023789
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.01688,
//             "timestamp": "2022-08-05T16:05:25+00:00",
//             "last_traded_at": "2022-08-05T16:05:25+00:00",
//             "last_fetch_at": "2022-08-05T16:05:25+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=ETH_BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "PLN",
//             "market": {
//                 "name": "Kanga",
//                 "identifier": "kanga",
//                 "has_trading_incentive": false
//             },
//             "last": 106400.83,
//             "volume": 0,
//             "converted_last": {
//                 "btc": 0.99711387,
//                 "eth": 13.720125,
//                 "usd": 22984
//             },
//             "converted_volume": {
//                 "btc": 21.367923,
//                 "eth": 294.019,
//                 "usd": 492545
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.330664,
//             "timestamp": "2022-08-05T16:06:34+00:00",
//             "last_traded_at": "2022-08-05T16:06:34+00:00",
//             "last_fetch_at": "2022-08-05T16:06:34+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://trade.kanga.exchange/market/BTC-oPLN",
//             "token_info_url": null,
//             "coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Bitfinex",
//                 "identifier": "bitfinex",
//                 "has_trading_incentive": false
//             },
//             "last": 0.072666,
//             "volume": 2555.49313894,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.749034,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 185.697,
//                 "eth": 2553,
//                 "usd": 4279837
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.055043,
//             "timestamp": "2022-08-05T16:02:57+00:00",
//             "last_traded_at": "2022-08-05T16:02:57+00:00",
//             "last_fetch_at": "2022-08-05T16:02:57+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitfinex.com/t/ETHBTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDT",
//             "market": {
//                 "name": "MEXC Global",
//                 "identifier": "mxc",
//                 "has_trading_incentive": false
//             },
//             "last": 23022.7,
//             "volume": 9747.692521,
//             "converted_last": {
//                 "btc": 1.000868,
//                 "eth": 13.770742,
//                 "usd": 23067
//             },
//             "converted_volume": {
//                 "btc": 9756,
//                 "eth": 134233,
//                 "usd": 224845315
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.016776,
//             "timestamp": "2022-08-05T16:04:05+00:00",
//             "last_traded_at": "2022-08-05T16:04:05+00:00",
//             "last_fetch_at": "2022-08-05T16:04:05+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.mexc.com/exchange/BTC_USDT",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "tether"
//         },
//         {
//             "base": "WBTC",
//             "target": "BTC",
//             "market": {
//                 "name": "Digifinex",
//                 "identifier": "digifinex",
//                 "has_trading_incentive": false
//             },
//             "last": 1.00154,
//             "volume": 994.0675,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 995.598,
//                 "eth": 13699,
//                 "usd": 22949218
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.249551,
//             "timestamp": "2022-08-05T16:06:07+00:00",
//             "last_traded_at": "2022-08-05T16:06:07+00:00",
//             "last_fetch_at": "2022-08-05T16:06:07+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.digifinex.com/en-ww/trade/BTC/WBTC",
//             "token_info_url": null,
//             "coin_id": "wrapped-bitcoin",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "FTX",
//                 "identifier": "ftx_spot",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07264,
//             "volume": 22273.03151886013,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.749034,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 1618,
//                 "eth": 22245,
//                 "usd": 37288634
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.013441,
//             "timestamp": "2022-08-05T16:02:48+00:00",
//             "last_traded_at": "2022-08-05T16:02:48+00:00",
//             "last_fetch_at": "2022-08-05T16:02:48+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://ftx.com/trade/ETH/BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "Bitforex",
//                 "identifier": "bitforex",
//                 "has_trading_incentive": false
//             },
//             "last": 0.0727194,
//             "volume": 4089.695,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.759838,
//                 "usd": 23051
//             },
//             "converted_volume": {
//                 "btc": 297.4,
//                 "eth": 4092,
//                 "usd": 6855276
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.111212,
//             "timestamp": "2022-08-05T16:06:06+00:00",
//             "last_traded_at": "2022-08-05T16:06:06+00:00",
//             "last_fetch_at": "2022-08-05T16:06:06+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitforex.com/en/spot/eth_btc",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "ETH",
//             "target": "BTC",
//             "market": {
//                 "name": "EXMO",
//                 "identifier": "exmo",
//                 "has_trading_incentive": false
//             },
//             "last": 0.07263033,
//             "volume": 6062.56010431,
//             "converted_last": {
//                 "btc": 1,
//                 "eth": 13.758803,
//                 "usd": 23047
//             },
//             "converted_volume": {
//                 "btc": 440.326,
//                 "eth": 6058,
//                 "usd": 10147976
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.103263,
//             "timestamp": "2022-08-05T16:04:48+00:00",
//             "last_traded_at": "2022-08-05T16:04:48+00:00",
//             "last_fetch_at": "2022-08-05T16:04:48+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://exmo.com/en/trade/ETH_BTC",
//             "token_info_url": null,
//             "coin_id": "ethereum",
//             "target_coin_id": "bitcoin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "LBank",
//                 "identifier": "lbank",
//                 "has_trading_incentive": false
//             },
//             "last": 23017.54,
//             "volume": 5288.9244,
//             "converted_last": {
//                 "btc": 1.000422,
//                 "eth": 13.764616,
//                 "usd": 23056
//             },
//             "converted_volume": {
//                 "btc": 5291,
//                 "eth": 72800,
//                 "usd": 121942792
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.021021,
//             "timestamp": "2022-08-05T16:04:48+00:00",
//             "last_traded_at": "2022-08-05T16:04:48+00:00",
//             "last_fetch_at": "2022-08-05T16:04:48+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.lbank.info/exchange/btc/usdc",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         },
//         {
//             "base": "BTC",
//             "target": "USDC",
//             "market": {
//                 "name": "BitMart",
//                 "identifier": "bitmart",
//                 "has_trading_incentive": false
//             },
//             "last": 23035.42,
//             "volume": 5818.975714,
//             "converted_last": {
//                 "btc": 1.0012,
//                 "eth": 13.776344,
//                 "usd": 23074
//             },
//             "converted_volume": {
//                 "btc": 5826,
//                 "eth": 80164,
//                 "usd": 134268195
//             },
//             "trust_score": "green",
//             "bid_ask_spread_percentage": 0.010998,
//             "timestamp": "2022-08-05T16:05:20+00:00",
//             "last_traded_at": "2022-08-05T16:05:20+00:00",
//             "last_fetch_at": "2022-08-05T16:05:20+00:00",
//             "is_anomaly": false,
//             "is_stale": false,
//             "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=BTC_USDC",
//             "token_info_url": null,
//             "coin_id": "bitcoin",
//             "target_coin_id": "usd-coin"
//         }
//     ]
// };

// const history: any = [
//     [
//         1659124800000,
//         23796.19,
//         23927.52,
//         23796.19,
//         23927.52
//     ],
//     [
//         1659139200000,
//         23878.41,
//         23944.49,
//         23801.26,
//         23944.49
//     ],
//     [
//         1659153600000,
//         23857.81,
//         23929.99,
//         23843.18,
//         23867.97
//     ],
//     [
//         1659168000000,
//         23818.55,
//         23818.55,
//         23753.06,
//         23793.4
//     ],
//     [
//         1659182400000,
//         23899.55,
//         23931.32,
//         23855.63,
//         23855.63
//     ],
//     [
//         1659196800000,
//         23990.6,
//         24517.56,
//         23990.6,
//         24493.31
//     ],
//     [
//         1659211200000,
//         24581.15,
//         24581.15,
//         24484.72,
//         24528.7
//     ],
//     [
//         1659225600000,
//         24218.64,
//         24218.64,
//         23729.45,
//         23729.45
//     ],
//     [
//         1659240000000,
//         23653.46,
//         23807.02,
//         23653.46,
//         23807.02
//     ],
//     [
//         1659254400000,
//         23743.38,
//         23819.34,
//         23743.38,
//         23796.76
//     ],
//     [
//         1659268800000,
//         23739.61,
//         23797.23,
//         23669.4,
//         23797.23
//     ],
//     [
//         1659283200000,
//         23794.18,
//         23831.37,
//         23744.22,
//         23751.43
//     ],
//     [
//         1659297600000,
//         23779.21,
//         23788.71,
//         23668.68,
//         23668.68
//     ],
//     [
//         1659312000000,
//         23858.14,
//         23858.14,
//         23288.62,
//         23288.62
//     ],
//     [
//         1659326400000,
//         23344.86,
//         23445.52,
//         23344.86,
//         23445.52
//     ],
//     [
//         1659340800000,
//         23366.13,
//         23398.66,
//         23239.69,
//         23239.69
//     ],
//     [
//         1659355200000,
//         23339,
//         23362.75,
//         23029.08,
//         23029.08
//     ],
//     [
//         1659369600000,
//         23270.3,
//         23467.48,
//         23105.49,
//         23467.48
//     ],
//     [
//         1659384000000,
//         23334.16,
//         23334.16,
//         22916.22,
//         22916.22
//     ],
//     [
//         1659398400000,
//         22965.34,
//         23188.23,
//         22965.34,
//         23188.23
//     ],
//     [
//         1659412800000,
//         23304.16,
//         23304.16,
//         22910.21,
//         22910.21
//     ],
//     [
//         1659427200000,
//         22872.24,
//         22941.69,
//         22865.66,
//         22941.69
//     ],
//     [
//         1659441600000,
//         22929,
//         22929,
//         22754.25,
//         22846.03
//     ],
//     [
//         1659456000000,
//         22961.91,
//         23034.4,
//         22772.75,
//         23034.4
//     ],
//     [
//         1659470400000,
//         23010,
//         23412.93,
//         23010,
//         23106.89
//     ],
//     [
//         1659484800000,
//         23058.79,
//         23115.38,
//         23001.32,
//         23115.38
//     ],
//     [
//         1659499200000,
//         23052.95,
//         23052.95,
//         22778.67,
//         22818.01
//     ],
//     [
//         1659513600000,
//         22851.29,
//         23071.26,
//         22851.29,
//         23071.26
//     ],
//     [
//         1659528000000,
//         23041.91,
//         23420.54,
//         23041.91,
//         23420.54
//     ],
//     [
//         1659542400000,
//         23385.64,
//         23385.64,
//         23293.67,
//         23293.67
//     ],
//     [
//         1659556800000,
//         23365.63,
//         23561.83,
//         23365.63,
//         23561.83
//     ],
//     [
//         1659571200000,
//         23514.89,
//         23514.89,
//         23026.02,
//         23026.02
//     ],
//     [
//         1659585600000,
//         22860.42,
//         23165.07,
//         22860.42,
//         23154.06
//     ],
//     [
//         1659600000000,
//         23103.06,
//         23146.82,
//         22941.33,
//         22941.33
//     ],
//     [
//         1659614400000,
//         22966.7,
//         22966.7,
//         22840.3,
//         22891.69
//     ],
//     [
//         1659628800000,
//         22925.59,
//         22998.01,
//         22918.99,
//         22918.99
//     ],
//     [
//         1659643200000,
//         22889.94,
//         22889.94,
//         22626.14,
//         22626.14
//     ],
//     [
//         1659657600000,
//         22526.44,
//         22639.32,
//         22526.44,
//         22639.32
//     ],
//     [
//         1659672000000,
//         22670.81,
//         23101.63,
//         22670.75,
//         23101.63
//     ],
//     [
//         1659686400000,
//         23189.73,
//         23270.18,
//         23162.65,
//         23270.18
//     ],
//     [
//         1659700800000,
//         23213.18,
//         23236.66,
//         23136.19,
//         23236.66
//     ],
//     [
//         1659715200000,
//         23426.86,
//         23426.86,
//         23041.14,
//         23225.35
//     ],
//     [
//         1659729600000,
//         23042.1,
//         23042.1,
//         23006.72,
//         23006.72
//     ]
// ];


const CoinInfo: React.FC = () => {

    const {id} = useParams<{ id: string }>();
    const [coinInfo, setCoinInfo] = useState<any>();
    const [days, setDays] = useState<number>(1);
    const [historicalData, setHistoricalData] = useState();

    const currency = useSelector((state: any) => state.currency.currency);
    const symbol = useSelector((state: any) => state.currency.symbol);
    const favorites = useSelector((state: any) => state.favorites.coins);

    const dispatch = useDispatch();

    const getHistory = async () => {

        const history = await getHistoricalData(id, days, currency);
        const data = await getCoinData(id);

        setCoinInfo(data);
        setHistoricalData(history);
    };

    const saveCoin = (id:string | undefined) => dispatch(favoritesActions.toggleCoinInFavorites({id}));

    useEffect(() => {
        getHistory();
    }, [id, days, currency]);

    // useEffect(() => {
    //     getHistory();
    //
    // }, [days, currency]);

    return (
        <CoinInfoS>
            <PageTitle title="Details"/>
            <div className="content">
                <div className="coin-info">
                    <div className="coin-img">
                        <img src={coinInfo?.image.large} alt={coinInfo?.id}/>
                    </div>
                    <div className="coin-details">
                        <p className="details">{coinInfo?.description.en.split(". ")[0]}.</p>
                        <div className="coin-rank"><strong>Rank</strong>: {coinInfo?.market_cap_rank}</div>
                        <div className="coin-price"><strong>Current
                            Price</strong>: {symbol}{coinInfo?.market_data.current_price[currency].toLocaleString('en-US')}
                        </div>
                        <div className="coin-mrktCap"><strong>Market
                            Cap</strong>: {symbol}{coinInfo?.market_data.market_cap[currency].toLocaleString('en-US')}</div>
                    </div>
                </div>
                {!historicalData ? <PuffLoader color="#a749ff"/> :
                    <div>
                        <h3 className="fav-icon">Favorites
                                {!!favorites.find((coinID:any) => coinID === id)
                                    ? <AiFillStar size="1.5rem"
                                                  color="#ffcc66"
                                    onClick={() => saveCoin(id)}/>
                                    : <AiOutlineStar size="1.5rem"
                                                     color="#ffcc66"
                                    onClick={() => saveCoin(id)}/>
                                }
                        </h3>
                        <Chart history={historicalData}
                               days={days}
                               coinName={coinInfo?.name}
                               changeDays={(days: number) => setDays(days)}/>
                    </div>
                }
            </div>
        </CoinInfoS>
    );
};

export default CoinInfo;