import axios from 'axios';
import { fetchDataFromAPI } from '../services/fetchDataFromApi';
import { mockBody } from './files/mockData';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('should check data from API', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { VerificationResultCode: 'Y' } });
    const result = await fetchDataFromAPI(mockBody);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result).toStrictEqual({ VerificationResultCode: 'Y' });
});
