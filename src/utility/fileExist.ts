import path from 'path';
import fs from 'fs-extra';

const fileExist = async (
  width: number,
  height: number,
  name: string
): Promise<boolean> => {
  // Path of the thumbnails folder in which the resized images are saved
  const thumbFolderPath: string = '../Images/thumbnails';
  const folder: string = path.resolve(__dirname, thumbFolderPath);

  const resizedImage: string = `${thumbFolderPath}/${name}_${width}x${height}.jpg`;

  // Checking if thumbnails folder exists, and creating it if it doesn't
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const imageExists: boolean = await fs.pathExists(resizedImage);
  return imageExists;
};
export default fileExist;
