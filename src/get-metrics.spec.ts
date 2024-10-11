import { getMetrics } from './get-metrics';

global.fetch = jest.fn();

describe('getMetrics function', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct number of listeners', async () => {
    const mockXmlResponse = `
      <SHOUTCASTSERVER>
        <CURRENTLISTENERS>15</CURRENTLISTENERS>
      </SHOUTCASTSERVER>
    `;

    (global.fetch as jest.Mock).mockResolvedValue({
      text: jest.fn().mockResolvedValue(mockXmlResponse),
    });

    const result = await getMetrics('http://fake-url.com');

    expect(result).toBe(15); // Expect the parsed listeners to be 15
  });

  it('should return 0 if CURRENTLISTENERS is missing', async () => {
    const mockXmlResponse = `
      <SHOUTCASTSERVER>
        <PEAKLISTENERS>30</PEAKLISTENERS>
      </SHOUTCASTSERVER>
    `;

    (global.fetch as jest.Mock).mockResolvedValue({
      text: jest.fn().mockResolvedValue(mockXmlResponse),
    });

    const result = await getMetrics('http://fake-url.com');

    expect(result).toBe(0); // Expect default 0 if CURRENTLISTENERS is not found
  });

  it('should return 0 if the fetch fails', async () => {
    // Mock the fetch failure
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    // Mock console.error to suppress output
    const consoleErrorMock = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const result = await getMetrics('http://fake-url.com');

    expect(result).toBe(0); // Expect default 0 in case of a fetch failure

    // Restore console.error after the test
    consoleErrorMock.mockRestore();
  });
});