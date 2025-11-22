from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from .models import Message

class ChatTest(TestCase):
    def setUp(self):
        # Simulando um cliente para as chamadas  HTTP
        self.client = APIClient()
        
        # Usuario teste
        self.user_id = "Teste"
        
        # Rotas
        self.sendMessageURL = reverse('sendMessages')
        self.getHistoryURL = reverse('getHistory')
        
        # cria mensagem inicial
        Message.objects.create(
            user_id=self.user_id,
            mensage="mensagem teste",
            self_message=True
        )
    
    # Teste 1: Enviar mensagem com dados certos
    def test_EnviarMensagemCerta(self):
        payload={
            "user_id": self.user_id,
            "mensage": 'Mensagem teste'
        }
        
        response = self.client.post(self.sendMessageURL, payload, format="json")

        self.assertEqual(response.status_code, 201)
        self.assertIn("user_message", response.data)
        self.assertIn("bot_message", response.data)
        
    # Teste 2: Enviar mensagem com falta de informação
    def test_EnviarMensagemSemUser(self):
        payload={
            "mensage": 'Mensagem teste'
        }
        
        response = self.client.post(self.sendMessageURL, payload, format="json")

        self.assertEqual(response.status_code, 400)
    
    # Teste 3: Obter o historico de conversa com dados certos
    def test_ObterHistoricoCerta(self):
        response = self.client.get(self.getHistoryURL, {"user_id": self.user_id,})
        
        self.assertEqual(response.status_code, 200)
        self.assertGreater(len(response.data), 0) # lista > 0
    
    # Teste 4: Obter o historico de conversa falta de informação
    def test_ObterHistoricoSemUser(self):
        response = self.client.get(self.getHistoryURL)

        self.assertEqual(response.status_code, 400)