import fileExist from '../../utility/fileExist';

describe('Check if file exists', () => {
  it('should check if file exists', () => {
    expect(fileExist).toBeDefined;
  });
});
