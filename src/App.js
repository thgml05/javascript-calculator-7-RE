import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await this.getInput();
      const numbers = this.splitNumbers(input);
      const result = this.calculateResult(numbers);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {}
  }

  async getInput() {
    return await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
  }

  splitNumbers(input) {
    return input.split(/,|:/).map(Number);
  }

  calculateResult(numbers) {
    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
}

export default App;
