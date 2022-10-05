# jmes.js

Javascript developer library to interact with JMES Network


## Client

```js
import { Client, Mnemonic } from 'jmes.js'
const client = new Client();
const mnemonic = new Mnemonic();

// Initiate a wallet from a specific mnemonic or private key
const wallet = client.createWallet(mnemonic);

// Sign and broadcast a transaction
const signedMessage = wallet.signMessage({});
const txid = wallet.broadcastSignedMessage(signedMessage);


// Get feed
const feed = client.providers.marketplaceAPI.getFeed();
const item = client.providers.marketplaceAPI.getItem(itemIdentifier);
const author = client.providers.marketplaceAPI.getAuthor(item.author);
```

- `account.getFeed()` - Returns an array of items (nft,...)

- `account.getAuthor({nickname})`
- `account.getAuthors()`
- `account.getUser({nickname})`

- `account.mintItem(item)` - Allow to create a new item of type NFT.
- `account.getItem({id})` - Allow to get a specific item
- `account.findItem({syntax})`

## Items

Items images can be found at {SERVER_URI}/images/{item.filename}. eg: `http://localhost:3001/images/82f182ddbef3d7b80bafc06ee9e4a664.png`   
SERVER_URL is specified in MarketplaceAPI.endpoint.images_url.  
Where filename is md5.
