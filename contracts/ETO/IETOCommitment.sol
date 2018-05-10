pragma solidity 0.4.23;

import "./ICommitment.sol";
import "./ETOTerms.sol";
import "../Company/IEquityToken.sol";


/// @title default interface of commitment process
contract IETOCommitment is ICommitment {

    ////////////////////////
    // Types
    ////////////////////////

    // order must reflect time precedence, do not change order below
    enum State {
        Setup, // Initial state
        Whitelist,
        Public,
        Signing,
        Claim,
        Payout, // Terminal state
        Refund // Terminal state
    }

    ////////////////////////
    // Events
    ////////////////////////

    // on every state transition
    event LogStateTransition(
        uint32 oldState,
        uint32 newState
    );

    /// on a claim by invester
    ///   `investor` claimed `amount` of `assetToken` and claimed `nmkReward` amount of NEU
    event LogTokensClaimed(
        address indexed investor,
        address indexed assetToken,
        uint256 amount,
        uint256 nmkReward
    );

    /// on a refund to investor
    ///   `investor` was refunded `amount` of `paymentToken`
    /// @dev may be raised multiple times per refund operation
    event LogFundsRefunded(
        address indexed investor,
        address indexed paymentToken,
        uint256 amount
    );


    ////////////////////////
    // Public functions
    ////////////////////////

    //
    // State control
    //

    // returns current ETO state
    function state() public constant returns (State);

    // returns start of given state
    function startOf(State s) public constant returns (uint256);

    //
    // Commitment process
    //

    /// refunds investor if ETO failed
    function refund() external;

    function refundMany(address[] investors) external;

    /// claims tokens if ETO is a success
    function claim() external;

    function claimMany(address[] investors) external;

    // initiate fees payout
    function payout() external;


    //
    // Offering terms
    //

    function etoTerms() public constant returns (ETOTerms);

    function platformTerms() public constant returns (ETOPlatformTerms);

    // equity token
    function equityToken() public constant returns (IEquityToken);

    /// signed agreement as provided by company and nominee
    /// @dev available on Claim state transition
    function signedInvestmentAgreementUrl() public constant returns (string);

    /// financial outcome of token offering set on Signing state transition
    /// @dev in preceding states 0 is returned
    function signedOfferingResults()
        public
        constant
        returns (
            uint256 newShares, uint256 capitalIncreaseEurUlps,
            uint256 additionalContributionEth, uint256 additionalContributionEurUlps,
            uint256 tokenParticipationFeeInt, uint256 platformFeeEth, uint256 platformFeeEurUlps
        );
}
