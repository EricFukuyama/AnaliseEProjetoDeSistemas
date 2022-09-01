from gerenciadorDeUsuarios import GerenciadorDeUsuarios

class GerenciadorDeFigurinhas:
    def __init__(self,gerenciadorDeUsuarios):
        self.gerenciadorDeUsuarios = gerenciadorDeUsuarios

    def adicionarFigurinhas(self,login_usuario,figurinha):
        usuario = self.gerenciadorDeUsuarios.getUsuario(login_usuario)
        usuario.figurinha.add(figurinha)
        
    def removerFigurinhas(self,login_usuario,figurinha):
        usuario = self.gerenciadorDeUsuarios.getUsuario(login_usuario)
        usuario.figurinha.remove(figurinha)

        
            
    