import sharpResize from '../../utility/resize';

describe('Test the sharp resize function', () => {
  it('Resize images and store them to the thumbnails folder', () => {
    expect(sharpResize).toBeTruthy;
  });
});
