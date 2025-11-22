import random

_APRESENTACOES_ = ['oi','opa','eae','boa']
_AGRADECIMENTO_ = ['Agradeço','Valeu','Obrigado']
_ESPERA_ = ['Só um momento','Em breve respondemos','Infelizmente só amanhã']

def get_bot_response(user_id: str):
    # Pega uma saudação aleatória
    saudacao = random.choice(_APRESENTACOES_)
    
    # Pega um agradecimento aleatório
    agradecimento = random.choice(_AGRADECIMENTO_)
    
    # Pega uma frase de espera aleatória
    espera = random.choice(_ESPERA_)

    if user_id == 'userA':
        return f"{saudacao}! {agradecimento} pelo contato, userA. {espera}."
    elif user_id == 'userB':
        return f"{saudacao}! Recebemos sua mensagem, userB. {espera}."
    else:
        return f"{saudacao}! Mensagem recebida. {espera}."
