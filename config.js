const RPC_HOST = 'https://api.eoslaomao.com:443';
const ALOHA_TRACKER_ACCOUNT = 'alohatracker'
const PROPOSER_ACCOUNT = 'laomaoserver'
const PROPOSER_PRIVATE_KEY = process.env.PROPOSER_PRIVATE_KEY
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const ENABLE_SLACK = process.env.ENABLE_SLACK
const SENTRY_DSN = process.env.SENTRY_DSN
const BP_ACCOUNT = 'eoslaomaocom'
const BP_PERMISSION = [
  {'actor': 'eoslaomao.bp', 'permission': 'active'},
  {'actor': 'eoslaomaobp1', 'permission': 'active'},
  {'actor': 'eoslaomaobp2', 'permission': 'active'},
  {'actor': 'eoslaomaobp3', 'permission': 'active'},
  {'actor': 'eoslaomaobp4', 'permission': 'active'}
];


module.exports = {
  RPC_HOST,
  ALOHA_TRACKER_ACCOUNT,
  PROPOSER_ACCOUNT,
  PROPOSER_PRIVATE_KEY,
  BP_ACCOUNT,
  BP_PERMISSION,
  ENABLE_SLACK,
  SLACK_WEBHOOK_URL,
  SENTRY_DSN
}
