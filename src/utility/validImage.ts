// Function to check if the input file name is available
const availableImages: string[] = [
  'coffee',
  'image',
  'nile',
  'painting',
  'puppy',
  'sea',
];
function validImage(input: string): boolean {
  return availableImages.includes(input);
}

export { validImage, availableImages };
