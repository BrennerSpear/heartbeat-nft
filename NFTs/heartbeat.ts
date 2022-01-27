const contractName = 'heartbeat'; //links to the file name in contracts/<filename.sol>

const env = process.env.HARDHAT_NETWORK === 'mainnet' ? 'heartbeat' : 'heartbeat-dev';

const nftName = 'Heartbeat';
const symbol = 'HBEAT';
const metadataFolderURL = `https://${env}.themetagame.xyz/api/v1/metadata/`;
const freeMints = 0;
const mintsPerAddress = 1;
const openseaContractMetadataURI = `https://${env}.themetagame.xyz/api/v1/contract-metadata`;
const mintActive = false;

const contractArgs = [
    nftName,
    symbol,
    metadataFolderURL,
    freeMints,
    mintsPerAddress,
    openseaContractMetadataURI,
    mintActive,
];
export { contractName, contractArgs };
