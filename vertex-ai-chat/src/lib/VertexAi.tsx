import {
    // FunctionDeclarationSchemaType,
    HarmBlockThreshold,
    HarmCategory,
    VertexAI 
} from "@google-cloud/vertexai";

const project = "ai-agent-bamb00";
const location = 'us-central1';
const textModel =  'gemini-1.5-flash';

const vertexAI = new VertexAI({project: project, location: location});

const generativeModel = vertexAI.getGenerativeModel({
    model: textModel,
    // The following parameters are optional
    // They can also be passed to individual content generation requests
    safetySettings: [{category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE}],
    generationConfig: {maxOutputTokens: 256},
    systemInstruction: {
      role: 'system',
      parts: [{"text": `For example, you are a helpful customer service agent.`}]
    },
});

export const chatWithVertexAI = async (message: string) => {
    const request = {
        contents: [{role: 'user', parts: [{text: message}]}],
    };
    const result = await generativeModel.generateContent(request);
    const response = result.response;
    
    console.log('Response: ', JSON.stringify(response));
    return JSON.stringify(response)
};
