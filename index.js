const aws = require('aws-sdk');
const sns = new aws.SNS();

// Set topic arn below
const topic = '';

exports.handler = (sns, context) => {
    //retrieve the events from the sns json
    const events = JSON.parse(sns.Records[0].Sns.Message);
    // Split messages if sent as array
    if (events.constructor === Array) {
        for (let i = 0; i < events.length; i++) {
            sendToSns(events[i]);
        }
    } else {
        sendToSns(events);
    }
};

// Send individual events to sns topic
function sendToSns(event) {
    if (topic == '' || !(topic)) {
        const err = new Error('No Topic Set');
        throw err;
    }
    let params = {
        TopicArn: topic,
        Message: JSON.stringify(event)
    };
    sns.publish(params, function (err) {
        if (err) console.log(err, err.stack); // log the error
    });
}