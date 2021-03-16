/**
 * @author い 狂奔的蜗牛
 * @date 2020/6/1
 * @desc 加解密
 */
import { Config } from './config';

const CryptoJS = require('../libs/crypto-js.js');

/**
 * DES  ECB模式加密
 * @param message
 */
export function encryptByDESModeECB(message: string): string {
  const keyHex = CryptoJS.enc.Utf8.parse(Config.DES_KEY);
  const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

/**
 * AES  ECB模式加密
 * @param message
 */
export function encryptByAESModeECB(message: string): string {
  const keyHex = CryptoJS.enc.Utf8.parse(Config.AES_KEY);
  return CryptoJS.AES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}

/**
 * DES  ECB模式解密
 * @param ciphertext
 */
export function decryptByDESModeECB(ciphertext: string): string {
  const keyHex = CryptoJS.enc.Utf8.parse(Config.DES_KEY);
  const decrypted = CryptoJS.DES.decrypt(
    {
      ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    },
    keyHex,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  );
  return decrypted.toString(CryptoJS.enc.Utf8);
}

/**
 * md5 加密
 * @param message
 */
export function md5Encrypt(message: string): string {
  return CryptoJS.MD5(message).toString();
}

/**
 * base64加密
 * @param message
 */
export function encryptBase64(message: string): string {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(message));
}

/**
 * base64 解密
 * @param message
 */
export function decryptBase64(message: string): string {
  return CryptoJS.enc.Base64.parse(message).toString(CryptoJS.enc.Utf8);
}
