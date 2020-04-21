docker run -d --name eos-auto-kicker -e BP_ACCOUNT=$1 -e BP_PERMISSION_NAME=$2 -e PROPOSER_ACCOUNT=$3 -e PROPOSER_PRIVATE_KEY=$4 -e SLACK_WEBHOOK_URL=$5 -e SENTRY_DSN=$6 eoslaomao/eos-auto-kicker:0.6
