const dialogflow = require('dialogflow');

const configs = require('./testediobotagent.json');

const sessionjClient = new dialogflow.SessionsClient({
    project_id: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
});

async function sendMessage(chatId, message){
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-Br'
            }
        }
    }
    const response = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log(JSON.stringify(result, null, 2));
};

sendMessage('Saudações', 'Oi');