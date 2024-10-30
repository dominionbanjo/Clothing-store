import multer from "multer";
import DatauriParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const parser = new DatauriParser();

interface MulterFile {
  originalname: string;
  buffer: Buffer;
}

export const formatImage = (file: MulterFile): string => {
  const fileExtension = path.extname(file.originalname);
  return parser.format(fileExtension, file.buffer)?.content as string;
};

export default upload;
