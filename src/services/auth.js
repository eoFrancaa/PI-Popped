
class AuthService {
  constructor() {
    this.apiUrl = 'http://0.0.0.0:19003/api'; 
  }

  async login(credentials) {
    try {
      const response = await fetch(`${this.apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials), 
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Erro no login:', error);
      throw error; 
    }
  }

  async logout() {
    try {
      
      return true; 
    } catch (error) {
      console.error('Erro no logout:', error);
      throw error;
    }
  }

  async getUser_Data(token){ 
    try {
      const response = await fetch(`${this.apiUrl}/auth/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao recuperar dados do usuário');
      }

      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
      throw error; 
    }
  }
}

export default AuthService;