jest.mock('uuid', () => ({
  __esModule: true,
  v4: jest.fn(),
}));
