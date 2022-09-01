from usuario import Usuario

class GerenciadorDeUsuarios:
    def __init__(self):
        self.usuarios = {}
        self.senhas = {}

    def cadastrarUsuario(self,nome,telefone,login,senha):
        novo_usuario[login] = Usuario(nome,telefone)
        self.senhas[login] = senha
        self.usuarios.append(novo_usuario)

    def getUsuario(self,login):
        return self.usuarios[login]

    def validarSenhaUsuario(self,login,senha):
        return self.senhas[login] = senha
    


