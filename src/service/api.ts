import axios, { AxiosError, AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

let navigate = useNavigate()

const api = axios.create({
    baseURL: 'http://localhost:5173/',
    timeout: 5000
});

// creacion del interceptor para las peticiones de Entrada
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            // Busco el tonken en le localStorage 
            const auhtToken = localStorage.getItem('access_token')
            // si hay un token lo hagrego al headers de la peticion
            if (auhtToken) {
                config.headers.Authorization = `Bearer ${auhtToken}`
            }
            return config

        } catch (error) {
            console.error('Error en interceptor de request:', error);
            throw error
        }
    })

// creacion del interceptor para las respuestas
api.interceptors.response.use(
    //Esta funcion procesa  la entrada de las respuesta
    async(response: AxiosResponse): Promise<AxiosResponse> => {
    try {
        return response;
    } catch(error) {
        

        console.error('Error procesando la respuesta:', error);

        
        throw error;
    }
},
    // esta funcion procesa los errores de las respuesra 
    async (error: AxiosError) => {
        if(error.response?.status === 400){
            console.warn('Solicitud incorrecta (400)');
            
        }
        if(error.response?.status === 401){
            console.warn('No autorizado. Redirigiendo al login...');
            navigate('/login')
        }

        if(error.response?.status === 403){
            console.warn('Acceso prohibido (403)');
        }

        return Promise.reject(error);
    })

