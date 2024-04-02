export class APIError extends Error {}

export interface Attachment {
  height: number;
  width: number;
  url: string;
}

export interface User {
  name: string;
  avatar: string;
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

      const message = (await response.json()).payload.message;
      const attachments: Attachment[] = [];

      for (const attachment of message.attachments || []) {
        attachments.push({
          height: attachment.height,
          width: attachment.width,
          url: attachment.url,
        });
      }

      return {
        attachments,
        id: message.id,
        content: message.content,
        timestamp: message.timestamp,
        uploader: {
          name: message.uploader.display_name,
          avatar: message.uploader.avatar,
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

      for (const message of (await response.json()).payload.messages) {
        const attachments: Attachment[] = [];

        for (const attachment of message.attachments || []) {
          attachments.push({
            height: attachment.height,
            width: attachment.width,
            url: attachment.url,
          });
        }

        messages.push({
          attachments,
          id: message.id,
          content: message.content,
          timestamp: message.timestamp,
          uploader: {
            name: message.uploader.display_name,
            avatar: message.uploader.avatar,
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

      const message = (await response.json()).payload.message;
      const attachments: Attachment[] = [];

      for (const attachment of message.attachments || []) {
        attachments.push({
          height: attachment.height,
          width: attachment.width,
          url: attachment.url,
        });
      }

      return {
        attachments,
        id: message.id,
        content: message.content,
        timestamp: message.timestamp,
        uploader: {
          name: message.uploader.display_name,
          avatar: message.uploader.avatar,
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
        avatar: user.avatar,
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

  science: (metric: string) =>
    fetch("/api/science", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ metric }),
    }),
};

export default api;
