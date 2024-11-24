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
  describe('기본 구분자 사용', () => {
    test.each([
      [['1,2,3'], '결과 : 6'],
      [['1:2:3'], '결과 : 6'],
      [['1,2:3'], '결과 : 6'],
    ])(
      '입력값 %s에 대해 계산된 결과는 %s 이어야 함',
      async (inputs, outputs) => {
        mockQuestions(inputs);

        const logSpy = getLogSpy();

        const app = new App();
        await app.run();

        expect(logSpy).toHaveBeenCalledWith(outputs);
      }
    );
  });

  describe('커스텀 구분자 사용', () => {
    test.each([
      [['//;\\n1;3;5'], '결과 : 9'],
      [['//;*\\n1;*3;*5'], '결과 : 9'],
    ])(
      '입력값 %s에 대해 계산된 결과는 %s 이어야 함',
      async (inputs, outputs) => {
        mockQuestions(inputs);

        const logSpy = getLogSpy();

        const app = new App();
        await app.run();

        expect(logSpy).toHaveBeenCalledWith(outputs);
      }
    );
  });
});
