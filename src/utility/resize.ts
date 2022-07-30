import sharp from 'sharp';

const sharpResize = async (
  imageIn: string,
  imageOut: string,
  width: string,
  height: string
): Promise<void> => {
  // Using sharp to fetch and resize the requested image.
  await sharp(imageIn)
    .resize({
      width: parseInt(width),
      height: parseInt(height),
      fit: 'contain',
    })
    .toFile(imageOut);
};
export default sharpResize;
