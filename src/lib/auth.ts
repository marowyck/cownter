// Mock de usuários para o MVP
export const MOCK_USERS = {
  demo: {
    email: 'demo@cownter.com',
    password: 'demo123',
    name: 'Seu Geraldo',
    farm: 'Fazenda Demo',
    plan: 'Pastagem'
  }
};

export interface User {
  email: string;
  name: string;
  farm: string;
  plan: 'Broto' | 'Pastagem' | 'Latifúndio';
}

export function validateCredentials(email: string, password: string): User | null {
  // Procurar usuário pelo email
  const user = Object.values(MOCK_USERS).find(u => u.email === email);
  
  if (user && user.password === password) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
  
  return null;
}
