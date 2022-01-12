import { render, screen } from '../../test/setup';
import LoginPage from '.';

describe('Login Page', () => {
  describe('Layout', () => {
    it('has email input', () => {
      render(<LoginPage />);
      const input = screen.getByLabelText('Correo Electrónico');
      expect(input).toBeInTheDocument();
    });
    it('has password input', () => {
      render(<LoginPage />);
      const input = screen.getByLabelText('Contraseña');
      expect(input).toBeInTheDocument();
    });
    it('has password type for password input', () => {
      render(<LoginPage />);
      const input = screen.getByLabelText('Contraseña');
      expect(input.type).toBe('password');
    });
    it('has loggin button', () => {
      render(<LoginPage />);
      const button = screen.queryByRole('button', { name: 'Iniciar Sesion' });
      expect(button).toBeInTheDocument();
    });
  });
});
