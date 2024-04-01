export class APIError extends Error {}

export interface Attachment {
  filename: string;
  contentType: string;
  content: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  attachments: Attachment[];
  content: string;
  timestamp: number;
  uploader: User;
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

    attachments: async (id: string): Promise<Attachment[] | null> => {
      const response = await fetch("/api/messages/" + id + "/attachments");

      if (!response.ok) {
        if ((await response.json()).payload.attachments === null) {
          return null;
        }

        throw new APIError();
      }

      const attachments: Attachment[] = [];

      for (const attachment of (await response.json()).payload.attachments) {
        attachments.push({
          filename: attachment.filename,
          contentType: attachment.content_type,
          content: attachment.content,
        });
      }

      return attachments;
    },

    call: async (items: number, page: number): Promise<Message[]> => {
      const users = await api.users();

      const response = await fetch(
        "/api/messages?items=" + items + "&page=" + page,
      );

      if (!response.ok) {
        throw new APIError();
      }

      const messages: Message[] = [];

      for (const message of (await response.json()).payload.messages) {
        for (const user of users) {
          if (user.id === message.uploader.id) {
            messages.push({
              attachments: (await api.messages.attachments(message.id)) || [],
              content: message.content,
              timestamp: message.timestamp,
              uploader: user,
            });

            break;
          }
        }
      }

      return messages;
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
        id: user.id,
        name: user.display_name,
        avatar: user.avatar,
      });
    }

    return users;
  },
};

export default api;
