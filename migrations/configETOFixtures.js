import { web3, Q18, daysToSeconds } from "../test/helpers/constants";

export const publicETOTerms = {
  shareholderTerms: {
    GENERAL_VOTING_RULE: new web3.BigNumber(1),
    TAG_ALONG_VOTING_RULE: new web3.BigNumber(2),
    LIQUIDATION_PREFERENCE_MULTIPLIER_FRAC: Q18.mul(0),
    HAS_FOUNDERS_VESTING: true,
    GENERAL_VOTING_DURATION: new web3.BigNumber(daysToSeconds(10)),
    RESTRICTED_ACT_VOTING_DURATION: new web3.BigNumber(daysToSeconds(14)),
    VOTING_FINALIZATION: new web3.BigNumber(daysToSeconds(5)),
    TOKENHOLDERS_QUORUM_FRAC: Q18.mul(0.1),
  },
  durTerms: {
    WHITELIST_DURATION: new web3.BigNumber(daysToSeconds(7)),
    PUBLIC_DURATION: new web3.BigNumber(daysToSeconds(7)),
    SIGNING_DURATION: new web3.BigNumber(daysToSeconds(14)),
    CLAIM_DURATION: new web3.BigNumber(daysToSeconds(10)),
  },
  tokenTerms: {
    MIN_NUMBER_OF_TOKENS: new web3.BigNumber(1000 * 10000),
    MAX_NUMBER_OF_TOKENS: new web3.BigNumber(3452 * 10000),
    TOKEN_PRICE_EUR_ULPS: Q18.mul("0.32376189"),
  },
  etoTerms: {
    DURATION_TERMS: null,
    EXISTING_COMPANY_SHARES: new web3.BigNumber(40976),
    MIN_TICKET_EUR_ULPS: Q18.mul(100),
    MAX_TICKET_EUR_ULPS: Q18.mul(1000000),
    ENABLE_TRANSFERS_ON_SUCCESS: true,
    IS_CROWDFUNDING: false,
    INVESTMENT_AGREEMENT_TEMPLATE_URL: "ipfs:QmRZ3qsDZXGNJpyL9WtCMZVKMrw9SmN2pe3sRQswKgYXSz",
    PROSPECTUS_URL: "ipfs:QmQYWyx6WWwCYqBnJ74ruogTTHfKoscQRHU5eJFKDD22mT",
    SHAREHOLDER_RIGHTS: null,
    EQUITY_TOKEN_NAME: "Quintessence",
    EQUITY_TOKEN_SYMBOL: "QTT",
    SHARE_NOMINAL_VALUE_EUR_ULPS: Q18,
  },
  reservationAndAcquisitionAgreement: "ipfs:QmcXFyLwH5cerZCP3rFNNBKTr3cXtgZnvHxnTx5C8scp6M",
  companyTokenHolderAgreement: "ipfs:QmcptXHPvPUHEaJjJ3mTEJpBwHexggF16dqFhJaWVed5uB",
  name: "ETOInPublicState",
};
