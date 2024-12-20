export class APIError extends Error {}

export interface Attachment {
  filename: string;
  content_type: string;
  id: string;
  spoiler: boolean;
  height: number;
  width: number;
}

export interface User {
  name: string;
  id: string;
}

export interface Message {
  id: string;
  attachments: Attachment[];
  content: string;
  timestamp: number;
  uploader: User;
}

export interface Statistics {
  lastDatabaseUpdate: number;
  lastMessage: number;
  savedUsers: number;
  savedMessages: number;
}

export const api = {
  messages: {
    pages: async (items: number): Promise<number> => {
      const response = await fetch("/api/messages/pages?items=" + items);

      if (!response.ok) {
        throw new APIError();
      }

      return (await response.json()).payload.pages;
    },

    id: async (id: string): Promise<Message> => {
      const response = await fetch("/api/messages/" + id);

      if (!response.ok) {
        throw new APIError();
      }

      const payload = (await response.json()).payload;
      const message = payload.message;

      return {
        attachments: payload.attachments,
        id: message.id,
        content: message.content,
        timestamp: message.timestamp,
        uploader: {
          name: message.uploader.display_name,
          id: message.uploader.id,
        },
      };
    },

    call: async (items: number, page: number): Promise<Message[]> => {
      const response = await fetch(
        "/api/messages?items=" + items + "&page=" + page,
      );

      if (!response.ok) {
        throw new APIError();
      }

      const messages: Message[] = [];

      for (const payload of (await response.json()).payload.messages) {
        messages.push({
          attachments: payload.attachments,
          id: payload.message.id,
          content: payload.message.content,
          timestamp: payload.message.timestamp,
          uploader: {
            name: payload.message.uploader.display_name,
            id: payload.message.uploader.id,
          },
        });
      }

      return messages;
    },

    random: async (): Promise<Message> => {
      const response = await fetch("/api/messages/random");

      if (!response.ok) {
        throw new APIError();
      }

      const payload = (await response.json()).payload;
      const message = payload.message;

      return {
        attachments: payload.attachments,
        id: message.id,
        content: message.content,
        timestamp: message.timestamp,
        uploader: {
          name: message.uploader.display_name,
          id: message.uploader.id,
        },
      };
    },
  },

  users: async (): Promise<User[]> => {
    const response = await fetch("/api/users?avatar=true");

    if (!response.ok) {
      throw new APIError();
    }

    const users: User[] = [];

    for (const user of (await response.json()).payload.users) {
      users.push({
        name: user.display_name,
        id: user.id,
      });
    }

    return users;
  },

  statistics: async (): Promise<Statistics> => {
    const response = await fetch("/api/statistics");

    if (!response.ok) {
      throw new APIError();
    }

    const resBody = await response.json();

    return {
      lastDatabaseUpdate: resBody.last_backup,
      lastMessage: resBody.last_message,
      savedUsers: resBody.saved_users,
      savedMessages: resBody.saved_messages,
    };
  },

  science: (_: string) => {
    // no more science
    // i didnt remove this func cuz i didnt feel like finding
    // all calls of this func and removing it myself
  }
};

export default api;
