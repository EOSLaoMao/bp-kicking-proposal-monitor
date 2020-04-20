docker run -d -h eos-auto-kicker -e PROPOSER_PRIVATE_KEY=$1 -e ENABLE_SLACK=$2 -e SLACK_WEBHOOK_URL=$3 eoslaomao/eos-auto-kicker:0.3
