import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

export interface iApiResponse {
  status: number;
  msg?: string;
  data?: iAppointment;
}

export interface iPath {
  id: number;
  paused: boolean;
  currentPosition: number;
  steps: string[];
}
export interface iAppointment {
  id: string;
  petKind: string;
  service: string;
  employee: string;
  path: iPath;
}

export async function getAppointment(code: string) {
  try {
    const {
      data,
      status,
    }: { data: iAppointment; status: number} = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/appointment/${code}`
    );

    const response: iApiResponse = {
      data,
      status,
    };
    return response;
  } catch (err) {
    const { message, status } = err as AxiosError;

    const errorResponse: iApiResponse = {
      msg: message,
      status: status || 500,
    };

    return errorResponse;
  }
}
