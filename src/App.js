import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );

      const numbers = input.split(/,|:/).map(Number);

      let result = 0;
      for (const number of numbers) {
        result += number;
      }
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {}
  }
}

export default App;
