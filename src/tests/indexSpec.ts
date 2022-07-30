import supertest from 'supertest';
import app from '../index';
import fs from 'fs';

const request = supertest(app);

describe('Test if api server is running', () => {
  it('/api endpoint sends OK status', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('/image endpoint sends OK status', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });

  it('Expected to return false when images are not yet processed', () => {
    expect(fs.existsSync('../Images/thumbnail/image.jpg')).toBeFalse();
  });
});
