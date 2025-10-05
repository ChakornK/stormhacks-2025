import { jwtDecode } from "jwt-decode";

const tokenVerificationCache = {};

export const verifyToken = (token) => {
  if (tokenVerificationCache[token]) return tokenVerificationCache[token];

  const t = jwtDecode(token);
  const verified =
    t.aud === process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID &&
    t.exp > Date.now() / 1000 &&
    (t.iss === "accounts.google.com" ||
      t.iss === "https://accounts.google.com");

  const res = verified ? [true, t] : [false];
  tokenVerificationCache[token] = res;
  setTimeout(() => {
    delete tokenVerificationCache[token];
  }, 3600000); // 1 hour
  return res;
};
