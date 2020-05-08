# BP Auto Kicker

Auto propose to approve proposal from [Block Producer Reliability Tracker] by Aloha EOS(https://t.me/EOS_Mainnet_Aloha_Tracker)

Features:

* Auto propose a proposal for your Block Producer account, which approves BP kicking proposal(missing >=3 rounds in a row) proposed by Block Producer Reliability Tracker.
* Send Slack bot notification after proposal proposed.
* Docker based, simple to deploy.

Note: This tool is designed for msig-ed Block Producer account only. For Block Producers (especially top 21) who has not msig-ed their account, we hignly recommend they do it ASAP to secure EOS Mainnet. Please refer to the Appendix below for current msig status of TOP 40 Block Producers on EOS Mainnet.

## Usage

Just call `start.sh` with parameters:

```
./start.sh BP_ACCOUNT \
        BP_PERMISSION_NAME \
        PROPOSER_ACCOUNT \
        PROPOSER_PRIVATE_KEY \
        SLACK_WEBHOOK_URL \
        SENTRY_DSN[optional] \
        RPC_HOST[optional]
```
### BP_ACCOUNT
You BP account name, e.g. `eoslaomaocom`

### BP_PERMISSION_NAME
You BP account permission(msig-ed) can be used to call `eosio.msig::propose_trx`, e.g. `active`

### PROPOSER_ACCOUNT
Account used to propose proposal. This is should be a seperate account controlled by a seperate key, DO NOT use BP account. Make sure it has sufficient resource to fire tx.

### PROPOSER_PRIVATE_KEY
Secrent key for `PROPOSER_ACCOUNT`

### SLACK_WEBHOOK_URL
You Slack bot webhook url.

### SENTRY_DSN[optional]
Optional, used to notify Sentry when there are exceptions occurred.

### RPC_HOST[optional]
Optinal, default value is "https://api.eoslaomao.com:443". This endpoint where the proposal tx sent.

Provide above parameters accordingly, and execute it, you will have a Docker container called `eos-auto-kicker` running.

You can check logs using:

```
docker logs -f eos-auto-kicker
```

When there are BP kicking proposals proposed by Block Producer Reliability Tracker, the approval proposal will be proposed automatically. At the same time, you will get notified in your Slack channal. All you need to do then, is to decide to approve it or not.


We believe, with this little tool, the EOS Mainnet will be more reliable and secure.


## Appendix

Current msig status of TOP 40 Block Producers(2020-05-08):

Note: by `msig`, we mean both the `owner` and `active` permissions are msiged.

|  Block Producer | MISG Status |
|  ----  | ----  |
| eoshuobipool | ❌ |
| eosnationftw | ✅ |
| eoseouldotio | ❌ |
| bitfinexeos1 | ❌ |
| newdex.bp | ❌ |
| eosiomeetone | ✅ |
| eoscannonchn | ❌ |
| atticlabeosb | ❌ |
| big.one | ❌ |
| eosdotwikibp | ❌ |
| starteosiobp | ❌ |
| eoslaomaocom | ✅ |
| okcapitalbp1 | ❌ |
| eosrapidprod | ❌ |
| eosflytomars | ❌ |
| hashfineosio | ❌ |
| blockpooleos | ❌ |
| whaleex.com | ❌ |
| helloeoscnbp | ❌ |
| zbeosbp11111 | ❌ |
| eosinfstones | ❌ |
| eosiosg11111 | ❌ |
| eosasia11111 | ❌ |
| binancestake | ❌ |
| cochainworld | ❌ |
| eosbeijingbp | ❌ |
| certikeosorg | ❌ |
| slowmistiobp | ❌ |
| eossv12eossv | ❌ |
| hoo.com | ❌ |
| aus1genereos | ✅ |
| truststaking | ❌ |
| eosswedenorg | ✅ |
| eoslambdacom | ❌ |
| eosflareiobp | ❌ |
| eoscafeblock | ✅ |
| eosauthority | ❌ |
| argentinaeos | ❌ |
| teamgreymass | ❌ |
| alohaeosprod | ✅ |

 
PRs from Block Producers are welcome if there are any mistakes in the above table.
