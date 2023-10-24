import axios from "axios";
import { _HOST_ } from "../config/host";

export const getFenomenos = async () =>
  await axios.get(`http://${_HOST_}:3000/fenomenos`);

export const getEstadosFenomenosRequest = async () =>
  await axios.get(`http://${_HOST_}:3000/estadoFenomeno`);

export const getDeclaratorias = async () =>
  await axios.get(`http://${_HOST_}:3000/declaratoria`);

export const getDeclaratoriaRequest = async (
  declaratorias = [1,2],
  idFenomeno = 1,
  fecha = "2000",
  numDeclaratoria = 2
) =>
  await axios.get(
    `http://${_HOST_}:3000/fenomenosEstados?declaratorias=${JSON.stringify(declaratorias)}&idFenomeno=${idFenomeno}&fecha=${fecha}&numDeclaratoria=${numDeclaratoria}`
  );
/* export const getDeclaratoriaRequest = async(desastre = 1, emergencia = 2, idFenomeno = 1, fecha='2000') =>
    await axios.get(`http://${_HOST_}:3000/fenomenosEstados?desastre=${desastre}&emergencia=${emergencia}&idFenomeno=${idFenomeno}&fecha=${fecha}`); */
