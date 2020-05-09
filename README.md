# BP Kicking Proposal Moniter

Monitor BP Kicking Proposals from [Block Producer Reliability Tracker] by Aloha EOS(https://t.me/EOS_Mainnet_Aloha_Tracker) and auto propose for your msig-ed BP account if it found one.

Features and highlights:

* Docker based, simple to deploy.
* Auto propose a proposal for your Block Producer account, which approves BP kicking proposal(missing >=3 rounds in a row) proposed by Block Producer Reliability Tracker.
* It has Slack Bot Notification! Yay!
* No keys or permissions related to your BP account is needed to use this tool.

Note: This tool is designed for msig-ed Block Producer account only. For Block Producers (especially top 21) who has not msig-ed their account, we hignly recommend they do it ASAP to secure EOS Mainnet. Please refer to the Appendix below for current msig status of TOP 40 Block Producers on EOS Mainnet.

## Usage

Just call `start.sh` with parameters below:

```
./start.sh BP_ACCOUNT \
        BP_PERMISSION_NAME \
        PROPOSER_ACCOUNT \
        PROPOSER_PRIVATE_KEY \
        SLACK_WEBHOOK_URL \
        SENTRY_DSN[optional] \
        RPC_HOST[optional]
```
#### BP_ACCOUNT
You BP account name, e.g. `eoslaomaocom`

#### BP_PERMISSION_NAME
You BP account permission(msig-ed) to call `eosio.msig::approve`, e.g. `active`
Note: This is only used to craft a proposal, you don't need to provide any secret keys or accounts related to this permission or your BP account.

#### PROPOSER_ACCOUNT
Account used to propose proposal.
* Note: This is should be a seperate account controlled by a seperate key, DO NOT use BP account. Also, make sure it has sufficient resource to fire tx.

#### PROPOSER_PRIVATE_KEY
Secret key for `PROPOSER_ACCOUNT`
* Note: DO NOT share any key with your BP account.

#### SLACK_WEBHOOK_URL
You Slack bot webhook url.

#### SENTRY_DSN[optional]
Optional, used to notify Sentry when there are exceptions occurred.

#### RPC_HOST[optional]
Optinal, default value is "https://api.eoslaomao.com:443". This endpoint is where the proposal tx sent.

Provide above parameters accordingly and execute, it will start a Docker container called `eos-auto-kicker`.

You can check logs using:

```
docker logs -f eos-auto-kicker
```

This container will running as deamon, it will check BP kicking proposals proposed by Block Producer Reliability Tracker every 1 minute. When there are kicking proposals found, the approval proposal will be proposed automatically. At the same time, you will get notified in your Slack channal. All you need to do then, is to decide to approve it or not.


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
