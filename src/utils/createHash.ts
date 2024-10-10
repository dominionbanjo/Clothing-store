import crypto from "crypto";

const hashString = (string: string) => {
  return crypto.createHash("md5").update(string).digest("hex");
};

export default hashString;
