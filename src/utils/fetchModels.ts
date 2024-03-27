export type GenerationMethod =
  | "generateMessage"
  | "generateText"
  | "countMessageTokens"
  | "countTextTokens"
  | "createTunedTextModel"
  | "embedText"
  | "generateContent"
  | "countTokens"
  | "createTunedModel"
  | "generateAnswer";

export interface Model {
  name: string;
  displayName: string;
  description: string;
  supportedGenerationMethods: GenerationMethod[];
  temperature: number;
  topP: number;
  topK: number;
}

export const fetchModels = async (): Promise<Model[]> => {
  if (!localStorage.getItem("apiKey")) {
    return [];
  }

  const models: Model[] = [];

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models?key=" +
      encodeURIComponent(localStorage.getItem("apiKey")!),
  );

  if (!res.ok) {
    return [];
  }

  for (const model of (await res.json()).models) {
    if (model.name.includes("embedding") || model.name === "models/aqa") {
      continue;
    }

    models.push({
      name: model.name,
      displayName: model.displayName,
      description: model.description,
      supportedGenerationMethods: model.supportedGenerationMethods,
      temperature: model.temperature,
      topP: model.topP,
      topK: model.topK,
    });
  }

  return models;
};

export default fetchModels;
