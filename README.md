# ds-sns

Deep Security can output events to an Amazon SNS topic. Events are sent as a JSON document to the specified SNS topic. The end result is a standard SNS notification wrapper with the Deep Security event stored in the ```Sns > Message``` key of each Record in the notification. 

The goal of the script in this repo is to parse the events and send to a seperate SNS topic. 


## Sample Event
```
{
  "Records": [
    {
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:us-east-1:435663754235:deep-security:3fdacd23-6td4-4cd2-6a1a-879e0e049524",
      "EventSource": "aws:sns",
      "Sns": {
        "SignatureVersion": "1",
        "Timestamp": "2016-08-04T01:08:23.530Z",
        "Signature": "UEW81BOwF+BvMaZI2S0YOidSLVYt2f3/ApeQ7zXXy/v6Z5SXqEKbA2MlarzyO9qIQCiVXuf1ugh8WQC6bptlWiLIl3ylUvYOVg/QSVuuyi+THrhbIc69jQ5704YTJZYVyADgLSX8vhCK/oGSS1VplGfA1y7LA3xGMIcIe3FVaBw+Dq8/ufMiGPTjS5LciPEjF8na3M1jqC2VquUKysnZ1SVHgg36u1j27aevSgz0/Et1Z4rHExGOEumo9TDg5ybTb0qQzlrTIYtFLEz+89ZC5eeEY4XGf+UzD61YQR0Bi3mk+sl9l8ZpOCG5AURWYKV4/cRVLDTkpnlOO4zOrjmSBg==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-bb750dd426d95ee9390147a5624348ee.pem",
        "MessageId": "882160ff-dc56-522a-be8c-30e34b917eee",
        "Message": "[{\"Action\":6,\"ActionString\":\"Log Only\",\"DataFlags\":8,\"DataIndex\":17773,\"DestinationIP\":\"96.17.87.177\",\"DestinationMAC\":\"00:00:00:00:00:00\",\"DestinationPort\":443,\"Direction\":1,\"DirectionString\":\"Outgoing\",\"DriverTime\":1470272837080110,\"EventID\":838236,\"EventType\":\"PacketLog\",\"Flags\":\"SYN DF\\u003d1\",\"Flow\":0,\"FlowString\":\"Connection Flow\",\"Frame\":2048,\"FrameString\":\"IP\",\"HostAgentVersion\":\"9.6.2.7256\",\"HostAssetValue\":1,\"HostCloudType\":\"amazon\",\"HostGroupID\":435,\"HostGroupName\":\"subnet-0060112b\",\"HostID\":9341,\"HostInstanceID\":\"i-0bbafc95\",\"HostOS\":\"Amazon Linux AMI (64 bit) (4.4.11-23.53.amzn1.x86_64)\",\"HostSecurityPolicyID\":621,\"HostSecurityPolicyName\":\"DeepDemo - With Firewall\",\"Hostname\":\"ec2-54-174-110-176.compute-1.amazonaws.com (Event Test) [i-0bbafc95]\",\"Interface\":\"12:AB:F4:D7:F1:F7\",\"LogDate\":\"2016-08-04T01:07:17.080Z\",\"Origin\":0,\"OriginString\":\"Agent\",\"PacketSize\":74,\"Protocol\":6,\"ProtocolString\":\"TCP\",\"Rank\":1,\"Reason\":\"Log All - Outbound\",\"RepeatCount\":1,\"SourceIP\":\"172.31.54.167\",\"SourceMAC\":\"12:AB:F4:D7:F1:F7\",\"SourcePort\":36248,\"Status\":0,\"Tags\":\"\",\"TenantID\":4235,\"TenantName\":\"Your Tenant Name\",\"Type\":1}]",
        "MessageAttributes": {},
        "Type": "Notification",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:435663754235:deep-security:3fdacd23-6td4-4cd2-6a1a-879e0e049524",
        "TopicArn": "arn:aws:sns:us-east-1:435663754235:deep-security",
        "Subject": null
      }
    }
  ]
}
```


## Support

This is an Open Source community project. Project contributors may be able to help, 
depending on their time and availability. Please be specific about what you're 
trying to do, your system, and steps to reproduce the problem.

For bug reports or feature requests, please 
[open an issue](../issues). 
You are welcome to [contribute](#contribute).

Official support from Trend Micro is not available. Individual contributors may be 
Trend Micro employees, but are not official support.