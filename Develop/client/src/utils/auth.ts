import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  exp: number;
  username: string;
  // add additional properties if needed
}

class AuthService {
  // Returns the decoded token payload if a token exists, otherwise null.
  getProfile(): DecodedToken | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error('Token decoding failed', error);
      return null;
    }
  }

  // Checks if a token exists and is not expired.
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  // Checks if the token is expired based on the `exp` claim.
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      return true;
    }
  }

  // Retrieve the token from localStorage.
  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  // Store the token and redirect to the main page.
  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove the token and redirect to the login page.
  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
