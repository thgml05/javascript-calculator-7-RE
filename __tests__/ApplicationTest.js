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

const runTest = async (inputs, outputs) => {
  mockQuestions(inputs);

  const logSpy = getLogSpy();

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(outputs);
};

describe('문자열 계산기', () => {
  describe('기본 구분자 사용', () => {
    test('쉼표(,) 구분자 테스트', async () => {
      runTest(['1,2,3'], '결과 : 6');
    });

    test('세미콜론(:) 구분자 테스트', async () => {
      runTest(['1:2:3'], '결과 : 6');
    });

    test('쉼표(,) & 세미콜론(:) 구분자 테스트', async () => {
      runTest(['1,2:3'], '결과 : 6');
    });
  });
});
