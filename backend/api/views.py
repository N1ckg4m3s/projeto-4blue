from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import MessageSerializer
from .utils import get_bot_response

# POST /api/mensages
class PostMessageView(APIView):
    def post(self, req):
        user_id = req.data.get('user_id')
        mensage = req.data.get('mensage')
        
        # Verificar se passou id e mensagem
        if not (user_id or not mensage):
            return Response({'error': 'user_id e text obrigatórios'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Adicionar a mensagem do usuario
        user_message = Message.objects.create(user_id=user_id, mensage=mensage, self_message=True)
        
        # resposta de teste
        resposta_mock = get_bot_response(user_id)
        bot_message = Message.objects.create(user_id=user_id, mensage=resposta_mock, self_message=False)
        
        return Response(
            {
                'user_message': MessageSerializer(user_message).data,
                'bot_message': MessageSerializer(bot_message).data,
            },
            status=status.HTTP_201_CREATED
        )

# GET /api/messages/history/?user_id=?
class GetHistoryView(APIView):
    def get(self, req):
        user_id = req.query_params.get('user_id')

        # Verificar se passou id e mensagem
        if (not user_id):
            return Response({'error': 'user_id é obrigatório'}, status=status.HTTP_400_BAD_REQUEST)
        
        mensagens_do_usuario = Message.objects.filter(user_id=user_id).order_by('created_at')
        mensagens_serializadas = MessageSerializer(mensagens_do_usuario, many=True)
        
        return Response(mensagens_serializadas.data)