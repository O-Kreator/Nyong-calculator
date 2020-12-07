import helperFunc from './helper';
import {
  create,
  formatDependencies,
  fractionDependencies,
  addDependencies,
  subsetDependencies,
  multiplyDependencies,
  divideDependencies
} from 'mathjs';


const { format, fraction, add, subtract, multiply, divide } = create({
  formatDependencies,
  fractionDependencies,
  addDependencies,
  subsetDependencies,
  multiplyDependencies,
  divideDependencies
});

export const dataList = [];
export let dataItem = "0"

export const dataFunc = {
  list: {
    isEmpty() {
      return (!dataList.length);
    },
    reset() {
      dataList.splice(0, dataList.length);
    },
    backspace() {
      dataList.pop();
    },
    input(text) {
      if (!dataList.length) {
        dataList.push(text);
        return ;
      }
      try {
        if (helperFunc.isOperator(text) && helperFunc.isOperator(dataList[dataList.length - 1]))
          throw "Operator cannot be input next to operator." ;
        if (helperFunc.isNumber(text) && helperFunc.isNumber(dataList[dataList.length - 1]))
          throw "Number cannot be input next to number.";
      } catch (error) {
        console.error(error);
      }
      
      dataList.push(text);
    },
    replaceRecent(text) {
      if (!dataList.length) {
        dataFunc.list.input(text);
        return ;
      }

      const recentItem = dataList[dataList.length - 1];
      try {
        if (helperFunc.isOperator(text) && helperFunc.isNumber(recentItem))
          throw "Operator cannot replace number.";
        if (helperFunc.isNumber(text) && helperFunc.isOperator(recentItem))
          throw "Number cannot replace operator.";
      } catch (error) {
        console.error(error);
      }
      
      dataFunc.list.backspace();
      dataFunc.list.input(text);
    },
    preCalculate() {
      if (!dataList.length)
        return 0;
      if (dataList.length <= 2)
        return dataList[0];

      let result = fraction(dataList[0]);
      for (let i = 1; i < dataList.length - 1; i += 2) {
        try {
          if (helperFunc.isOperator(dataList[i + 1]))
          throw "Misordered item in dataList.";
        } catch (error) {
          console.error(error);
        }

        const operator = dataList[i];
        if (operator === "+")
          result = add(result, fraction(dataList[i + 1]));
        if (operator === "-")
          result = subtract(result, fraction(dataList[i + 1]));
        if (operator === "*")
          result = multiply(result, fraction(dataList[i + 1]));
        if (operator === "/")
          result = divide(result, fraction(dataList[i + 1]));
      }

      return format(result, {fraction: "decimal", precision: 14});
    },
    calculate() {
      if (!dataList.length)
        return 0;
      if (dataList.length <= 2)
        return dataList[0];

      let result = fraction(dataList[0]);
      for (let i = 1; i < dataList.length; i += 2) {
        try {
          if (helperFunc.isOperator(dataList[i + 1]))
            throw "Misordered item in dataList."
        } catch (error) {
          console.error(error);
        }

        const operator = dataList[i];
        if (operator === "+")
          result = add(result, fraction(dataList[i + 1]));
        if (operator === "-")
          result = subtract(result, fraction(dataList[i + 1]));
        if (operator === "*")
          result = multiply(result, fraction(dataList[i + 1]));
        if (operator === "/")
          result = divide(result, fraction(dataList[i + 1]));
      }

      return format(result, {fraction: "decimal", precision: 14});
    }
  },

  item: {
    reset() {
      dataItem = "0";
    },
    backspace() {
      dataItem = dataItem.slice(0, dataItem.length - 1);
    },
    replace(text) {
      dataItem = text;
    },
    input(text) {
      dataItem += text;
    }
  }
}
