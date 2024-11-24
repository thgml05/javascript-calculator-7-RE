import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('문자열 계산기', () => {
  test('문자열 입력 테스트', async () => {
    const inputs = ['1,2,3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = '1,2,3';

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(outputs);
  });
});
