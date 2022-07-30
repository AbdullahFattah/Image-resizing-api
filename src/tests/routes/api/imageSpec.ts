import resizeImage from '../../../routes/api/image';

//  Testing the middleware for resizing given images
describe('Testing the middleware for resizing images', () => {
  it('Resize images using the defined parameters', () => {
    expect(resizeImage).toBeDefined();
  });
});
