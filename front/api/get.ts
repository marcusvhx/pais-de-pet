import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

export interface iApiResponse {
  status: number;
  msg: string;
  data?: iGroomingResponse;
}

export interface iGroomingResponse {
  id: string;
  petKind: string;
  service: string;
  employee: string;
  status: string;
}

export async function findGroomingByCode(code: string) {
  try {
    const { data, status }: { data: iGroomingResponse; status: number } =
      await axios(`${process.env.NEXT_PUBLIC_API_URL}/appointment/${code}`);
    const response: iApiResponse = {
      data,
      msg: "busca bem sucedida",
      status,
    };
    return response;

    
  } catch (err) {
    const error = err as AxiosError;

    const errorResponse: iApiResponse = {
      msg: "código invalido",
      status: error.status || 500,
    };
    if (error.status != 404) {
      errorResponse.msg =
        "ocorreu um erro inesperado, fale conosco no whatsapp";
    }

    return errorResponse;
  }
}
