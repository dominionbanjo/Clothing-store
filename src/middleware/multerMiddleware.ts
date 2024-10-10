import multer from "multer";
import DataParser from "datauri/parser";
import path from "path";

const storage = multer.memoryStorage();

const upload = multer({ storage });

const parser = new DataParser();

interface File {
  originalname: string;
  buffer: Buffer;
}

export const formatImage = (file: File): string => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content as string;
};

export default upload;
