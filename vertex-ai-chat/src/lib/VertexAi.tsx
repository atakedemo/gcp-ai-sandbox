import { VertexAI } from "@google-cloud/vertexai";

const project = "ai-agent-bamb00";
const location = 'us-central1';

const client = new VertexAI({project: project, location: location});

export const chatWithVertexAI = async (message: string) => {
//   const result = await client.predict({
//     endpoint: "your-model-endpoint",
//     instances: [{ message }],
//   });
//   return result.predictions[0];
    console.log(client)
    return message
};
