import { MissionUtils } from '@woowacourse/mission-utils';

const BASIC_DELIMITAR_REGEX = /,|:/;
const BASIC_DELIMITER_NUMBERS_REGEX = /^[0-9,:]+$/;
const GET_CUSTOM_DELIMITER_REGEX = /\/\/(.+?)\\n/;
const GET_NUMBERS_REGEX = /^.*\\n(.*)$/;

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
    if (BASIC_DELIMITER_NUMBERS_REGEX.test(input))
      return this.splitByBasicDelimiter(input);
    return this.splitByCustomDelimiter(input);
  }

  splitByBasicDelimiter(input) {
    return input.split(BASIC_DELIMITAR_REGEX).map(Number);
  }

  splitByCustomDelimiter(input) {
    const customDelimiter = input.match(GET_CUSTOM_DELIMITER_REGEX)[1];
    const numbers = input
      .match(GET_NUMBERS_REGEX)[1]
      .split(customDelimiter)
      .map(Number);
    return numbers;
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
