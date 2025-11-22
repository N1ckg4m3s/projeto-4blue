interface ControllerProps {
    url: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    body?: Record<string, any>;
    params?: Record<string, any>;
    onSuccess: (data: any) => void;
    onError: (error: any) => void;
}

/**
 * Chama a API com base na URL, método e parâmetros fornecidos.
 * Centraliza o tratamento de requisições e erros.
 * 
 * @param {Object} param0 - Objeto de configuração da requisição
 * @param {string} param0.url - Endpoint da API
 * @param {'GET'|'POST'|'PUT'|'DELETE'} param0.method - Método HTTP
 * @param {Record<string, any>} [param0.body] - Dados a serem enviados no corpo da requisição (JSON)
 * @param {Record<string, any>} [param0.params] - Parâmetros de query string para GET/DELETE
 * @param {(data: any) => void} param0.onSuccess - Callback chamado quando a requisição é bem-sucedida, recebe os dados
 * @param {(error: any) => void} param0.onError - Callback chamado em caso de erro, recebe o erro
 */
export const ApiCaller = async ({ url, method, body, params, onSuccess, onError }: ControllerProps) => {
    try {
        const queryString = params
            ? '?' + new URLSearchParams(params as any).toString()
            : '';

        const response = await fetch(url + queryString, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.json();
        onSuccess(data);
    } catch (err) {
        onError(err);
    }
}
