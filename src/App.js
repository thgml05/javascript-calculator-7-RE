import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      MissionUtils.Console.print(input);
    } catch (error) {}
  }
}

export default App;
