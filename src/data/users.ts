// src/data/users.ts
export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  export const sampleUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 35 },
  ];
  