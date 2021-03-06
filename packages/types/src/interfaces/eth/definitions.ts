// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

// As per frontier

import type { DefinitionsTypes } from '../../types';

import { rpc } from './rpc';

const types: DefinitionsTypes = {
  EthereumAccountId: 'GenericEthereumAccountId',
  EthereumLookupSource: 'GenericEthereumLookupSource',
  EthereumSignature: '[u8; 65]',
  EthAccount: {
    address: 'H160',
    balance: 'U256',
    nonce: 'U256',
    codeHash: 'H256',
    storageHash: 'H256',
    accountProof: 'Vec<Bytes>',
    storageProof: 'Vec<EthStorageProof>'
  },
  EthBlock: {
    _alias: {
      blockHash: 'hash',
      blockSize: 'size'
    },
    blockHash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'H160',
    miner: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'H2048',
    timestamp: 'U256',
    difficulty: 'U256',
    totalDifficulty: 'Option<U256>',
    sealFields: 'Vec<Bytes>',
    uncles: 'Vec<H256>',
    transactions: 'Vec<EthTransaction>',
    blockSize: 'Option<U256>'
  },
  EthBloom: 'H2048',
  EthCallRequest: {
    from: 'Option<H160>',
    to: 'Option<H160>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthFilter: {
    fromBlock: 'Option<BlockNumber>',
    toBlock: 'Option<BlockNumber>',
    blockHash: 'Option<H256>',
    address: 'Option<EthFilterAddress>',
    topics: 'Option<EthFilterTopic>'
  },
  EthFilterAddress: {
    _enum: {
      Single: 'H160',
      Multiple: 'Vec<H160>',
      Null: 'Null'
    }
  },
  EthFilterTopic: {
    _enum: {
      Single: 'EthFilterTopicInner',
      Multiple: 'Vec<EthFilterTopicInner>',
      Null: 'Null'
    }
  },
  EthFilterTopicEntry: 'Option<H256>',
  EthFilterTopicInner: {
    _enum: {
      Single: 'EthFilterTopicEntry',
      Multiple: 'Vec<EthFilterTopicEntry>',
      Null: 'Null'
    }
  },
  EthHeader: {
    _alias: {
      blockHash: 'hash',
      blockSize: 'size'
    },
    blockHash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'H160',
    miner: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'H2048',
    timestamp: 'U256',
    difficulty: 'U256',
    sealFields: 'Vec<Bytes>',
    blockSize: 'Option<U256>'
  },
  EthLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes',
    blockHash: 'Option<H256>',
    blockNumber: 'Option<U256>',
    transactionHash: 'Option<H256>',
    transactionIndex: 'Option<U256>',
    logIndex: 'Option<U256>',
    transactionLogIndex: 'Option<U256>',
    removed: 'bool'
  },
  EthReceipt: {
    transactionHash: 'Option<H256>',
    transactionIndex: 'Option<U256>',
    blockHash: 'Option<H256>',
    from: 'Option<H160>',
    to: 'Option<H160>',
    blockNumber: 'Option<U256>',
    cumulativeGasUsed: 'U256',
    gasUsed: 'Option<U256>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthLog>',
    root: 'Option<H256>',
    logsBloom: 'H2048',
    statusCode: 'Option<U64>'
  },
  EthRichBlock: 'EthBlock',
  EthRichHeader: 'EthHeader',
  EthStorageProof: {
    key: 'U256',
    value: 'U256',
    proof: 'Vec<Bytes>'
  },
  EthSubKind: {
    _enum: ['newHeads', 'logs', 'newPendingTransactions', 'syncing']
  },
  EthSubParams: {
    _enum: {
      None: 'Null',
      Logs: 'EthFilter'
    }
  },
  EthSubResult: {
    _enum: {
      Header: 'EthRichHeader',
      Log: 'EthLog',
      TransactionHash: 'H256',
      SyncState: 'EthSyncStatus'
    }
  },
  EthSyncInfo: {
    startingBlock: 'U256',
    currentBlock: 'U256',
    highestBlock: 'U256',
    warpChunksAmount: 'Option<U256>',
    warpChunksProcessed: 'Option<U256>'
  },
  EthSyncStatus: {
    _enum: {
      Info: 'EthSyncInfo',
      None: 'Null'
    }
  },
  EthTransaction: {
    blockHash: 'Option<H256>',
    blockNumber: 'Option<U256>',
    chainId: 'Option<u64>',
    condition: 'Option<EthTransactionCondition>',
    creates: 'Option<H160>',
    from: 'H160',
    gas: 'U256',
    gasPrice: 'U256',
    hash: 'H256',
    input: 'Bytes',
    nonce: 'U256',
    publicKey: 'Option<H512>',
    r: 'U256',
    raw: 'Bytes',
    s: 'U256',
    standardV: 'U256',
    to: 'Option<H160>',
    transactionIndex: 'Option<U256>',
    v: 'U256',
    value: 'U256'
  },
  EthTransactionCondition: {
    _enum: {
      block: 'u64',
      time: 'u64'
    }
  },
  EthTransactionRequest: {
    from: 'Option<H160>',
    to: 'Option<H160>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthLog>',
    logsBloom: 'EthBloom'
  },
  EthWork: {
    pow_hash: 'H256',
    seed_hash: 'H256',
    target: 'H256',
    number: 'Option<u64>'
  }
};

export default { rpc, types };
